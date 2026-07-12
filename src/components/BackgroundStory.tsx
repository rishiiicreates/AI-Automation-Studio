"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      
      gsap.to('.story-el-0 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.2797754863277078,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1764736715704203
      });
    
      gsap.to('.story-el-1 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.051104657351971,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7289617345668375
      });
    
      gsap.to('.story-el-2 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.215165950357914,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.5948363249190152
      });
    
      gsap.to('.story-el-3 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.558021009899676,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.9848383022472262
      });
    
      gsap.to('.story-el-4 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.176082361955196,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.45420104544609785
      });
    
      gsap.to('.story-el-5 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.3532680189237,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.33429451286792755
      });
    
      gsap.to('.story-el-6 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.149862329941243,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.11065461486577988
      });
    
      gsap.to('.story-el-7 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.651703379116952,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.715970613528043
      });
    
      gsap.to('.story-el-8 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.150413782801479,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.0144402757287025
      });
    
      gsap.to('.story-el-9 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.197477137669921,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.3683014484122396
      });
    
      gsap.to('.story-el-10 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.673134306911379,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.581441046204418
      });
    
      gsap.to('.story-el-11 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.145750570110977,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8448640024289489
      });
    
      gsap.to('.story-el-12 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.192837968003005,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2521595139987767
      });
    
      gsap.to('.story-el-13 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.667478894349188,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.76838389178738
      });
    
      gsap.to('.bg-dot-0', {
        x: '+=11.233802831266075vw',
        y: '+=13.180134014692158vh',
        rotation: '+=45',
        duration: 7.95691990852356,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.4921778263524175
      });
    
      gsap.to('.bg-dot-1', {
        x: '+=13.627312984317541vw',
        y: '+=-2.406277908012271vh',
        rotation: '+=45',
        duration: 5.725365133024752,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.212689211592078
      });
    
      gsap.to('.bg-dot-2', {
        x: '+=11.218309707473963vw',
        y: '+=0.890837050974369vh',
        rotation: '+=45',
        duration: 5.508812340442091,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9432614436373115
      });
    
      gsap.to('.bg-dot-3', {
        x: '+=6.524144005961716vw',
        y: '+=4.41796638071537vh',
        rotation: '+=45',
        duration: 9.989463217090815,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.21917075384408236
      });
    
      gsap.to('.bg-dot-4', {
        x: '+=2.2930323821492493vw',
        y: '+=4.023894835263491vh',
        rotation: '+=45',
        duration: 9.811198202427477,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1330084707587957
      });
    
      gsap.to('.bg-dot-5', {
        x: '+=-2.8833135799504817vw',
        y: '+=8.49646545946598vh',
        rotation: '+=45',
        duration: 9.986109782475978,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8565853759646416
      });
    
      gsap.to('.bg-dot-6', {
        x: '+=-11.96221259655431vw',
        y: '+=-1.5612618578597903vh',
        rotation: '+=45',
        duration: 4.70136331114918,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.6184552358463407
      });
    
      gsap.to('.bg-dot-7', {
        x: '+=-6.149954230058938vw',
        y: '+=-5.055555982980877vh',
        rotation: '+=45',
        duration: 9.78794635599479,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6316479509696364
      });
    
      gsap.to('.bg-dot-8', {
        x: '+=-7.335271770134568vw',
        y: '+=-11.162648044992238vh',
        rotation: '+=45',
        duration: 7.884669117163867,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.7941814372316003
      });
    
      gsap.to('.bg-dot-9', {
        x: '+=8.736950343009084vw',
        y: '+=-4.913733790162951vh',
        rotation: '+=45',
        duration: 8.064542669337243,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2380639929324389
      });
    
      gsap.to('.bg-dot-10', {
        x: '+=-4.5803140522912145vw',
        y: '+=-10.816933033056557vh',
        rotation: '+=45',
        duration: 4.486906708218157,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.8463189033791423
      });
    
      gsap.to('.bg-dot-11', {
        x: '+=9.361730001401156vw',
        y: '+=-2.851149521302432vh',
        rotation: '+=45',
        duration: 8.80153173301369,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6626578513532877
      });
    
      gsap.to('.bg-dot-12', {
        x: '+=-9.570298288017511vw',
        y: '+=12.12339244550094vh',
        rotation: '+=45',
        duration: 4.9384545353241265,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.879729313775897
      });
    
      gsap.to('.bg-dot-13', {
        x: '+=-14.04275702079758vw',
        y: '+=5.250344288069755vh',
        rotation: '+=45',
        duration: 5.461005568969995,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8233028100803494
      });
    
      gsap.to('.bg-dot-14', {
        x: '+=-11.476718850899488vw',
        y: '+=5.248348431196064vh',
        rotation: '+=45',
        duration: 7.665550035890192,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9906537644565105
      });
    
      gsap.to('.bg-dot-15', {
        x: '+=-14.568115558940917vw',
        y: '+=-9.06584121985361vh',
        rotation: '+=45',
        duration: 6.653241614345461,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8583384631201625
      });
    
      gsap.to('.bg-dot-16', {
        x: '+=10.47933702589944vw',
        y: '+=12.843016858678311vh',
        rotation: '+=45',
        duration: 4.0123350084759295,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.462209278717637
      });
    
      gsap.to('.bg-dot-17', {
        x: '+=-7.021120022982359vw',
        y: '+=-1.227657780982554vh',
        rotation: '+=45',
        duration: 5.682909596245736,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.91203825827688
      });
    
      gsap.to('.bg-dot-18', {
        x: '+=12.991964304819703vw',
        y: '+=0.6077664694748819vh',
        rotation: '+=45',
        duration: 6.5154372826218605,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3596869027242064
      });
    
      gsap.to('.bg-dot-19', {
        x: '+=4.1022003488615155vw',
        y: '+=14.342305005993694vh',
        rotation: '+=45',
        duration: 9.940492580644786,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9773945147171617
      });
    
      gsap.to('.bg-dot-20', {
        x: '+=-0.6077837501652539vw',
        y: '+=10.759992375969887vh',
        rotation: '+=45',
        duration: 9.173028321005404,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9687675032764673
      });
    
      gsap.to('.bg-dot-21', {
        x: '+=-14.895098246634007vw',
        y: '+=-3.7985134846530855vh',
        rotation: '+=45',
        duration: 6.0633109281770885,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.328564831055701
      });
    
      gsap.to('.bg-dot-22', {
        x: '+=2.2768564336001873vw',
        y: '+=-5.5951747368089855vh',
        rotation: '+=45',
        duration: 9.673411457333714,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.2159611638635397
      });
    
      gsap.to('.bg-dot-23', {
        x: '+=5.116563553456217vw',
        y: '+=1.2733073439449072vh',
        rotation: '+=45',
        duration: 4.77074383571744,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.5855797762051225
      });
    
      gsap.to('.bg-dot-24', {
        x: '+=9.29164563305676vw',
        y: '+=-7.02343559358269vh',
        rotation: '+=45',
        duration: 5.958087009377778,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.748487134464085
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
          { x: '-20vw', y: '44.950175625272095vh', rotation: -35, scale: 1.2000000000000002, opacity: 0 },
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
          { x: '120vw', y: '41.54163060244173vh', rotation: 40, scale: 1.04, opacity: 0 },
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
          { x: '-20vw', y: '81.12003419082612vh', rotation: -57, scale: 0.7200000000000001, opacity: 0 },
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
          { x: '120vw', y: '91.17008926346898vh', rotation: 53, scale: 0.96, opacity: 0 },
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
          { x: '-20vw', y: '23.96135037764907vh', rotation: -30, scale: 0.8800000000000001, opacity: 0 },
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
          { x: '120vw', y: '30.70981463417411vh', rotation: 37, scale: 1.1199999999999999, opacity: 0 },
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
          { x: '-20vw', y: '78.79510584753007vh', rotation: -50, scale: 0.96, opacity: 0 },
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
          { x: '120vw', y: '81.8618372734636vh', rotation: 57, scale: 0.8, opacity: 0 },
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
          { x: '-20vw', y: '49.55763240810484vh', rotation: -63, scale: 0.6400000000000001, opacity: 0 },
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
          { x: '120vw', y: '54.37929775565863vh', rotation: 63, scale: 0.6400000000000001, opacity: 0 },
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
           style={{ left: '43.48274243529886vw', top: '87.22472218796611vh', width: '20.052956574596465px', height: '20.052956574596465px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-1 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '16.206483426503837vw', top: '54.67632878571749vh', width: '21.547282964922488px', height: '21.547282964922488px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-2 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '15.644103847444057vw', top: '21.426996029913425vh', width: '22.000949067994952px', height: '22.000949067994952px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-3 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '71.16405027918518vw', top: '84.18286135420203vh', width: '15.262040108442307px', height: '15.262040108442307px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-4 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '12.085243803448975vw', top: '96.67195959482342vh', width: '18.790847732685506px', height: '18.790847732685506px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-5 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '60.116365598514676vw', top: '37.688470305874944vh', width: '15.136358695104718px', height: '15.136358695104718px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-6 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '68.99902955628932vw', top: '30.634079477749765vh', width: '13.672481867484748px', height: '13.672481867484748px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-7 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '99.7830047737807vw', top: '88.95312952809036vh', width: '18.801859228871763px', height: '18.801859228871763px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-8 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '92.19848215579987vw', top: '3.681940003298223vh', width: '20.51536446902901px', height: '20.51536446902901px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-9 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '76.95365371182561vw', top: '28.3371051074937vh', width: '22.110369033180177px', height: '22.110369033180177px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-10 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '24.028188176453114vw', top: '16.406855592504144vh', width: '21.61454323399812px', height: '21.61454323399812px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-11 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.65482261776924vw', top: '41.407832014374435vh', width: '22.07504347153008px', height: '22.07504347153008px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-12 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '55.187432281672955vw', top: '95.1893248828128vh', width: '14.844415937550366px', height: '14.844415937550366px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-13 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '19.0352639881894vw', top: '84.43925317842513vh', width: '13.902615915052593px', height: '13.902615915052593px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-14 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '78.29901068471372vw', top: '89.78529863525182vh', width: '15.37701026815921px', height: '15.37701026815921px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-15 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '31.896827067248523vw', top: '71.48372218944132vh', width: '19.09287525806576px', height: '19.09287525806576px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-16 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '89.46254458278418vw', top: '49.67830991372466vh', width: '17.52290356066078px', height: '17.52290356066078px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-17 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '90.73375926818699vw', top: '57.70958524663001vh', width: '22.719880297780037px', height: '22.719880297780037px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-18 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '70.36515851505101vw', top: '33.11822023242712vh', width: '16.804765747860074px', height: '16.804765747860074px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-19 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '63.92620876431465vw', top: '52.32570848893374vh', width: '18.44903993513435px', height: '18.44903993513435px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-20 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '18.861378240399063vw', top: '31.404476589523256vh', width: '12.312471203505993px', height: '12.312471203505993px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-21 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '72.21583970822394vw', top: '63.8119864044711vh', width: '20.443855150602758px', height: '20.443855150602758px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-22 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.78138486202806vw', top: '1.075781392864883vh', width: '18.221234950236976px', height: '18.221234950236976px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-23 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '2.4805393535643816vw', top: '7.237385818734765vh', width: '13.243636510334909px', height: '13.243636510334909px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-24 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '3.6372327944263816vw', top: '70.80375333316624vh', width: '19.584891077131033px', height: '19.584891077131033px', backgroundColor: '#d0c3ff' }} />
    
      
      {/* Choreographed premium story elements */}
      
      <div className="absolute top-0 left-0 story-el-0 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
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
            <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-3 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-4 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
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
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
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
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-9 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-10 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#baffc9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-11 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-12 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-13 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffdfba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
    
    </div>
  );
}
