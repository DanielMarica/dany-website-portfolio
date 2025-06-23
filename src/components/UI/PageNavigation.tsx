import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import arrowImage from '../../assets/imageFleches.png';

const pages = [
  { path: '/', name: 'Home' },
  { path: '/cv', name: 'CV' },
  { path: '/salesforce', name: 'Salesforce' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/contact', name: 'Contact' }
];

export const PageNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo('.nav-button',
      { opacity: 0, scale: 0, x: 20 },
      { 
        opacity: 1, 
        scale: 1, 
        x: 0,
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(1.7)",
        delay: 1
      }
    );
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      backgroundColor: "#f5f5f5",
      borderColor: "#000",
      duration: 0.15,
      ease: "power2.out"
    });
    
    const img = e.currentTarget.querySelector('img');
    if (img) {
      gsap.to(img, {
        scale: 1.05,
        duration: 0.15,
        ease: "power2.out"
      });
    }
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "#f5f5f5",
      borderColor: "#000",
      duration: 0.15,
      ease: "power2.out"
    });
    
    const img = e.currentTarget.querySelector('img');
    if (img) {
      gsap.to(img, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={navRef} className="page-navigation-fixed">
      {prevPage && (
        <button
          className="nav-button nav-button-prev"
          onClick={() => handleNavigation(prevPage.path)}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          title={`Précédent: ${prevPage.name}`}
          aria-label={`Aller à ${prevPage.name}`}
        >
          <img 
            src={arrowImage} 
            alt="Previous" 
            className="arrow-left"
          />
        </button>
      )}
      
      {nextPage && (
        <button
          className="nav-button nav-button-next"
          onClick={() => handleNavigation(nextPage.path)}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          title={`Suivant: ${nextPage.name}`}
          aria-label={`Aller à ${nextPage.name}`}
        >
          <img 
            src={arrowImage} 
            alt="Next" 
            className="arrow-right"
          />
        </button>
      )}
    </div>
  );
};
