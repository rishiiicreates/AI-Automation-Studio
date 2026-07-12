"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Sparkles, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function extractConsultationSummary(messages: Message[]): string {
  const lines: string[] = [];
  lines.push("🔔 *New Consultation — Brokkrs AI Agent*");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("");

  for (const msg of messages) {
    const prefix = msg.role === "user" ? "👤 *Client*" : "🤖 *Shiro*";
    lines.push(`${prefix}: ${msg.content}`);
    lines.push("");
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push(`📅 ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`);
  return lines.join("\n");
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (greeted) return;
    setGreeted(true);

    const greet = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [{ role: "user", content: "Hi, I'd like a consultation." }],
          }),
        });
        
        if (!res.ok) throw new Error("API Error");
        
        const data = await res.json();
        const text = data.message?.replace("[CONSULTATION_COMPLETE]", "").trim();
        
        if (!text) throw new Error("Empty message");
        
        setMessages([{ role: "assistant", content: text }]);
      } catch {
        setMessages([
          {
            role: "assistant",
            content:
              "Welcome to Brokkrs! I'm Shiro, your AI consultant. I'd love to learn about your business and help you find the right services. What's your name?",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    greet();
  }, [greeted]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading || completed) return;

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      let reply = data.message ?? "I'm having trouble right now. Please try again.";

      const isComplete = reply.includes("[CONSULTATION_COMPLETE]");
      reply = reply.replace("[CONSULTATION_COMPLETE]", "").trim();

      const assistantMsg: Message = { role: "assistant", content: reply };
      const finalMessages = [...newMessages, assistantMsg];
      setMessages(finalMessages);

      if (isComplete) {
        setCompleted(true);
        const summary = extractConsultationSummary(finalMessages);
        await fetch("/api/notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ summary }),
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-black/5" style={{ height: "500px" }}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-black/5 p-4 flex items-center gap-3 z-10 shrink-0">
        <img src="/cat-pookie.svg" alt="Shiro" className="w-10 h-10 rounded-full object-contain p-1 shadow-sm bg-brand-blue/5 scale-110" />
        <div>
          <h3 className="font-display text-lg leading-none text-black">Shiro</h3>
          <p className="text-xs text-black/50 font-medium">AI Consultant</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide bg-[#fafafa]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            {msg.role === "assistant" && (
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img src="/cat-pookie.svg" alt="Shiro" className="w-full h-full object-contain p-1 scale-125" />
              </div>
            )}

            {/* Bubble */}
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-black text-white rounded-tr-sm"
                  : "bg-white text-black/80 border border-black/5 shadow-sm rounded-tl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
              <img src="/cat-pookie.svg" alt="Shiro" className="w-full h-full object-contain p-1 scale-125" />
            </div>
            <div className="bg-white border border-black/5 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Completion banner */}
        {completed && (
          <div className="mt-4 bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-4 text-center">
            <p className="text-brand-blue font-medium text-sm mb-1">
              ✅ Consultation complete!
            </p>
            <p className="text-black/60 text-xs">
              Your details have been sent to our team.
            </p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input Bar */}
      {!completed && (
        <div className="shrink-0 bg-white border-t border-black/5 p-3">
          <div className="flex items-end gap-2 bg-[#f4f4f4] rounded-2xl p-1.5 focus-within:ring-1 focus-within:ring-brand-blue/30 transition-shadow">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={loading ? "Shiro is typing..." : "Type a message..."}
              disabled={loading}
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-black placeholder:text-black/40 outline-none py-2 px-3 max-h-24 scrollbar-hide"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center shrink-0 hover:bg-brand-blue transition-colors disabled:opacity-30 disabled:hover:bg-black"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
