import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLORS = [
  '#a3bfff', // blue
  '#ffb3ba', // pink
  '#baffc9', // green
  '#fceba7', // yellow
  '#e8efd8', // light green
  '#ffdfba', // orange
  '#d0c3ff'  // purple
];

const ICONS = [
  // Laptop
  (color) => `<g transform="scale(1.5)"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="${color}"></rect><line x1="2" y1="20" x2="22" y2="20"></line></g>`,
  // Coffee
  (color) => `<g transform="scale(1.5)"><path d="M17 8h1a4 4 0 1 1 0 8h-1" fill="${color}"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="${color}"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></g>`,
  // Monitor
  (color) => `<g transform="scale(1.5)"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="${color}"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></g>`,
  // Server
  (color) => `<g transform="scale(1.5)"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" fill="${color}"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2" fill="${color}"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></g>`,
  // Code
  (color) => `<g transform="scale(1.5)"><circle cx="12" cy="12" r="10" fill="${color}" stroke="none"></circle><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></g>`,
  // Brain/CPU
  (color) => `<g transform="scale(1.5)"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" fill="${color}"></rect><rect x="9" y="9" width="6" height="6" fill="#fff"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></g>`,
  // Gear
  (color) => `<g transform="scale(1.5)"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" fill="${color}"></path><circle cx="12" cy="12" r="3" fill="#fff"></circle></g>`,
];

function generateRandomPath(seed) {
  // Use a pseudo-random generator so the path is consistent for a given seed
  let m_w = seed;
  let m_z = 987654321;
  const mask = 0xffffffff;
  function seedRandom() {
    m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
    let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  }

  let path = "M 960, -200 ";
  let current_y = 200;
  while (current_y < 9500) {
      let cp1_x = 100 + seedRandom() * 1240;
      let cp1_y = current_y + 100 + seedRandom() * 400;
      
      let cp2_x = 100 + seedRandom() * 1240;
      let cp2_y = cp1_y + 100 + seedRandom() * 400;
      
      let end_x = 100 + seedRandom() * 1240;
      let end_y = cp2_y + 100 + seedRandom() * 400;
      
      path += `C ${cp1_x.toFixed(2)},${cp1_y.toFixed(2)} ${cp2_x.toFixed(2)},${cp2_y.toFixed(2)} ${end_x.toFixed(2)},${end_y.toFixed(2)} `;
      current_y = end_y;
  }
  path += `C ${(100 + seedRandom() * 1240).toFixed(2)},${current_y + 200} 960,9800 960,10000`;
  return path;
}

function generateComponent(componentName, seed) {
  let m_w = seed;
  let m_z = 987654321;
  const mask = 0xffffffff;
  function random() {
    m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
    let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  }

  const height = 10000;
  const width = 1440;
  const cols = 6;
  const cellWidth = width / cols;
  const rows = Math.floor(height / 350); 
  const cellHeight = height / rows;

  const placedIcons = [];
  const placedDots = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (random() < 0.4) {
        const margin = 80;
        const x = (c * cellWidth) + margin + random() * (cellWidth - 2 * margin);
        const y = (r * cellHeight) + margin + random() * (cellHeight - 2 * margin);
        
        const rotation = random() * 360;
        const scale = 0.8 + random() * 0.7; 
        const color = COLORS[Math.floor(random() * COLORS.length)];
        const svgContent = ICONS[Math.floor(random() * ICONS.length)](color);
        
        placedIcons.push({ x, y, rotation, scale, svgContent });
      } else if (random() < 0.3) {
        // Place some abstract dots/circles as requested (the "old doodles" look)
        const margin = 40;
        const x = (c * cellWidth) + margin + random() * (cellWidth - 2 * margin);
        const y = (r * cellHeight) + margin + random() * (cellHeight - 2 * margin);
        const color = COLORS[Math.floor(random() * COLORS.length)];
        const scale = 0.5 + random() * 1.5;
        placedDots.push({ x, y, color, scale });
      }
    }
  }

  let gsapLogic = '';
  let svgNodes = '';

  placedIcons.forEach((icon, i) => {
    const dur = 4 + random() * 4;
    const dx = -20 + random() * 40;
    const dy = -20 + random() * 40;
    const dRot = -15 + random() * 30;

    gsapLogic += `
    gsap.to('#icon-${componentName.toLowerCase()}-${i}', {
      x: '+=${dx}',
      y: '+=${dy}',
      rotation: '+=${dRot}',
      duration: ${dur},
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  `;

    svgNodes += `
      <g id="icon-${componentName.toLowerCase()}-${i}" style={{ transform: 'translate(${icon.x.toFixed(2)}px, ${icon.y.toFixed(2)}px) rotate(${icon.rotation.toFixed(2)}deg) scale(${icon.scale.toFixed(2)})', transformOrigin: 'center' }}>
        <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          ${icon.svgContent}
        </g>
      </g>`;
  });

  placedDots.forEach((dot, i) => {
    const dur = 3 + random() * 5;
    const dx = -10 + random() * 20;
    const dy = -10 + random() * 20;

    gsapLogic += `
    gsap.to('#dot-${componentName.toLowerCase()}-${i}', {
      x: '+=${dx}',
      y: '+=${dy}',
      duration: ${dur},
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  `;

    svgNodes += `
      <circle id="dot-${componentName.toLowerCase()}-${i}" cx="${dot.x.toFixed(2)}" cy="${dot.y.toFixed(2)}" r="${(8 * dot.scale).toFixed(2)}" fill="${dot.color}" stroke="#000" strokeWidth="2" />
    `;
  });

  const wavyPath = generateRandomPath(seed);

  const componentStr = `"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ${componentName}() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      ScrollTrigger.refresh();
    }, 1000);

    let ctx = gsap.context(() => {
      gsap.to("#story-canvas-${componentName.toLowerCase()}", {
        y: () => -(document.documentElement.scrollHeight - window.innerHeight) * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: () => -((document.documentElement.scrollHeight - window.innerHeight) * 0.4),
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      ${gsapLogic}
    }, containerRef);

    return () => {
      clearInterval(refreshInterval);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ width: '100vw', height: '100vh' }}>
      <svg
        id="story-canvas-${componentName.toLowerCase()}"
        viewBox="0 0 1440 ${height}"
        preserveAspectRatio="xMidYMin slice"
        style={{
          width: '100vw',
          height: '${height}px',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {/* The restored long wavy line! */}
        <path
          d="${wavyPath}"
          fill="none"
          stroke="#000"
          strokeWidth="6"
          strokeDasharray="20 40"
          className="opacity-10"
        />
        <path
          ref={pathRef}
          d="${wavyPath}"
          fill="none"
          stroke="#ffdfba"
          strokeWidth="6"
          strokeDasharray="20000"
          strokeDashoffset="20000"
        />
        ${svgNodes}
      </svg>
    </div>
  );
}
`;

  return componentStr;
}

const components = [
  { name: 'BackgroundStory', seed: 10 },
  { name: 'BackgroundStoryAbout', seed: 42 },
  { name: 'BackgroundStoryBlog', seed: 303 },
  { name: 'BackgroundStoryPortfolio', seed: 202 },
  { name: 'BackgroundStoryServices', seed: 101 }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '../src/components', `${comp.name}.tsx`);
  fs.writeFileSync(filePath, generateComponent(comp.name, comp.seed));
  console.log(`Generated ${comp.name}.tsx`);
});
