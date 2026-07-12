"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundStoryBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Premium Ambient Breathing (Slow, elegant, continuous)
      
      gsap.to('.story-el-0 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.279757672920823,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.1764735472388566
      });
    
      gsap.to('.story-el-1 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.051092587877065,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7289620744995773
      });
    
      gsap.to('.story-el-2 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.215155131649226,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.5948297153227031
      });
    
      gsap.to('.story-el-3 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.558027446269989,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.984854101203382
      });
    
      gsap.to('.story-el-4 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.176076217088848,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.45421673776581883
      });
    
      gsap.to('.story-el-5 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.353254990652204,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.3343117404729128
      });
    
      gsap.to('.story-el-6 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.1498434911482036,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.11064428836107254
      });
    
      gsap.to('.story-el-7 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.651714927982539,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7159707471728325
      });
    
      gsap.to('.story-el-8 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.1504087201319635,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.014438558369875
      });
    
      gsap.to('.story-el-9 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.197454989422113,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.368307703640312
      });
    
      gsap.to('.story-el-10 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 3.673136258497834,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.5814423901028931
      });
    
      gsap.to('.story-el-11 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.145749732851982,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8448626850731671
      });
    
      gsap.to('.story-el-12 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.192834796849638,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2521489849314094
      });
    
      gsap.to('.story-el-13 .bg-interactive', {
        y: '+=12',
        rotation: '+=4',
        duration: 4.667451075743884,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.7683875253424048
      });
    
      gsap.to('.bg-dot-0', {
        x: '+=11.233697854913771vw',
        y: '+=13.180250104051083vh',
        rotation: '+=45',
        duration: 7.956950487103313,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.492162954993546
      });
    
      gsap.to('.bg-dot-1', {
        x: '+=13.627203300129622vw',
        y: '+=-2.4063295545056462vh',
        rotation: '+=45',
        duration: 5.725313446018845,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.2126960130408406
      });
    
      gsap.to('.bg-dot-2', {
        x: '+=11.218037358485162vw',
        y: '+=0.8908155653625727vh',
        rotation: '+=45',
        duration: 5.5088626919314265,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9432607088238
      });
    
      gsap.to('.bg-dot-3', {
        x: '+=6.5243064891546965vw',
        y: '+=4.417970243375748vh',
        rotation: '+=45',
        duration: 9.989432990550995,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.21916974522173405
      });
    
      gsap.to('.bg-dot-4', {
        x: '+=2.2929529985412955vw',
        y: '+=4.024050172884017vh',
        rotation: '+=45',
        duration: 9.811141473706812,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.133013118058443
      });
    
      gsap.to('.bg-dot-5', {
        x: '+=-2.8830629121512175vw',
        y: '+=8.496278724633157vh',
        rotation: '+=45',
        duration: 9.986087497789413,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.856612109579146
      });
    
      gsap.to('.bg-dot-6', {
        x: '+=-11.961877453140914vw',
        y: '+=-1.5611781156621873vh',
        rotation: '+=45',
        duration: 4.701299213338643,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.6184600135311484
      });
    
      gsap.to('.bg-dot-7', {
        x: '+=-6.14970430964604vw',
        y: '+=-5.055965872015804vh',
        rotation: '+=45',
        duration: 9.787891050800681,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6316270334646106
      });
    
      gsap.to('.bg-dot-8', {
        x: '+=-7.3354861442931vw',
        y: '+=-11.16300426190719vh',
        rotation: '+=45',
        duration: 7.884588029235601,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.7941724248230457
      });
    
      gsap.to('.bg-dot-9', {
        x: '+=8.737026555463672vw',
        y: '+=-4.9138285126537085vh',
        rotation: '+=45',
        duration: 8.064541810192168,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.238088763318956
      });
    
      gsap.to('.bg-dot-10', {
        x: '+=-4.580024506431073vw',
        y: '+=-10.816776319406927vh',
        rotation: '+=45',
        duration: 4.486885328777134,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.846343632787466
      });
    
      gsap.to('.bg-dot-11', {
        x: '+=9.362018269021064vw',
        y: '+=-2.8510273969732225vh',
        rotation: '+=45',
        duration: 8.801572649274021,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6626149425283074
      });
    
      gsap.to('.bg-dot-12', {
        x: '+=-9.570125928148627vw',
        y: '+=12.123108187224716vh',
        rotation: '+=45',
        duration: 4.938425606582314,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.8797057047486305
      });
    
      gsap.to('.bg-dot-13', {
        x: '+=-14.042443237267435vw',
        y: '+=5.2501963544636965vh',
        rotation: '+=45',
        duration: 5.461074364837259,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.8232541158795357
      });
    
      gsap.to('.bg-dot-14', {
        x: '+=-11.47692664526403vw',
        y: '+=5.248453100211918vh',
        rotation: '+=45',
        duration: 7.665561879519373,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9906310895457864
      });
    
      gsap.to('.bg-dot-15', {
        x: '+=-14.568228728603572vw',
        y: '+=-9.065899509005249vh',
        rotation: '+=45',
        duration: 6.65320323780179,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.8583939680829644
      });
    
      gsap.to('.bg-dot-16', {
        x: '+=10.479249560739845vw',
        y: '+=12.842858545482159vh',
        rotation: '+=45',
        duration: 4.0123097342439,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.462198252789676
      });
    
      gsap.to('.bg-dot-17', {
        x: '+=-7.020759272854775vw',
        y: '+=-1.2275564996525645vh',
        rotation: '+=45',
        duration: 5.6828926131129265,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9120236337184906
      });
    
      gsap.to('.bg-dot-18', {
        x: '+=12.991967713460326vw',
        y: '+=0.6077679502777755vh',
        rotation: '+=45',
        duration: 6.515427292790264,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.359700915403664
      });
    
      gsap.to('.bg-dot-19', {
        x: '+=4.102212565485388vw',
        y: '+=14.342502162326127vh',
        rotation: '+=45',
        duration: 9.940510413143784,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.9773645931854844
      });
    
      gsap.to('.bg-dot-20', {
        x: '+=-0.6074674520641565vw',
        y: '+=10.75974841369316vh',
        rotation: '+=45',
        duration: 9.173068206291646,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.9687798768281937
      });
    
      gsap.to('.bg-dot-21', {
        x: '+=-14.894993542693555vw',
        y: '+=-3.7984650232829154vh',
        rotation: '+=45',
        duration: 6.063304063398391,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.32860398106277
      });
    
      gsap.to('.bg-dot-22', {
        x: '+=2.2764698253013194vw',
        y: '+=-5.5952109675854445vh',
        rotation: '+=45',
        duration: 9.673404032364488,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.2159682400524616
      });
    
      gsap.to('.bg-dot-23', {
        x: '+=5.116607844829559vw',
        y: '+=1.2731071142479777vh',
        rotation: '+=45',
        duration: 4.7707288125529885,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2.585620946250856
      });
    
      gsap.to('.bg-dot-24', {
        x: '+=9.291486202273518vw',
        y: '+=-7.023446685634553vh',
        rotation: '+=45',
        duration: 5.958103426732123,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.748532734811306
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
          { x: '-20vw', y: '44.95006879325956vh', rotation: -35, scale: 1.2000000000000002, opacity: 0 },
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
          { x: '120vw', y: '41.541576948948205vh', rotation: 40, scale: 1.04, opacity: 0 },
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
          { x: '-20vw', y: '81.1202940531075vh', rotation: -57, scale: 0.7200000000000001, opacity: 0 },
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
          { x: '120vw', y: '91.17031847126782vh', rotation: 53, scale: 0.96, opacity: 0 },
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
          { x: '-20vw', y: '23.961381167173386vh', rotation: -30, scale: 0.8800000000000001, opacity: 0 },
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
          { x: '120vw', y: '30.709562497213483vh', rotation: 37, scale: 1.1199999999999999, opacity: 0 },
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
          { x: '-20vw', y: '78.79505196586251vh', rotation: -50, scale: 0.96, opacity: 0 },
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
          { x: '120vw', y: '81.86160647775978vh', rotation: 57, scale: 0.8, opacity: 0 },
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
          { x: '-20vw', y: '49.55771834589541vh', rotation: -63, scale: 0.6400000000000001, opacity: 0 },
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
          { x: '120vw', y: '54.379520090296865vh', rotation: 63, scale: 0.6400000000000001, opacity: 0 },
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
           style={{ left: '43.48260143306106vw', top: '87.22426842432469vh', width: '20.05280808918178px', height: '20.05280808918178px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-1 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '16.207052231766284vw', top: '54.67631327919662vh', width: '21.54717579111457px', height: '21.54717579111457px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-2 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '15.643544448539615vw', top: '21.427005948498845vh', width: '22.00088202673942px', height: '22.00088202673942px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-3 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '71.16421773098409vw', top: '84.1830818913877vh', width: '15.262129764072597px', height: '15.262129764072597px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-4 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '12.08636041264981vw', top: '96.67075180914253vh', width: '18.79094565846026px', height: '18.79094565846026px', backgroundColor: '#ffb3ba' }} />
    
      <div className="absolute bg-dot-5 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '60.115507896989584vw', top: '37.68895287066698vh', width: '15.136288857087493px', height: '15.136288857087493px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-6 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '68.99945340119302vw', top: '30.633872956968844vh', width: '13.672398171387613px', height: '13.672398171387613px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-7 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '99.78292470332235vw', top: '88.95383647177368vh', width: '18.801852266304195px', height: '18.801852266304195px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-8 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '92.19829940702766vw', top: '3.680702159181237vh', width: '20.515409189276397px', height: '20.515409189276397px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-9 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '76.9537337590009vw', top: '28.337490558624268vh', width: '22.11042322218418px', height: '22.11042322218418px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-10 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '24.028375768102705vw', top: '16.406746744178236vh', width: '21.61454434040934px', height: '21.61454434040934px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-11 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.653863658197224vw', top: '41.40886690001935vh', width: '22.075153889134526px', height: '22.075153889134526px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-12 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '55.18731609918177vw', top: '95.18991352524608vh', width: '14.84441499877721px', height: '14.84441499877721px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-13 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '19.035192392766476vw', top: '84.44000550080091vh', width: '13.902527656406164px', height: '13.902527656406164px', backgroundColor: '#baffc9' }} />
    
      <div className="absolute bg-dot-14 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '78.30002040136606vw', top: '89.78562531992793vh', width: '15.377006149850786px', height: '15.377006149850786px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-15 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '31.896070833317935vw', top: '71.48427930660546vh', width: '19.092800770886242px', height: '19.092800770886242px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-16 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '89.46266009006649vw', top: '49.67921262141317vh', width: '17.52285365201533px', height: '17.52285365201533px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-17 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '90.73345519136637vw', top: '57.70962506067008vh', width: '22.71975219156593px', height: '22.71975219156593px', backgroundColor: '#ffdfba' }} />
    
      <div className="absolute bg-dot-18 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '70.36539001855999vw', top: '33.11815126799047vh', width: '16.80482458602637px', height: '16.80482458602637px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-19 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '63.92594808712602vw', top: '52.3258097236976vh', width: '18.4490497559309px', height: '18.4490497559309px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-20 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '18.86105842422694vw', top: '31.404884508810937vh', width: '12.312420945614576px', height: '12.312420945614576px', backgroundColor: '#d0c3ff' }} />
    
      <div className="absolute bg-dot-21 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '72.21617612522095vw', top: '63.811263255774975vh', width: '20.443787908181548px', height: '20.443787908181548px', backgroundColor: '#e8efd8' }} />
    
      <div className="absolute bg-dot-22 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '57.78188204858452vw', top: '1.0757908690720797vh', width: '18.221210810355842px', height: '18.221210810355842px', backgroundColor: '#a3bfff' }} />
    
      <div className="absolute bg-dot-23 rounded-full border border-black opacity-25 pointer-events-none" 
           style={{ left: '2.4807470152154565vw', top: '7.238347386009991vh', width: '13.243483889847994px', height: '13.243483889847994px', backgroundColor: '#fceba7' }} />
    
      <div className="absolute bg-dot-24 rounded-md rotate-45 border border-black opacity-25 pointer-events-none" 
           style={{ left: '3.6372614093124866vw', top: '70.80325039569288vh', width: '19.584803421981633px', height: '19.584803421981633px', backgroundColor: '#d0c3ff' }} />
    
      
      {/* Choreographed premium story elements */}
      
      <div className="absolute top-0 left-0 story-el-0 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
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
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-3 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-4 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#e8efd8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-5 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffb3ba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-6 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-7 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-8 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#d0c3ff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-9 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-10 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#baffc9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-11 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#a3bfff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-12 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#fceba7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
    
      <div className="absolute top-0 left-0 story-el-13 opacity-0 pointer-events-auto">
        <div className="bg-interactive p-6" data-magnetic="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffdfba" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm opacity-90">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </div>
      </div>
    
    </div>
  );
}
