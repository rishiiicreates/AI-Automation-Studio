"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundStoryAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      
      gsap.to('.story-el-0 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.279768958222121,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1764555349946022
      });
    
      gsap.to('.story-el-1 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.051114171277732,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7289488562382758
      });
    
      gsap.to('.story-el-2 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.2151654977351427,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.594839665107429
      });
    
      gsap.to('.story-el-3 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.558031503111124,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.9848499223589897
      });
    
      gsap.to('.story-el-4 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.176063255406916,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.45421421667560935
      });
    
      gsap.to('.story-el-5 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.35324472328648,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.33431649673730135
      });
    
      gsap.to('.story-el-6 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.149862459395081,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.11064171744510531
      });
    
      gsap.to('.story-el-7 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.65172328427434,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.715957191772759
      });
    
      gsap.to('.story-el-8 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.150408542715013,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.014451649505645
      });
    
      gsap.to('.story-el-9 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.197476489469409,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.36828942457214
      });
    
      gsap.to('.story-el-10 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.673135770019144,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.5814383807592094
      });
    
      gsap.to('.story-el-11 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.145721731707454,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8448765659704804
      });
    
      gsap.to('.story-el-12 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.192817415576428,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2521485737524927
      });
    
      gsap.to('.story-el-13 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.667455545626581,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7683988707140088
      });
    
      gsap.to('.bg-dot-0', {
        x: '+=11.23369918903336vw',
        y: '+=13.179957652464509vh',
        rotation: '+=45',
        duration: 7.956917624454945,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.492183493450284
      });
    
      gsap.to('.bg-dot-1', {
        x: '+=13.627597850281745vw',
        y: '+=-2.406141380779445vh',
        rotation: '+=45',
        duration: 5.725336053408682,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.212667248211801
      });
    
      gsap.to('.bg-dot-2', {
        x: '+=11.218158099800348vw',
        y: '+=0.8911128016188741vh',
        rotation: '+=45',
        duration: 5.508831901010126,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.943253238685429
      });
    
      gsap.to('.bg-dot-3', {
        x: '+=6.524360168259591vw',
        y: '+=4.417885558214039vh',
        rotation: '+=45',
        duration: 9.989455227740109,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.21917439345270395
      });
    
      gsap.to('.bg-dot-4', {
        x: '+=2.292967471294105vw',
        y: '+=4.024107092991471vh',
        rotation: '+=45',
        duration: 9.811152322683483,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1330252261832356
      });
    
      gsap.to('.bg-dot-5', {
        x: '+=-2.8831409057602286vw',
        y: '+=8.49637319566682vh',
        rotation: '+=45',
        duration: 9.986100787296891,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8565941285341978
      });
    
      gsap.to('.bg-dot-6', {
        x: '+=-11.962179117836058vw',
        y: '+=-1.5610839799046516vh',
        rotation: '+=45',
        duration: 4.701347250025719,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.6184226358309388
      });
    
      gsap.to('.bg-dot-7', {
        x: '+=-6.149906620848924vw',
        y: '+=-5.0556007493287325vh',
        rotation: '+=45',
        duration: 9.787890320178121,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6316323345527053
      });
    
      gsap.to('.bg-dot-8', {
        x: '+=-7.335393608082086vw',
        y: '+=-11.162632266059518vh',
        rotation: '+=45',
        duration: 7.884634951129556,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.79414358176291
      });
    
      gsap.to('.bg-dot-9', {
        x: '+=8.737183646298945vw',
        y: '+=-4.913866000715643vh',
        rotation: '+=45',
        duration: 8.064493517857045,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2380889877676964
      });
    
      gsap.to('.bg-dot-10', {
        x: '+=-4.580184007063508vw',
        y: '+=-10.816586266737431vh',
        rotation: '+=45',
        duration: 4.486963741481304,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.846348475664854
      });
    
      gsap.to('.bg-dot-11', {
        x: '+=9.361838037148118vw',
        y: '+=-2.8510486939921975vh',
        rotation: '+=45',
        duration: 8.801559011917561,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6626429576426744
      });
    
      gsap.to('.bg-dot-12', {
        x: '+=-9.570313836447895vw',
        y: '+=12.123234851751477vh',
        rotation: '+=45',
        duration: 4.9384694984182715,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.8797386093065143
      });
    
      gsap.to('.bg-dot-13', {
        x: '+=-14.042750874068588vw',
        y: '+=5.250237516593188vh',
        rotation: '+=45',
        duration: 5.46102808136493,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8232770776376128
      });
    
      gsap.to('.bg-dot-14', {
        x: '+=-11.476938400883228vw',
        y: '+=5.248355178628117vh',
        rotation: '+=45',
        duration: 7.665573827922344,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.990604209713638
      });
    
      gsap.to('.bg-dot-15', {
        x: '+=-14.56816541729495vw',
        y: '+=-9.065577301662415vh',
        rotation: '+=45',
        duration: 6.653270544484258,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.858378479257226
      });
    
      gsap.to('.bg-dot-16', {
        x: '+=10.479188428726047vw',
        y: '+=12.842923016287386vh',
        rotation: '+=45',
        duration: 4.012292876839638,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.4622018253430724
      });
    
      gsap.to('.bg-dot-17', {
        x: '+=-7.020930633880198vw',
        y: '+=-1.2272686371579766vh',
        rotation: '+=45',
        duration: 5.682832125108689,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.912030410952866
      });
    
      gsap.to('.bg-dot-18', {
        x: '+=12.99187874654308vw',
        y: '+=0.607672892510891vh',
        rotation: '+=45',
        duration: 6.515465250238776,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3597084311768413
      });
    
      gsap.to('.bg-dot-19', {
        x: '+=4.1023188550025225vw',
        y: '+=14.342295289970934vh',
        rotation: '+=45',
        duration: 9.940535148140043,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.977395829744637
      });
    
      gsap.to('.bg-dot-20', {
        x: '+=-0.6076539075002074vw',
        y: '+=10.759900112170726vh',
        rotation: '+=45',
        duration: 9.173087358940393,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.968774687498808
      });
    
      gsap.to('.bg-dot-21', {
        x: '+=-14.894861835055053vw',
        y: '+=-3.798483198042959vh',
        rotation: '+=45',
        duration: 6.063305804040283,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.3285684818401933
      });
    
      gsap.to('.bg-dot-22', {
        x: '+=2.2766642295755446vw',
        y: '+=-5.595131821464747vh',
        rotation: '+=45',
        duration: 9.673365963157266,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.2159846425056458
      });
    
      gsap.to('.bg-dot-23', {
        x: '+=5.116459031123668vw',
        y: '+=1.2732448568567634vh',
        rotation: '+=45',
        duration: 4.770693450700492,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.5856313509866595
      });
    
      gsap.to('.bg-dot-24', {
        x: '+=9.291604785248637vw',
        y: '+=-7.023057157639414vh',
        rotation: '+=45',
        duration: 5.958096302114427,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.748528776690364
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
          { x: '-20vw', y: '44.950100420974195vh', rotation: -35, scale: 1.2000000000000002, opacity: 0 },
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
          { x: '120vw', y: '41.541682025417686vh', rotation: 40, scale: 1.04, opacity: 0 },
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
          { x: '-20vw', y: '81.12028129864484vh', rotation: -57, scale: 0.7200000000000001, opacity: 0 },
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
          { x: '120vw', y: '91.17011221125722vh', rotation: 53, scale: 0.96, opacity: 0 },
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
          { x: '-20vw', y: '23.9614631049335vh', rotation: -30, scale: 0.8800000000000001, opacity: 0 },
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
          { x: '120vw', y: '30.709737106226385vh', rotation: 37, scale: 1.1199999999999999, opacity: 0 },
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
          { x: '-20vw', y: '78.79503538832068vh', rotation: -50, scale: 0.96, opacity: 0 },
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
          { x: '120vw', y: '81.86183081474155vh', rotation: 57, scale: 0.8, opacity: 0 },
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
          { x: '-20vw', y: '49.55758346710354vh', rotation: -63, scale: 0.6400000000000001, opacity: 0 },
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
          { x: '120vw', y: '54.379439731128514vh', rotation: 63, scale: 0.6400000000000001, opacity: 0 },
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
           style={{ left: '43.482315610162914vw', top: '87.2248757397756vh', width: '20.052849741652608px', height: '20.052849741652608px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-1 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '16.206878842785954vw', top: '54.6756761148572vh', width: '21.547221262939274px', height: '21.547221262939274px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-2 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '15.644506248645484vw', top: '21.426794002763927vh', width: '22.000885502435267px', height: '22.000885502435267px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-3 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '71.16440187674016vw', top: '84.18355723842978vh', width: '15.262201759032905px', height: '15.262201759032905px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-4 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '12.08645417355001vw', top: '96.670728828758vh', width: '18.79096966702491px', height: '18.79096966702491px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-5 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '60.11568864341825vw', top: '37.68915836699307vh', width: '15.136292950250208px', height: '15.136292950250208px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-6 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '68.99880503769964vw', top: '30.634874547831714vh', width: '13.672360863536596px', height: '13.672360863536596px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-7 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '99.78258982300758vw', top: '88.95318070426583vh', width: '18.801988455466926px', height: '18.801988455466926px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-8 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '92.19852990936488vw', top: '3.6807007621973753vh', width: '20.51539747416973px', height: '20.51539747416973px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-9 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '76.95320937782526vw', top: '28.337740898132324vh', width: '22.110424946062267px', height: '22.110424946062267px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-10 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '24.029047111980617vw', top: '16.40757278073579vh', width: '21.614602100104094px', height: '21.614602100104094px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-11 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.65440540853888vw', top: '41.40862205531448vh', width: '22.075033659115434px', height: '22.075033659115434px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-12 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '55.18778935074806vw', top: '95.18945165909827vh', width: '14.844483951106668px', height: '14.844483951106668px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-13 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '19.034412503242493vw', top: '84.44009048398584vh', width: '13.902546906843781px', height: '13.902546906843781px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-14 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '78.29920428339392vw', top: '89.78502184618264vh', width: '15.376887956634164px', height: '15.376887956634164px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-15 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '31.89666634425521vw', top: '71.48407467175275vh', width: '19.092871497385204px', height: '19.092871497385204px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-16 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '89.46339045651257vw', top: '49.678564723581076vh', width: '17.522964977659285px', height: '17.522964977659285px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-17 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '90.73480404913425vw', top: '57.70954270847142vh', width: '22.719786314293742px', height: '22.719786314293742px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-18 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '70.36581914871931vw', top: '33.11843662522733vh', width: '16.804869663901627px', height: '16.804869663901627px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-19 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '63.925867807120085vw', top: '52.32595910783857vh', width: '18.449139123782516px', height: '18.449139123782516px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-20 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '18.861343315802515vw', top: '31.40441698487848vh', width: '12.312440092675388px', height: '12.312440092675388px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-21 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '72.21643887460232vw', top: '63.81081899162382vh', width: '20.443830309435725px', height: '20.443830309435725px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-22 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.78130376711488vw', top: '1.076204259879887vh', width: '18.22130105830729px', height: '18.22130105830729px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-23 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '2.480338094756007vw', top: '7.238756329752505vh', width: '13.243549223989248px', height: '13.243549223989248px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-24 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '3.6366682732477784vw', top: '70.80319325905293vh', width: '19.584814011119306px', height: '19.584814011119306px', backgroundColor: '#d0c3ff' }} />
    
      
      {/* Choreographed premium story elements */}
      
      <div className="absolute top-0 left-0 story-el-0 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-1 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-2 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-3 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-4 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-5 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-6 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-7 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-8 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-9 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-10 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#baffc9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-11 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-12 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-13 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffdfba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
          </svg>
        </div>
      </div>
    
    </div>
  );
}
