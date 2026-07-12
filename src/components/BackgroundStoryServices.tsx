"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundStoryServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      
      gsap.to('.story-el-0 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.2797759948298335,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1764697791077197
      });
    
      gsap.to('.story-el-1 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.051108824554831,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7289594444446266
      });
    
      gsap.to('.story-el-2 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.215171339455992,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.5948219816200435
      });
    
      gsap.to('.story-el-3 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.558018425945193,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.9848398761823773
      });
    
      gsap.to('.story-el-4 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.176072850357741,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.45422133430838585
      });
    
      gsap.to('.story-el-5 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.353245641104877,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.3342969473451376
      });
    
      gsap.to('.story-el-6 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.149852208327502,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.11063224310055375
      });
    
      gsap.to('.story-el-7 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.651717069093138,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7159620099700987
      });
    
      gsap.to('.story-el-8 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.150417001452297,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.0144564071670175
      });
    
      gsap.to('.story-el-9 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.197460989002138,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.3683034954592586
      });
    
      gsap.to('.story-el-10 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.673149911686778,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.5814382345415652
      });
    
      gsap.to('.story-el-11 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.145741040352732,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8448634892702103
      });
    
      gsap.to('.story-el-12 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.192838649731129,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2521608266979456
      });
    
      gsap.to('.story-el-13 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.667470670770854,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7683768961578608
      });
    
      gsap.to('.bg-dot-0', {
        x: '+=11.233579621184617vw',
        y: '+=13.180190382990986vh',
        rotation: '+=45',
        duration: 7.956953465472907,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.4921386279165745
      });
    
      gsap.to('.bg-dot-1', {
        x: '+=13.627178929746151vw',
        y: '+=-2.406418933533132vh',
        rotation: '+=45',
        duration: 5.725342518649995,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.21266299393028
      });
    
      gsap.to('.bg-dot-2', {
        x: '+=11.218136069364846vw',
        y: '+=0.8909631776623428vh',
        rotation: '+=45',
        duration: 5.508813604712486,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9432857958599925
      });
    
      gsap.to('.bg-dot-3', {
        x: '+=6.524286651983857vw',
        y: '+=4.41790821030736vh',
        rotation: '+=45',
        duration: 9.989397585391998,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.21915440075099468
      });
    
      gsap.to('.bg-dot-4', {
        x: '+=2.2932483279146254vw',
        y: '+=4.023997758049518vh',
        rotation: '+=45',
        duration: 9.811162147670984,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1330217877402902
      });
    
      gsap.to('.bg-dot-5', {
        x: '+=-2.883323219139129vw',
        y: '+=8.496460583992302vh',
        rotation: '+=45',
        duration: 9.98611567215994,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.856602636165917
      });
    
      gsap.to('.bg-dot-6', {
        x: '+=-11.962146002333611vw',
        y: '+=-1.5610421192832291vh',
        rotation: '+=45',
        duration: 4.701326218433678,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.618425472639501
      });
    
      gsap.to('.bg-dot-7', {
        x: '+=-6.14963288186118vw',
        y: '+=-5.055683290120214vh',
        rotation: '+=45',
        duration: 9.787878558970988,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6316035417839885
      });
    
      gsap.to('.bg-dot-8', {
        x: '+=-7.335603944957256vw',
        y: '+=-11.16301802219823vh',
        rotation: '+=45',
        duration: 7.884614873677492,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.7941634319722652
      });
    
      gsap.to('.bg-dot-9', {
        x: '+=8.736927146092057vw',
        y: '+=-4.913852261379361vh',
        rotation: '+=45',
        duration: 8.064503031317145,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2380950171500444
      });
    
      gsap.to('.bg-dot-10', {
        x: '+=-4.579958526883274vw',
        y: '+=-10.816590646281838vh',
        rotation: '+=45',
        duration: 4.486880070529878,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.8463438730686903
      });
    
      gsap.to('.bg-dot-11', {
        x: '+=9.361822656355798vw',
        y: '+=-2.850977231282741vh',
        rotation: '+=45',
        duration: 8.801543502602726,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6626441078260541
      });
    
      gsap.to('.bg-dot-12', {
        x: '+=-9.57019945140928vw',
        y: '+=12.123158862814307vh',
        rotation: '+=45',
        duration: 4.938479921314865,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.8797423960641026
      });
    
      gsap.to('.bg-dot-13', {
        x: '+=-14.042539265938103vw',
        y: '+=5.250126484315842vh',
        rotation: '+=45',
        duration: 5.461023810785264,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8232868537306786
      });
    
      gsap.to('.bg-dot-14', {
        x: '+=-11.476856817025691vw',
        y: '+=5.24832469644025vh',
        rotation: '+=45',
        duration: 7.6655490272678435,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.990631098859012
      });
    
      gsap.to('.bg-dot-15', {
        x: '+=-14.568142897915095vw',
        y: '+=-9.065820265095681vh',
        rotation: '+=45',
        duration: 6.653260941617191,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8583969473838806
      });
    
      gsap.to('.bg-dot-16', {
        x: '+=10.479472344741225vw',
        y: '+=12.84296456258744vh',
        rotation: '+=45',
        duration: 4.012312472332269,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.462191897444427
      });
    
      gsap.to('.bg-dot-17', {
        x: '+=-7.021039228420705vw',
        y: '+=-1.2276669451966882vh',
        rotation: '+=45',
        duration: 5.682912446092814,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.91201975941658
      });
    
      gsap.to('.bg-dot-18', {
        x: '+=12.991849752143025vw',
        y: '+=0.6075575784780085vh',
        rotation: '+=45',
        duration: 6.515416681300849,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3596870889887214
      });
    
      gsap.to('.bg-dot-19', {
        x: '+=4.102236949838698vw',
        y: '+=14.342449042014778vh',
        rotation: '+=45',
        duration: 9.940527802798897,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9773791804909706
      });
    
      gsap.to('.bg-dot-20', {
        x: '+=-0.6074574147351086vw',
        y: '+=10.760044713970274vh',
        rotation: '+=45',
        duration: 9.173056019004434,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.968780303373933
      });
    
      gsap.to('.bg-dot-21', {
        x: '+=-14.895112593658268vw',
        y: '+=-3.798198464792222vh',
        rotation: '+=45',
        duration: 6.063256301917136,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3285694904625416
      });
    
      gsap.to('.bg-dot-22', {
        x: '+=2.276767606381327vw',
        y: '+=-5.595081313513219vh',
        rotation: '+=45',
        duration: 9.673422274179757,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.215991691686213
      });
    
      gsap.to('.bg-dot-23', {
        x: '+=5.116638243198395vw',
        y: '+=1.2732154713012278vh',
        rotation: '+=45',
        duration: 4.7707035494968295,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.585608186200261
      });
    
      gsap.to('.bg-dot-24', {
        x: '+=9.29131489712745vw',
        y: '+=-7.023460906930268vh',
        rotation: '+=45',
        duration: 5.958090546540916,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.7485140040516853
      });
    

      // 2. Choreographed Scroll Video Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2, // Extremely smooth interpolating scrub
        }
      });

      
        tl.fromTo('.story-el-0',
          { x: '10vw', y: '15vh', rotation: -8, scale: 1.2, opacity: 1 },
          { y: '0vh', ease: 'none', duration: 0.30000000000000004 },
          0
        );
        tl.to('.story-el-0',
          { y: '-20vh', rotation: 12, opacity: 0, scale: 1.44, ease: 'power1.in', duration: 0.09999999999999998 },
          0.30000000000000004
        );
      
        tl.fromTo('.story-el-1',
          { x: '85vw', y: '20vh', rotation: 12, scale: 0.9, opacity: 1 },
          { y: '5vh', ease: 'none', duration: 0.35 },
          0
        );
        tl.to('.story-el-1',
          { y: '-20vh', rotation: -8, opacity: 0, scale: 1.08, ease: 'power1.in', duration: 0.10000000000000003 },
          0.35
        );
      
        tl.fromTo('.story-el-2',
          { x: '15vw', y: '70vh', rotation: 5, scale: 1.4, opacity: 1 },
          { y: '55vh', ease: 'none', duration: 0.4 },
          0
        );
        tl.to('.story-el-2',
          { y: '-20vh', rotation: 25, opacity: 0, scale: 1.68, ease: 'power1.in', duration: 0.09999999999999998 },
          0.4
        );
      
        tl.fromTo('.story-el-3',
          { x: '90vw', y: '60vh', rotation: -15, scale: 1.1, opacity: 1 },
          { y: '45vh', ease: 'none', duration: 0.45000000000000007 },
          0
        );
        tl.to('.story-el-3',
          { y: '-20vh', rotation: -35, opacity: 0, scale: 1.32, ease: 'power1.in', duration: 0.09999999999999998 },
          0.45000000000000007
        );
      
        tl.fromTo('.story-el-4',
          { x: '-20vw', y: '44.94999037589878vh', rotation: -35, scale: 1.2000000000000002, opacity: 0 },
          { x: '8vw', y: '40vh', rotation: 10, scale: 1.5, opacity: 1, ease: 'power2.out', duration: 0.1 },
          0.04999999999999999
        );
        tl.to('.story-el-4',
          { y: '25vh', ease: 'none', duration: 0.44999999999999996 },
          0.15
        );
        tl.to('.story-el-4',
          { y: '-20vh', rotation: 30, opacity: 0, scale: 1.7999999999999998, ease: 'power1.in', duration: 0.09999999999999998 },
          0.6
        );
      
        tl.fromTo('.story-el-5',
          { x: '120vw', y: '41.54169101268053vh', rotation: 40, scale: 1.04, opacity: 0 },
          { x: '88vw', y: '45vh', rotation: -5, scale: 1.3, opacity: 1, ease: 'power2.out', duration: 0.1 },
          0.1
        );
        tl.to('.story-el-5',
          { y: '30vh', ease: 'none', duration: 0.45 },
          0.2
        );
        tl.to('.story-el-5',
          { y: '-20vh', rotation: -25, opacity: 0, scale: 1.56, ease: 'power1.in', duration: 0.09999999999999998 },
          0.65
        );
      
        tl.fromTo('.story-el-6',
          { x: '-20vw', y: '81.1202982114628vh', rotation: -57, scale: 0.7200000000000001, opacity: 0 },
          { x: '20vw', y: '80vh', rotation: -12, scale: 0.9, opacity: 1, ease: 'power2.out', duration: 0.1 },
          0.19999999999999998
        );
        tl.to('.story-el-6',
          { y: '65vh', ease: 'none', duration: 0.45 },
          0.3
        );
        tl.to('.story-el-6',
          { y: '-20vh', rotation: 8, opacity: 0, scale: 1.08, ease: 'power1.in', duration: 0.09999999999999998 },
          0.75
        );
      
        tl.fromTo('.story-el-7',
          { x: '120vw', y: '91.17013545241207vh', rotation: 53, scale: 0.96, opacity: 0 },
          { x: '82vw', y: '85vh', rotation: 8, scale: 1.2, opacity: 1, ease: 'power2.out', duration: 0.1 },
          0.24999999999999997
        );
        tl.to('.story-el-7',
          { y: '70vh', ease: 'none', duration: 0.45000000000000007 },
          0.35
        );
        tl.to('.story-el-7',
          { y: '-20vh', rotation: -12, opacity: 0, scale: 1.44, ease: 'power1.in', duration: 0.09999999999999998 },
          0.8
        );
      
        tl.fromTo('.story-el-8',
          { x: '-20vw', y: '23.96145159844309vh', rotation: -30, scale: 0.8800000000000001, opacity: 0 },
          { x: '12vw', y: '30vh', rotation: 15, scale: 1.1, opacity: 1, ease: 'power2.out', duration: 0.09999999999999998 },
          0.4
        );
        tl.to('.story-el-8',
          { y: '15vh', ease: 'none', duration: 0.4 },
          0.5
        );
        tl.to('.story-el-8',
          { y: '-20vh', rotation: 35, opacity: 0, scale: 1.32, ease: 'power1.in', duration: 0.09999999999999998 },
          0.9
        );
      
        tl.fromTo('.story-el-9',
          { x: '120vw', y: '30.70974674075842vh', rotation: 37, scale: 1.1199999999999999, opacity: 0 },
          { x: '85vw', y: '25vh', rotation: -8, scale: 1.4, opacity: 1, ease: 'power2.out', duration: 0.09999999999999998 },
          0.45000000000000007
        );
        tl.to('.story-el-9',
          { y: '10vh', ease: 'none', duration: 0.35 },
          0.55
        );
        tl.to('.story-el-9',
          { y: '-20vh', rotation: -28, opacity: 0, scale: 1.68, ease: 'power1.in', duration: 0.09999999999999998 },
          0.9
        );
      
        tl.fromTo('.story-el-10',
          { x: '-20vw', y: '78.79492454696447vh', rotation: -50, scale: 0.96, opacity: 0 },
          { x: '18vw', y: '75vh', rotation: -5, scale: 1.2, opacity: 1, ease: 'power2.out', duration: 0.09999999999999998 },
          0.55
        );
        tl.to('.story-el-10',
          { y: '60vh', ease: 'none', duration: 0.25 },
          0.65
        );
        tl.to('.story-el-10',
          { y: '-20vh', rotation: 15, opacity: 0, scale: 1.44, ease: 'power1.in', duration: 0.09999999999999998 },
          0.9
        );
      
        tl.fromTo('.story-el-11',
          { x: '120vw', y: '81.86168539337814vh', rotation: 57, scale: 0.8, opacity: 0 },
          { x: '80vw', y: '80vh', rotation: 12, scale: 1, opacity: 1, ease: 'power2.out', duration: 0.09999999999999998 },
          0.6
        );
        tl.to('.story-el-11',
          { y: '65vh', ease: 'none', duration: 0.20000000000000007 },
          0.7
        );
        tl.to('.story-el-11',
          { y: '-20vh', rotation: -8, opacity: 0, scale: 1.2, ease: 'power1.in', duration: 0.09999999999999998 },
          0.9
        );
      
        tl.fromTo('.story-el-12',
          { x: '-20vw', y: '49.5575695252046vh', rotation: -63, scale: 0.6400000000000001, opacity: 0 },
          { x: '5vw', y: '55vh', rotation: -18, scale: 0.8, opacity: 1, ease: 'power2.out', duration: 0.09999999999999998 },
          0.30000000000000004
        );
        tl.to('.story-el-12',
          { y: '40vh', ease: 'none', duration: 0.44999999999999996 },
          0.4
        );
        tl.to('.story-el-12',
          { y: '-20vh', rotation: 2, opacity: 0, scale: 0.96, ease: 'power1.in', duration: 0.09999999999999998 },
          0.85
        );
      
        tl.fromTo('.story-el-13',
          { x: '120vw', y: '54.37955845147371vh', rotation: 63, scale: 0.6400000000000001, opacity: 0 },
          { x: '95vw', y: '50vh', rotation: 18, scale: 0.8, opacity: 1, ease: 'power2.out', duration: 0.10000000000000003 },
          0.35
        );
        tl.to('.story-el-13',
          { y: '35vh', ease: 'none', duration: 0.45 },
          0.45
        );
        tl.to('.story-el-13',
          { y: '-20vh', rotation: -2, opacity: 0, scale: 0.96, ease: 'power1.in', duration: 0.09999999999999998 },
          0.9
        );
      

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
      
      <div className="absolute bg-dot-0 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '43.48233931232244vw', top: '87.22396674565971vh', width: '20.05292170587927px', height: '20.05292170587927px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-1 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '16.207607905380428vw', top: '54.67614168301225vh', width: '21.547199059277773px', height: '21.547199059277773px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-2 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '15.643388498574495vw', top: '21.42761363647878vh', width: '22.000985738821328px', height: '22.000985738821328px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-3 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '71.16505010053515vw', top: '84.18336207978427vh', width: '15.262059205211699px', height: '15.262059205211699px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-4 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '12.086444674059749vw', top: '96.6706054052338vh', width: '18.790931266732514px', height: '18.790931266732514px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-5 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '60.11520347092301vw', top: '37.68861498683691vh', width: '15.13637199997902px', height: '15.13637199997902px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-6 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '68.99896329268813vw', top: '30.634671519510448vh', width: '13.67239525448531px', height: '13.67239525448531px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-7 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '99.78268307168037vw', top: '88.95303662866354vh', width: '18.80195205565542px', height: '18.80195205565542px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-8 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '92.19923780765384vw', top: '3.680513985455036vh', width: '20.515349610708654px', height: '20.515349610708654px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-9 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '76.95434517227113vw', top: '28.33824553526938vh', width: '22.110436482355px', height: '22.110436482355px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-10 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '24.029152584262192vw', top: '16.406415565870702vh', width: '21.61451608221978px', height: '21.61451608221978px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-11 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.65382694080472vw', top: '41.4086481789127vh', width: '22.07518150471151px', height: '22.07518150471151px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-12 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '55.187255586497486vw', top: '95.19025762565434vh', width: '14.844500636681914px', height: '14.844500636681914px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-13 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '19.034273107536137vw', top: '84.43939310964197vh', width: '13.902608502656221px', height: '13.902608502656221px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-14 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '78.30032417550683vw', top: '89.7847022395581vh', width: '15.377011489123106px', height: '15.377011489123106px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-15 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '31.89565478824079vw', top: '71.48434310220182vh', width: '19.092904617078602px', height: '19.092904617078602px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-16 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '89.46342412382364vw', top: '49.678939185105264vh', width: '17.522958051413298px', height: '17.522958051413298px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-17 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '90.73439391795546vw', top: '57.709035160951316vh', width: '22.719796140678227px', height: '22.719796140678227px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-18 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '70.36522522103041vw', top: '33.117834269069135vh', width: '16.80485526379198px', height: '16.80485526379198px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-19 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '63.92542994581163vw', top: '52.3255628766492vh', width: '18.449121728539467px', height: '18.449121728539467px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-20 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '18.86127891484648vw', top: '31.40487929340452vh', width: '12.312514336779714px', height: '12.312514336779714px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-21 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '72.21658995840698vw', top: '63.810907723382115vh', width: '20.443807393312454px', height: '20.443807393312454px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-22 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.78144032228738vw', top: '1.0762686608359218vh', width: '18.221319942735136px', height: '18.221319942735136px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-23 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '2.4809683905914426vw', top: '7.2376115480437875vh', width: '13.243474122136831px', height: '13.243474122136831px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-24 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '3.636533417738974vw', top: '70.80363880377263vh', width: '19.58478636201471px', height: '19.58478636201471px', backgroundColor: '#d0c3ff' }} />
    
      
      {/* Choreographed premium story elements */}
      
      <div className="absolute top-0 left-0 story-el-0 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-1 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-2 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-3 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-4 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-5 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-6 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-7 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-8 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-9 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-10 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#baffc9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-11 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-12 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-13 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffdfba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
      </div>
    
    </div>
  );
}
