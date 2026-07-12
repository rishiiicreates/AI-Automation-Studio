"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Send, Sparkles, User } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";


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
    const prefix = msg.role === "user" ? "👤 *Client*" : "🤖 *Nova*";
    lines.push(`${prefix}: ${msg.content}`);
    lines.push("");
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push(`📅 ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`);
  return lines.join("\n");
}

export default function ConsultPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Auto-focus input without scrolling
  useEffect(() => {
    if (!loading) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [loading]);

  // Send initial greeting
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
        // Send to Telegram
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
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Shiro Avatar & Header */}
        <div className="w-full md:w-[40%] lg:w-[45%] sticky top-32 flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/cat-pookie.svg" alt="Shiro" className="w-full max-w-[320px] lg:max-w-[400px] drop-shadow-2xl mb-8" />
          <h1 className="text-4xl md:text-6xl font-display text-black mb-4">
            Consultation
          </h1>
          <p className="text-lg text-black/60 max-w-md">
            Chat with Shiro to discuss your project.
          </p>
        </div>

        {/* Right Side: AI Agent Chat Interface */}
        <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col gap-8">
          {/* Chat Area */}
          <div className="flex flex-col gap-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "assistant"
                      ? "bg-transparent overflow-hidden"
                      : "bg-black/5 text-black/40"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <img src="/cat-pookie.svg" alt="Shiro" className="w-full h-full object-contain p-1 scale-125" />
                  ) : (
                    <User size={16} />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[85%] text-base leading-relaxed pt-2 ${
                    msg.role === "user"
                      ? "text-black text-right"
                      : "text-black/80"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-transparent overflow-hidden">
                  <img src="/cat-pookie.svg" alt="Shiro" className="w-full h-full object-contain p-1 scale-125" />
                </div>
                <div className="pt-4 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Completion banner */}
            {completed && (
              <div className="mt-8 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-8 text-center">
                <p className="text-brand-blue font-display text-2xl mb-2">
                  Consultation complete
                </p>
                <p className="text-black/50 text-sm font-sans max-w-[40ch] mx-auto">
                  Your details have been sent to the Brokkrs team. We'll review your needs and reach out within 24 hours.
                </p>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input Bar */}
          {!completed && (
            <div className="mt-4 flex items-end gap-4 border-b border-black/15 pb-3 focus-within:border-brand-blue/50 transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={loading ? "Shiro is typing..." : "Type your response..."}
                disabled={loading}
                rows={1}
                className="flex-1 resize-none bg-transparent text-lg text-black placeholder:text-black/30 outline-none py-1 px-0 max-h-40 scrollbar-hide"
                style={{ cursor: "auto" }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="text-black/40 hover:text-brand-blue transition-colors disabled:opacity-30 disabled:hover:text-black/40 mb-1"
                style={{ cursor: "pointer" }}
              >
                <Send size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
