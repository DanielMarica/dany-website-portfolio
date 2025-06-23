import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const navItems = [
  { path: '/cv', label: 'CV' },
  { path: '/salesforce', label: 'Salesforce' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' }
];

export const Navigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo('.nav-item',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 1
      }
    );

    gsap.fromTo('.nav-credits',
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8, 
        delay: 1.5 
      }
    );
  }, []);

  const handleItemClick = (_path: string) => {
    // Smooth scroll to top before navigation
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <nav ref={navRef} className="navigation">
      <div className="nav-content">
        <div className="nav-credits">
          Portfolio 2025</div>
        
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => handleItemClick(item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-credits">
           © All rights reserved<br />
          Livius Daniel Marica
       
        </div>
      </div>
    </nav>
  );
};
