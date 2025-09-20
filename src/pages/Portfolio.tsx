import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Portfolio: React.FC = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const portfolio = portfolioRef.current;
    if (!portfolio) return;

    gsap.fromTo('.project-card',
      { opacity: 0, y: 50, rotationY: 15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolio,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);


  return (
    <div ref={portfolioRef} className="portfolio">
      <h2>Mes Réalisations</h2>
    </div>
  );
};
