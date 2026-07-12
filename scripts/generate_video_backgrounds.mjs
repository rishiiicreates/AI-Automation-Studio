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
  
  // More elements for absolute chaos!
  const numStoryElements = 40; 
  const numDots = 80;

  let storyElements = [];
  let dotElements = [];
  let tlLogic = '';
  let ambientLogic = '';

  // Grid for even distribution
  const cols = 8;
  const rows = 5;
  let cells = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      cells.push({ c, r });
    }
  }
  // Shuffle grid cells
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  // Generate large "story" elements
  for (let i = 0; i < numStoryElements; i++) {
    const iconKey = allowedIcons[Math.floor(random() * allowedIcons.length)];
    const color = COLORS[Math.floor(random() * COLORS.length)];
    
    // Scale reduced significantly to avoid overlap and look proportional
    const scale = 0.7 + random() * 0.8; 
    
    // Evenly distributed target cell
    const cell = cells[i % cells.length];
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;
    
    // Add some organic jitter inside the cell
    const jitterX = (random() * cellWidth * 0.8) - (cellWidth * 0.4);
    const jitterY = (random() * cellHeight * 0.8) - (cellHeight * 0.4);
    
    // Final center target position
    const finalX = (cell.c * cellWidth) + (cellWidth / 2) + jitterX - 50; 
    const finalY = (cell.r * cellHeight) + (cellHeight / 2) + jitterY - 50;

    // Timeline durations
    const durationIn = 0.15;
    const durationDrift = 0.4;
    const durationOut = 0.15;

    // Start coordinates (offscreen in a random direction)
    const angleStart = random() * Math.PI * 2;
    const startX = Math.cos(angleStart) * 120; // 120vw away
    const startY = Math.sin(angleStart) * 120; // 120vh away
    
    // End coordinates (offscreen in a random direction)
    const angleEnd = random() * Math.PI * 2;
    const endX = Math.cos(angleEnd) * 120;
    const endY = Math.sin(angleEnd) * 120;
    
    // Chaotic drift path around target
    const drift1X = finalX + (random() * 20 - 10);
    const drift1Y = finalY + (random() * 20 - 10);
    const drift2X = finalX + (random() * 20 - 10);
    const drift2Y = finalY + (random() * 20 - 10);

    const rot0 = -180 + random() * 360;
    const rot1 = rot0 + (-180 + random() * 360);
    const rot2 = rot1 + (-180 + random() * 360);
    const rot3 = rot2 + (-180 + random() * 360);
    const rot4 = rot3 + (-180 + random() * 360);

    // Make 15 elements start ALREADY on screen at scroll 0
    if (i < 15) {
      // These elements are already in the middle of their drift at scroll 0
      tlLogic += `
        // Already on screen, start drifting immediately
        tl.fromTo('.story-el-${i}', 
          { x: '${finalX}vw', y: '${finalY}vh', rotation: ${rot1}, scale: ${scale}, opacity: 1 }, 
          { x: '${drift1X}vw', y: '${drift1Y}vh', rotation: ${rot2}, ease: 'sine.inOut', duration: ${durationDrift/2} }, 
          0
        );
        tl.to('.story-el-${i}', 
          { x: '${drift2X}vw', y: '${drift2Y}vh', rotation: ${rot3}, ease: 'sine.inOut', duration: ${durationDrift/2} }, 
          ${durationDrift/2}
        );
        // Fly out later
        tl.to('.story-el-${i}', 
          { x: '${endX}vw', y: '${endY}vh', rotation: ${rot4}, scale: 0, opacity: 0, ease: 'power2.in', duration: ${durationOut} }, 
          ${0.3 + random() * 0.5}
        );
      `;
    } else {
      // These elements fly in during the scroll
      const startTime = random() * 0.6; // Enter randomly between 0 and 60% scroll
      
      tlLogic += `
        // Fly in rapidly
        tl.fromTo('.story-el-${i}', 
          { x: '${startX}vw', y: '${startY}vh', rotation: ${rot0}, scale: 0, opacity: 0 }, 
          { x: '${finalX}vw', y: '${finalY}vh', rotation: ${rot1}, scale: ${scale}, opacity: 1, ease: 'back.out(1.2)', duration: ${durationIn} }, 
          ${startTime}
        );
        // Chaotic drift waypoint 1
        tl.to('.story-el-${i}', 
          { x: '${drift1X}vw', y: '${drift1Y}vh', rotation: ${rot2}, ease: 'sine.inOut', duration: ${durationDrift/2} }, 
          ${startTime + durationIn}
        );
        // Chaotic drift waypoint 2
        tl.to('.story-el-${i}', 
          { x: '${drift2X}vw', y: '${drift2Y}vh', rotation: ${rot3}, ease: 'sine.inOut', duration: ${durationDrift/2} }, 
          ${startTime + durationIn + (durationDrift/2)}
        );
        // Fly out rapidly
        tl.to('.story-el-${i}', 
          { x: '${endX}vw', y: '${endY}vh', rotation: ${rot4}, scale: 0, opacity: 0, ease: 'power2.in', duration: ${durationOut} }, 
          ${startTime + durationIn + durationDrift}
        );
      `;
    }

    // Ambient floating (happens continuously, even when NOT scrolling, making it feel like a video!)
    const ambientDur = 2 + random() * 3;
    const ambientRot = -15 + random() * 30;
    ambientLogic += `
      gsap.to('.story-el-${i} .bg-interactive', {
        y: '+=20',
        rotation: '${ambientRot}',
        duration: ${ambientDur},
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: ${random() * 2}
      });
    `;

    storyElements.push(`
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 story-el-${i} opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="${color}" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
            ${ICONS[iconKey]}
          </svg>
        </div>
      </div>
    `);
  }

  // Generate small floating elements for extreme chaos
  for (let i = 0; i < numDots; i++) {
    const x = random() * 100;
    const y = random() * 100;
    const color = COLORS[Math.floor(random() * COLORS.length)];
    const size = 8 + random() * 16;

    // Fast, chaotic background dots
    const dur = 2 + random() * 4;
    const dx = -30 + random() * 60;
    const dy = -30 + random() * 60;
    const rot = -180 + random() * 360;
    
    ambientLogic += `
      gsap.to('.bg-dot-${i}', {
        x: '+=${dx}vw',
        y: '+=${dy}vh',
        rotation: '${rot}',
        duration: ${dur},
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: ${random() * 3}
      });
    `;

    // Mix of shapes (circle, square, triangle-ish)
    let shape = 'rounded-full';
    const sType = random();
    if (sType > 0.6) shape = 'rounded-md rotate-45';
    else if (sType > 0.3) shape = 'rounded-sm';
    
    dotElements.push(`
      <div className="absolute bg-dot-${i} ${shape} border-2 border-black opacity-30 pointer-events-none" 
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
      
      // 1. Ambient Chaotic Video-like Floating (Runs constantly without scroll)
      ${ambientLogic}

      // 2. Scroll-driven timeline (Scrubbed on scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Smooth timeline scrubbing
        }
      });

      ${tlLogic}

      // 3. Magnetic Repulsion Logic
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
          
          if (distance < 300) {
            // Repel away from cursor chaotically
            const force = (300 - distance) / 300;
            const moveX = (distX / distance) * force * 80;
            const moveY = (distY / distance) * force * 80;
            const rot = (distX / distance) * force * 45; // Spin away
            gsap.to(el, { x: moveX, y: moveY, rotation: rot, scale: 1.2, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          } else {
            // Snap back
            gsap.to(el, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
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
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ width: '100vw', height: '100vh' }}>
      {/* Small floating chaotic elements */}
      ${dotElements.join('')}
      
      {/* Main interactive story elements */}
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
