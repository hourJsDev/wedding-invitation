import React, { useEffect, useRef, useState } from 'react';

/**
 * Extended window interface to handle global GSAP from CDN
 */
interface CustomWindow extends Window {
  gsap?: any;
}

declare const window: CustomWindow;

/**
 * FallingRoses Component (TSX version)
 * Uses CDN-loaded GSAP with TypeScript type safety.
 */
const FlowerDrop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);

  // Load GSAP from CDN
  useEffect(() => {
    if (window.gsap) {
      setGsapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => setGsapLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !containerRef.current) return;

    const gsap = window.gsap;
    const container = containerRef.current;
    
    // Function to get current window dimensions
    const getDims = () => ({
      w: window.innerWidth,
      h: window.innerHeight
    });

    const { w, h } = getDims();
    const TOTAL_SETS = 10;

    // Set initial perspective
    gsap.set(container, { perspective: 600 });

    const R = (min: number, max: number): number => min + Math.random() * (max - min);

    const animatePetal = (elm: HTMLDivElement, initialDelay: number) => {
      // Vertical fall
      gsap.to(elm, {
        y: h + 100,
        duration: R(6, 15),
        ease: "none",
        repeat: -1,
        delay: initialDelay,
      });

      // Horizontal sway
      gsap.to(elm, {
        x: '+=100',
        rotationZ: R(0, 180),
        duration: R(4, 8),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3D rotations
      gsap.to(elm, {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        duration: R(2, 8),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: -5
      });
    };

    const roseImages: string[] = [
      'https://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose2.png',
      'https://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose.png',
      'https://img.babathe.com/upload/specialDisplay/htmlImage/2019/20190104_rose3.png'
    ];

    const delays: number[] = [-15, -25, -5];

    // Clear previous elements if any (for HMR/React Strict Mode)
    container.innerHTML = '';

    for (let i = 0; i < TOTAL_SETS; i++) {
      roseImages.forEach((src, index) => {
        const div = document.createElement('div');
        
        Object.assign(div.style, {
          width: '10px',
          height: '10px',
          position: 'absolute',
          backgroundImage: `url(${src})`,
          backgroundSize: '100% 100%',
          pointerEvents: 'none',
          top: '0px',
          left: '0px'
        });

        container.appendChild(div);

        gsap.set(div, {
          x: R(0, w),
          y: R(-200, -150),
          z: R(-200, 200),
          xPercent: -50,
          yPercent: -50
        });

        animatePetal(div, delays[index]);
      });
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, [gsapLoaded]);

  return (
    <div className='fixed pointer-events-none z-[999999] w-full h-full bottom-0 left-0'>
        <div className="relative w-full h-screen bg-transparent overflow-hidden">
      {/* Animation Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full"
      />

    </div>
    </div>
  );
};

export default FlowerDrop