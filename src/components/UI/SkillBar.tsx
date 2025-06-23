import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillBarProps {
  name: string;
  level: number;
  category?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, category }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const fill = fillRef.current;
    const percent = percentRef.current;

    if (!bar || !fill || !percent) return;

    // Initial state
    gsap.set(fill, { width: 0 });
    gsap.set(percent, { textContent: "0%" });

    // Animate on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bar,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(fill, {
      width: `${level}%`,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(percent, {
      textContent: `${level}%`,
      duration: 1.5,
      ease: "power2.out",
      snap: { textContent: 1 }
    }, "<");

  }, [level]);

  return (
    <div ref={barRef} className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        {category && <span className="skill-category">{category}</span>}
        <span ref={percentRef} className="skill-percentage">0%</span>
      </div>
      <div className="skill-bar-track">
        <div ref={fillRef} className="skill-bar-fill"></div>
      </div>
    </div>
  );
};
