import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ScrambleText } from '../components/UI/ScrambleText';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Hero animations
    const tl = gsap.timeline({ delay: 2 });
    
    tl.fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo('.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3"
    );

    // Scroll triggered animations
    gsap.fromTo('.section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.expertise-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="home" style={{ background: 'none', border: 'none', boxShadow: 'none', overflowX: 'hidden' }}>
      <section className="hero-section">
          <ScrambleText 
              text={"Livius\nMarica"}
              tag="h2"
              className="hero-title"
              slowMotion={true}
            />
        <ScrambleText 
          text="Développeur Full-Stack & Salesforce" 
          tag="p" 
          className="hero-subtitle"
          slowMotion={true}
        />
        <p className="hero-description" style={{ wordBreak: 'break-word', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.5 }}>
          I’m passionate about building clean, scalable, and impactful digital solutions. Whether it's a robust full-stack application or a smart Salesforce integration, I strive to deliver innovation with precision and elegance.
        </p>
      </section>

    </div>
  );
};
