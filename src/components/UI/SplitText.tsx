import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const SplitText: React.FC = () => {
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certRef.current) {
      gsap.fromTo(
        certRef.current.querySelector('.cert-item'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="cert-list" ref={certRef}>
      <div className="cert-item">En cours ...</div>
    </div>
  );
};