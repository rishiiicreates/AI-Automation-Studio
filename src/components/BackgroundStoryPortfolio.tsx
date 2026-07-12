"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundStoryPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      
      gsap.to('.story-el-0 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.2797668338753283,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1764564043842256
      });
    
      gsap.to('.story-el-1 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.051100706215948,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7289455006830394
      });
    
      gsap.to('.story-el-2 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.215163235552609,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.5948258484713733
      });
    
      gsap.to('.story-el-3 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.558022936340421,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.9848469886928797
      });
    
      gsap.to('.story-el-4 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.176059274934232,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.454219036269933
      });
    
      gsap.to('.story-el-5 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.35325031587854,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.3343043439090252
      });
    
      gsap.to('.story-el-6 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.1498631085269153,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.1106382654979825
      });
    
      gsap.to('.story-el-7 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.651731257326901,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7159511195495725
      });
    
      gsap.to('.story-el-8 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.15041286079213,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.0144474827684462
      });
    
      gsap.to('.story-el-9 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.197473248001188,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.3682903405278921
      });
    
      gsap.to('.story-el-10 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.673143085092306,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.5814250535331666
      });
    
      gsap.to('.story-el-11 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.145730127580464,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8448783461935818
      });
    
      gsap.to('.story-el-12 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.192836723290384,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2521549058146775
      });
    
      gsap.to('.story-el-13 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.667460873257369,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7683822107501328
      });
    
      gsap.to('.bg-dot-0', {
        x: '+=11.233638734556735vw',
        y: '+=13.179991361685097vh',
        rotation: '+=45',
        duration: 7.9569977526552975,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.4921507919207215
      });
    
      gsap.to('.bg-dot-1', {
        x: '+=13.627191111445427vw',
        y: '+=-2.406374244019389vh',
        rotation: '+=45',
        duration: 5.725373758003116,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.2126795034855604
      });
    
      gsap.to('.bg-dot-2', {
        x: '+=11.218315595760942vw',
        y: '+=0.8911182498559356vh',
        rotation: '+=45',
        duration: 5.508838148321956,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.943273251876235
      });
    
      gsap.to('.bg-dot-3', {
        x: '+=6.524067688733339vw',
        y: '+=4.417939230334014vh',
        rotation: '+=45',
        duration: 9.989415287971497,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.21913155540823936
      });
    
      gsap.to('.bg-dot-4', {
        x: '+=2.293100659735501vw',
        y: '+=4.02379508363083vh',
        rotation: '+=45',
        duration: 9.811197587754577,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.133047970943153
      });
    
      gsap.to('.bg-dot-5', {
        x: '+=-2.883193069137633vw',
        y: '+=8.49636965431273vh',
        rotation: '+=45',
        duration: 9.986147361341864,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8565768552944064
      });
    
      gsap.to('.bg-dot-6', {
        x: '+=-11.962011731229722vw',
        y: '+=-1.5611101174727082vh',
        rotation: '+=45',
        duration: 4.70135849295184,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.6184427430853248
      });
    
      gsap.to('.bg-dot-7', {
        x: '+=-6.14966859575361vw',
        y: '+=-5.055824581068009vh',
        rotation: '+=45',
        duration: 9.787884804885834,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6316152876242995
      });
    
      gsap.to('.bg-dot-8', {
        x: '+=-7.335545048117638vw',
        y: '+=-11.16301114205271vh',
        rotation: '+=45',
        duration: 7.884647227823734,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.7941374108195305
      });
    
      gsap.to('.bg-dot-9', {
        x: '+=8.736976850777864vw',
        y: '+=-4.914069268852472vh',
        rotation: '+=45',
        duration: 8.064522420056164,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2380918907001615
      });
    
      gsap.to('.bg-dot-10', {
        x: '+=-4.579991516657174vw',
        y: '+=-10.816683482844383vh',
        rotation: '+=45',
        duration: 4.486882699653506,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.846374270506203
      });
    
      gsap.to('.bg-dot-11', {
        x: '+=9.36192046618089vw',
        y: '+=-2.8510023141279817vh',
        rotation: '+=45',
        duration: 8.801512299571186,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6626295251771808
      });
    
      gsap.to('.bg-dot-12', {
        x: '+=-9.570391571614891vw',
        y: '+=12.123362410347909vh',
        rotation: '+=45',
        duration: 4.93845276394859,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.8797240499407053
      });
    
      gsap.to('.bg-dot-13', {
        x: '+=-14.042720133438706vw',
        y: '+=5.250161422882229vh',
        rotation: '+=45',
        duration: 5.461049087811261,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8232704848051071
      });
    
      gsap.to('.bg-dot-14', {
        x: '+=-11.476662845816463vw',
        y: '+=5.248388894833624vh',
        rotation: '+=45',
        duration: 7.665509677026421,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9906616117805243
      });
    
      gsap.to('.bg-dot-15', {
        x: '+=-14.567956931423396vw',
        y: '+=-9.065631008706987vh',
        rotation: '+=45',
        duration: 6.6532320897094905,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8583954572677612
      });
    
      gsap.to('.bg-dot-16', {
        x: '+=10.479360949248075vw',
        y: '+=12.8429115540348vh',
        rotation: '+=45',
        duration: 4.012356879655272,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.4621645575389266
      });
    
      gsap.to('.bg-dot-17', {
        x: '+=-7.02089925063774vw',
        y: '+=-1.2276117224246264vh',
        rotation: '+=45',
        duration: 5.682902528904378,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9119911789894104
      });
    
      gsap.to('.bg-dot-18', {
        x: '+=12.991908732801676vw',
        y: '+=0.607662764377892vh',
        rotation: '+=45',
        duration: 6.515421987045556,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3596940021961927
      });
    
      gsap.to('.bg-dot-19', {
        x: '+=4.102453636005521vw',
        y: '+=14.342246716842055vh',
        rotation: '+=45',
        duration: 9.940564884338528,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.977402404882014
      });
    
      gsap.to('.bg-dot-20', {
        x: '+=-0.6074624299071729vw',
        y: '+=10.759896563831717vh',
        rotation: '+=45',
        duration: 9.173016336280853,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9688106076791883
      });
    
      gsap.to('.bg-dot-21', {
        x: '+=-14.895053068175912vw',
        y: '+=-3.7983317440375686vh',
        rotation: '+=45',
        duration: 6.063280181959271,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3285867357626557
      });
    
      gsap.to('.bg-dot-22', {
        x: '+=2.276618715841323vw',
        y: '+=-5.594917258713394vh',
        rotation: '+=45',
        duration: 9.673413153272122,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.215979965403676
      });
    
      gsap.to('.bg-dot-23', {
        x: '+=5.1168519258499146vw',
        y: '+=1.2733901711180806vh',
        rotation: '+=45',
        duration: 4.770716181024909,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.5855840481817722
      });
    
      gsap.to('.bg-dot-24', {
        x: '+=9.291400553192943vw',
        y: '+=-7.023453796282411vh',
        rotation: '+=45',
        duration: 5.958051210269332,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.7484928518533707
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
          { x: '-20vw', y: '44.95002958457917vh', rotation: -35, scale: 1.2000000000000002, opacity: 0 },
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
          { x: '120vw', y: '41.541633983142674vh', rotation: 40, scale: 1.04, opacity: 0 },
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
          { x: '-20vw', y: '81.12029612995684vh', rotation: -57, scale: 0.7200000000000001, opacity: 0 },
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
          { x: '120vw', y: '91.17022696416825vh', rotation: 53, scale: 0.96, opacity: 0 },
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
          { x: '-20vw', y: '23.961416380479932vh', rotation: -30, scale: 0.8800000000000001, opacity: 0 },
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
          { x: '120vw', y: '30.70965461898595vh', rotation: 37, scale: 1.1199999999999999, opacity: 0 },
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
          { x: '-20vw', y: '78.7949882587418vh', rotation: -50, scale: 0.96, opacity: 0 },
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
          { x: '120vw', y: '81.86179852113128vh', rotation: 57, scale: 0.8, opacity: 0 },
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
          { x: '-20vw', y: '49.55764393787831vh', rotation: -63, scale: 0.6400000000000001, opacity: 0 },
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
          { x: '120vw', y: '54.37953927088529vh', rotation: 63, scale: 0.6400000000000001, opacity: 0 },
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
           style={{ left: '43.481707433238626vw', top: '87.22411759663373vh', width: '20.052864896133542px', height: '20.052864896133542px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-1 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '16.207330068573356vw', top: '54.67546454165131vh', width: '21.547278977930546px', height: '21.547278977930546px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-2 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '15.643466473557055vw', top: '21.427309792488813vh', width: '22.000933882780373px', height: '22.000933882780373px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-3 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '71.16463391575962vw', top: '84.18398492503911vh', width: '15.262094484642148px', height: '15.262094484642148px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-4 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '12.086402554996312vw', top: '96.67067860718817vh', width: '18.790846911258996px', height: '18.790846911258996px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-5 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '60.11535569559783vw', top: '37.68802098929882vh', width: '15.136330428533256px', height: '15.136330428533256px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-6 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '68.99920834694058vw', top: '30.634272238239646vh', width: '13.672305160202086px', height: '13.672305160202086px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-7 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '99.78204094804823vw', top: '88.95343656186014vh', width: '18.801902160979807px', height: '18.801902160979807px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-8 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '92.19876860734075vw', top: '3.6806080723181367vh', width: '20.515379399992526px', height: '20.515379399992526px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-9 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '76.95403946563601vw', top: '28.337868046946824vh', width: '22.110521405003965px', height: '22.110521405003965px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-10 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '24.02876417618245vw', top: '16.40658115502447vh', width: '21.61453021131456px', height: '21.61453021131456px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-11 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.653845311142504vw', top: '41.4079946000129vh', width: '22.075167696923018px', height: '22.075167696923018px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-12 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '55.18652289174497vw', top: '95.19008558709174vh', width: '14.844457816332579px', height: '14.844457816332579px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-13 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '19.03473276179284vw', top: '84.43969930522144vh', width: '13.902568079531193px', height: '13.902568079531193px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-14 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '78.30017230007797vw', top: '89.78516377974302vh', width: '15.37700882088393px', height: '15.37700882088393px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-15 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '31.895862822420895vw', top: '71.48431120440364vh', width: '19.092852693982422px', height: '19.092852693982422px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-16 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '89.4630421185866vw', top: '49.67831296380609vh', width: '17.522905851714313px', height: '17.522905851714313px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-17 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '90.73392455466092vw', top: '57.7093301108107vh', width: '22.719865718856454px', height: '22.719865718856454px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-18 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '70.36454468034208vw', top: '33.117992780171335vh', width: '16.804839924909174px', height: '16.804839924909174px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-19 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '63.92568901646882vw', top: '52.3256863001734vh', width: '18.449085742235184px', height: '18.449085742235184px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-20 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '18.86116866953671vw', top: '31.404118961654603vh', width: '12.312467641197145px', height: '12.312467641197145px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-21 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '72.21638304181397vw', top: '63.811085489578545vh', width: '20.443889203481376px', height: '20.443889203481376px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-22 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.780898245982826vw', top: '1.076792716048658vh', width: '18.22126537654549px', height: '18.22126537654549px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-23 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '2.4808577029034495vw', top: '7.237979467026889vh', width: '13.243479005992413px', height: '13.243479005992413px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-24 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '3.6368974251672626vw', top: '70.80344459973276vh', width: '19.584794891998172px', height: '19.584794891998172px', backgroundColor: '#d0c3ff' }} />
    
      
      {/* Choreographed premium story elements */}
      
      <div className="absolute top-0 left-0 story-el-0 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-1 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-2 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
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
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-5 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-6 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-7 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-8 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
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
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
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
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      </div>
    
    </div>
  );
}
