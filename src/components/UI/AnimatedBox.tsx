import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedBoxProps {
  title: string;
  description: string;
  className?: string;
}

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({ 
  title, 
  description, 
  className = '' 
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleMouseEnter = () => {
      gsap.to(box, {
        scale: 1.05,
        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(box, {
        scale: 1,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    box.addEventListener('mouseenter', handleMouseEnter);
    box.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      box.removeEventListener('mouseenter', handleMouseEnter);
      box.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={boxRef} className={`animated-box ${className}`}>
      <h3 className="box-title">{title}</h3>
      <p className="box-description">{description}</p>
    </div>
  );
};
