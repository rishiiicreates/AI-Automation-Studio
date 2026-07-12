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

const ICONS = {
  laptop: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>`,
  monitor: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>`,
  database: `<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>`,
  coffee: `<path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line>`,
  mobile: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>`,
  gear: `<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,
  brain: `<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>`,
  code: `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,
  cloud: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>`,
  wrench: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>`,
  terminal: `<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>`,
  pen: `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>`,
}

const PAGE_ICONS = {
  BackgroundStory: Object.keys(ICONS),
  BackgroundStoryAbout: ['coffee', 'brain', 'mobile', 'laptop'],
  BackgroundStoryServices: ['gear', 'database', 'cloud', 'wrench', 'monitor', 'terminal'],
  BackgroundStoryPortfolio: ['laptop', 'mobile', 'monitor', 'code', 'pen'],
  BackgroundStoryBlog: ['coffee', 'pen', 'laptop', 'code'],
};

// Premium, curated choreography instead of random chaos.
// We carefully position 14 elements across the scroll timeline so they frame the content beautifully.
const CHOREOGRAPHY = [
  // Top Section (Always visible on load)
  { startX: 10, startY: 15, rot: -8, scale: 1.2, enterAt: 0.0, leaveAt: 0.4 },
  { startX: 85, startY: 20, rot: 12, scale: 0.9, enterAt: 0.0, leaveAt: 0.45 },
  { startX: 15, startY: 70, rot: 5,  scale: 1.4, enterAt: 0.0, leaveAt: 0.5 },
  { startX: 90, startY: 60, rot: -15, scale: 1.1, enterAt: 0.0, leaveAt: 0.55 },

  // Middle Section (Glides in as you scroll past 15-20%)
  { startX: 8,  startY: 40, rot: 10, scale: 1.5, enterAt: 0.15, leaveAt: 0.7 },
  { startX: 88, startY: 45, rot: -5, scale: 1.3, enterAt: 0.20, leaveAt: 0.75 },
  { startX: 20, startY: 80, rot: -12, scale: 0.9, enterAt: 0.30, leaveAt: 0.85 },
  { startX: 82, startY: 85, rot: 8,  scale: 1.2, enterAt: 0.35, leaveAt: 0.9 },

  // Bottom Section (Glides in as you reach the bottom half)
  { startX: 12, startY: 30, rot: 15, scale: 1.1, enterAt: 0.5, leaveAt: 1.0 },
  { startX: 85, startY: 25, rot: -8, scale: 1.4, enterAt: 0.55, leaveAt: 1.0 },
  { startX: 18, startY: 75, rot: -5, scale: 1.2, enterAt: 0.65, leaveAt: 1.0 },
  { startX: 80, startY: 80, rot: 12, scale: 1.0, enterAt: 0.7,  leaveAt: 1.0 },

  // Additional subtle fillers
  { startX: 5,  startY: 55, rot: -18, scale: 0.8, enterAt: 0.4, leaveAt: 0.95 },
  { startX: 95, startY: 50, rot: 18,  scale: 0.8, enterAt: 0.45, leaveAt: 1.0 },
];

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

  const allowedIcons = PAGE_ICONS[componentName] || PAGE_ICONS['BackgroundStory'];

  let storyElements = [];
  let dotElements = [];
  let tlLogic = '';
  let ambientLogic = '';

  // Generate the highly curated GSAP timeline
  CHOREOGRAPHY.forEach((conf, i) => {
    const iconKey = allowedIcons[Math.floor(random() * allowedIcons.length)];
    const color = COLORS[Math.floor(random() * COLORS.length)];
    
    // Calculate entry points (offscreen left or right)
    const fromX = conf.startX < 50 ? -20 : 120;
    const fromY = conf.startY + (random() * 20 - 10);
    const fromRot = conf.rot - (conf.startX < 50 ? 45 : -45);

    // Calculate exit points (drifting upwards as if scrolling past)
    const outY = -20;
    const outRot = conf.rot + (conf.startX < 50 ? 20 : -20);

    const entryStart = Math.max(0, conf.enterAt - 0.1);
    const entryDuration = conf.enterAt - entryStart;
    
    const exitStart = Math.max(0, conf.leaveAt - 0.1);
    const exitDuration = conf.leaveAt - exitStart;

    const driftDuration = exitStart - conf.enterAt;
    // Parallax drift during main visibility
    const driftY = conf.startY - 15; 

    if (conf.enterAt === 0) {
      // Element is visible immediately on page load
      tlLogic += `
        tl.fromTo('.story-el-${i}',
          { x: '${conf.startX}vw', y: '${conf.startY}vh', rotation: ${conf.rot}, scale: ${conf.scale}, opacity: 1 },
          { y: '${driftY}vh', ease: 'none', duration: ${driftDuration} },
          0
        );
        tl.to('.story-el-${i}',
          { y: '${outY}vh', rotation: ${outRot}, opacity: 0, scale: ${conf.scale * 1.2}, ease: 'power1.in', duration: ${exitDuration} },
          ${exitStart}
        );
      `;
    } else {
      // Element glides in smoothly as you scroll
      tlLogic += `
        tl.fromTo('.story-el-${i}',
          { x: '${fromX}vw', y: '${fromY}vh', rotation: ${fromRot}, scale: ${conf.scale * 0.8}, opacity: 0 },
          { x: '${conf.startX}vw', y: '${conf.startY}vh', rotation: ${conf.rot}, scale: ${conf.scale}, opacity: 1, ease: 'power2.out', duration: ${entryDuration} },
          ${entryStart}
        );
        tl.to('.story-el-${i}',
          { y: '${driftY}vh', ease: 'none', duration: ${driftDuration} },
          ${conf.enterAt}
        );
        tl.to('.story-el-${i}',
          { y: '${outY}vh', rotation: ${outRot}, opacity: 0, scale: ${conf.scale * 1.2}, ease: 'power1.in', duration: ${exitDuration} },
          ${exitStart}
        );
      `;
    }

    // Elegant, slow ambient breathing (no aggressive jerking)
    ambientLogic += `
      gsap.to('.story-el-${i} .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: ${3 + random() * 2},
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: ${random() * 2}
      });
    `;

    storyElements.push(`
      <div className="absolute top-0 left-0 story-el-${i} opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="${color}" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            ${ICONS[iconKey]}
          </svg>
        </div>
      </div>
    `);
  });

  // Generate beautifully minimal floating background shapes
  const numDots = 25; // Drastically reduced for a cleaner premium look
  for (let i = 0; i < numDots; i++) {
    const x = random() * 100;
    const y = random() * 100;
    const color = COLORS[Math.floor(random() * COLORS.length)];
    const size = 12 + random() * 12;

    const dur = 4 + random() * 6;
    const dx = -15 + random() * 30;
    const dy = -15 + random() * 30;
    
    ambientLogic += `
      gsap.to('.bg-dot-${i}', {
        x: '+=${dx}vw',
        y: '+=${dy}vh',
        rotation: '+=45',
        duration: ${dur},
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: ${random() * 4}
      });
    `;

    const shape = random() > 0.5 ? 'rounded-full' : 'rounded-md rotate-45';
    
    dotElements.push(`
      <div className="absolute bg-dot-${i} ${shape} border border-black opacity-25 pointer-events-none" 
           style={{ left: '${x}vw', top: '${y}vh', width: '${size}px', height: '${size}px', backgroundColor: '${color}' }} />
    `);
  }

  const componentStr = `"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ${componentName}() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      ${ambientLogic}

      // 2. Choreographed Scroll Video Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2, // Extremely smooth interpolating scrub
        }
      });

      ${tlLogic}

      // 3. Elegant Magnetic Repulsion
      const interactiveEls = document.querySelectorAll('.bg-interactive');
      
      const onMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        interactiveEls.forEach((el: any) => {
          const rect = el.getBoundingClientRect();
          const elX = rect.left + rect.width / 2;
          const elY = rect.top + rect.height / 2;
          
          const distX = elX - mouseX;
          const distY = elY - mouseY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          if (distance < 200) {
            // Smoothly push away (Max 30px distance)
            const force = (200 - distance) / 200;
            const moveX = (distX / distance) * force * 30;
            const moveY = (distY / distance) * force * 30;
            gsap.to(el, { x: moveX, y: moveY, duration: 0.4, ease: "sine.out", overwrite: "auto" });
          } else {
            // Smoothly snap back
            gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "sine.inOut", overwrite: "auto" });
          }
        });
      };
      
      window.addEventListener('mousemove', onMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent" style={{ width: '100vw', height: '100vh' }}>
      {/* Subtle floating background shapes */}
      ${dotElements.join('')}
      
      {/* Choreographed premium story elements */}
      ${storyElements.join('')}
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
