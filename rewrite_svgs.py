import os

svg_data = {
    "portfolio_chat.svg": "#e8efd8",
    "portfolio_data.svg": "#fceba7",
    "portfolio_datainfra.svg": "#d0c3ff",
    "portfolio_rag.svg": "#a3bfff",
    "portfolio_webdev.svg": "#ffb3c6"
}

svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <!-- Background of the window -->
  <rect width="800" height="500" fill="{color}"/>
  <!-- Browser Top Bar -->
  <rect x="0" y="0" width="800" height="60" fill="#ffffff"/>
  <line x1="0" y1="60" x2="800" y2="60" stroke="#000000" stroke-width="4"/>
  <!-- Mac dots -->
  <circle cx="40" cy="30" r="8" fill="#ff5f56" stroke="#000000" stroke-width="2"/>
  <circle cx="70" cy="30" r="8" fill="#ffbd2e" stroke="#000000" stroke-width="2"/>
  <circle cx="100" cy="30" r="8" fill="#27c93f" stroke="#000000" stroke-width="2"/>
  
  <!-- Subtle Placeholder Text -->
  <text x="400" y="270" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#000000" opacity="0.2" text-anchor="middle">Project Screenshot</text>
</svg>"""

for filename, color in svg_data.items():
    filepath = os.path.join("public", filename)
    if os.path.exists(filepath):
        with open(filepath, "w") as f:
            f.write(svg_template.format(color=color))
        print(f"Updated {filename}")
    else:
        print(f"File not found: {filename}")
