import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import profilePhoto from '../../assets/IMG_6480 2.jpg';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const header = headerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const photo = photoRef.current;

    if (!header || !title || !subtitle || !photo) return;

    const tl = gsap.timeline();
    
    tl.fromTo(header, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(photo,
      { opacity: 0, scale: 0.8, rotation: 5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6"
    )
    .fromTo(subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3"
    );
  }, []);

  const handleTitleClick = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => { navigate('/'); }
    });
  };

  return (
    <header ref={headerRef} className="header">
      <div className="header-content">
        <img 
          ref={photoRef} 
          src={profilePhoto} 
          alt="Livius Daniel Marica Profile" 
          className="header-photo"
        />
        <h1 
          ref={titleRef} 
          className="header-title clickable-title"
          onClick={handleTitleClick}
        >
        Welcome to My Portfolio<br />
          
        </h1>
        <p ref={subtitleRef} className="header-subtitle">
          Your gateway to innovative digital experiences
        </p>
      </div>
    </header>
  );
};
