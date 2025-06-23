import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrambleTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  slowMotion?: boolean;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  tag = 'p',
  slowMotion = false
}) => {
  const textRef = useRef<HTMLElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const activeAnimations = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into individual characters
    const chars = text.split('').map((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.className = 'char';
      span.dataset.content = char === ' ' ? '\u00A0' : char;
      span.style.willChange = 'transform';
      return span;
    });

    // Clear the element and add character spans
    textElement.innerHTML = '';
    chars.forEach(char => textElement.appendChild(char));
    charsRef.current = chars;

    // Mouse enter handler
    const handleMouseEnter = () => {
      chars.forEach((char) => {
        const scrambleChars = '.:!@#$%^&*(){}[]<>?/|\\~+=';
        
        // Kill any existing animation for this char
        gsap.killTweensOf(char);
        
        // Add smooth transition to character
        char.style.transition = 'all 0.1s ease-out';
        
        let scrambleAnimation;
        
        if (slowMotion) {
          // Version ultra-fluide pour la home page
          scrambleAnimation = gsap.to({}, {
            duration: 999,
            ease: 'none',
            repeat: -1,
            onUpdate: function() {
              // Probabilité ultra-réduite pour un effet très fluide
              if (Math.random() > 0.995) { // Seulement 0.5% de chance par frame
                const newChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                
                // Animation fluide du changement
                gsap.to(char, {
                  opacity: 0.3,
                  scale: 0.95,
                  duration: 0.05,
                  ease: 'power2.out',
                  onComplete: () => {
                    char.textContent = newChar;
                    gsap.to(char, {
                      opacity: 1,
                      scale: 1,
                      duration: 0.05,
                      ease: 'power2.out'
                    });
                  }
                });
              }
            }
          });
        } else {
          // Version normale - plus fluide
          scrambleAnimation = gsap.to({}, {
            duration: 999,
            ease: 'none',
            repeat: -1,
            onUpdate: function() {
              if (Math.random() > 0.85) { // 15% de chance par frame
                const newChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                
                gsap.to(char, {
                  opacity: 0.5,
                  scale: 0.9,
                  duration: 0.03,
                  ease: 'power2.out',
                  onComplete: () => {
                    char.textContent = newChar;
                    gsap.to(char, {
                      opacity: 1,
                      scale: 1,
                      duration: 0.03,
                      ease: 'power2.out'
                    });
                  }
                });
              }
            }
          });
        }
        
        activeAnimations.current.push(scrambleAnimation);
      });
    };

    // Mouse leave handler avec transition fluide
    const handleMouseLeave = () => {
      // Kill all active animations
      activeAnimations.current.forEach(anim => anim.kill());
      activeAnimations.current = [];
      
      // Restore original text with smooth transition
      chars.forEach((char, index) => {
        const originalText = char.dataset.content || '';
        
        // Animation fluide de retour au texte original
        gsap.to(char, {
          opacity: 0.5,
          scale: 0.95,
          duration: 0.08,
          delay: index * 0.002, // Petit délai progressif pour un effet de vague
          ease: 'power2.out',
          onComplete: () => {
            char.textContent = originalText;
            gsap.to(char, {
              opacity: 1,
              scale: 1,
              duration: 0.08,
              ease: 'power2.out'
            });
          }
        });
      });
    };

    textElement.addEventListener('mouseenter', handleMouseEnter);
    textElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      textElement.removeEventListener('mouseenter', handleMouseEnter);
      textElement.removeEventListener('mouseleave', handleMouseLeave);
      // Kill any remaining animations
      activeAnimations.current.forEach(anim => anim.kill());
    };
  }, [text, slowMotion]);

  const Tag = tag;
  
  return React.createElement(Tag, {
    ref: textRef,
    className: `scramble-text ${className}`
  });
};
