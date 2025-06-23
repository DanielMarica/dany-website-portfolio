import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import '../../styles/DraggableSkills.css';

// Import skill icons
import agileIcon from '../../assets/icons8-agile-64.png';
import cIcon from '../../assets/icons8-c-50.png';
import flutterIcon from '../../assets/icons8-flutter-48.png';
import javaIcon from '../../assets/icons8-java-48.png';
import javascriptIcon from '../../assets/icons8-javascript-48.png';
import linuxIcon from '../../assets/icons8-linux-48.png';
import postgresqlIcon from '../../assets/icons8-postgresql-48.png';
import reactIcon from '../../assets/icons8-react-40.png';
import reactNativeIcon from '../../assets/icons8-react-native-48.png';
import springBootIcon from '../../assets/icons8-spring-boot-48.png';
import typescriptIcon from '../../assets/icons8-typescript-48.png';
import dockerIcon from '../../assets/icons8-docker-48.png';
import mongodbIcon from '../../assets/icons8-mongo-db-48.png';
import githubIcon from '../../assets/github.png';
import pythonIcon from '../../assets/python.png';

gsap.registerPlugin(InertiaPlugin);

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'Agile', icon: agileIcon, color: '#FF6B6B' },
  { name: 'C', icon: cIcon, color: '#4ECDC4' },
  { name: 'Flutter', icon: flutterIcon, color: '#45B7D1' },
  { name: 'Java', icon: javaIcon, color: '#96CEB4' },
  { name: 'JavaScript', icon: javascriptIcon, color: '#FFEAA7' },
  { name: 'Linux', icon: linuxIcon, color: '#DDA0DD' },
  { name: 'PostgreSQL', icon: postgresqlIcon, color: '#74B9FF' },
  { name: 'React', icon: reactIcon, color: '#00B894' },
  { name: 'React Native', icon: reactNativeIcon, color: '#E17055' },
  { name: 'Spring Boot', icon: springBootIcon, color: '#A29BFE' },
  { name: 'TypeScript', icon: typescriptIcon, color: '#FD79A8' },
  { name: 'MongoDB', icon: mongodbIcon, color: '#9F7AEA' },
  { name: 'Docker', icon: dockerIcon, color: '#4299E1' },
  { name: 'Git', icon: githubIcon, color: '#F56565' },
  { name: 'Python', icon: pythonIcon, color: '#48BB78' }
];

export const DraggableSkills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0;

    // Track mouse movement for inertia calculations
    container.addEventListener("mousemove", (e) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    });

    // Add hover effects to each media card
    container.querySelectorAll('.media').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({ 
          onComplete: () => {
            tl.kill();
          }
        });
        
        tl.timeScale(1.2);

        const media = el.querySelector('img');
        const card = el as HTMLElement;

        gsap.set(card, { zIndex: 20 });

        tl.to(media, {
          inertia: {
            x: {
              velocity: deltaX * 40,
              end: 0
            },
            y: {
              velocity: deltaY * 40,
              end: 0
            },
          },
        });

        tl.fromTo(media, {
          rotate: 0
        }, {
          duration: 0.4,
          rotate: (Math.random() - 0.5) * 30,
          yoyo: true, 
          repeat: 1,
          ease: 'power1.inOut'
        }, '<');
      });

      el.addEventListener('mouseleave', () => {
        gsap.set(el, { zIndex: 10 });
      });
    });

  }, []);

  return (
    <div>
      {/* Grid des compétences */}
      <div 
        ref={containerRef} 
        className="medias"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px'
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="media"
            style={{
              position: 'relative',
              zIndex: 10
            }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
              border: `2px solid ${skill.color}60`,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 8px 32px ${skill.color}20`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <img 
                src={skill.icon} 
                alt={skill.name}
                style={{
                  width: '48px',
                  height: '48px',
                  marginBottom: '12px',
                  objectFit: 'contain',
                  pointerEvents: 'none',
                  willChange: 'transform'
                }}
              />
              <span style={{
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: '600',
                textAlign: 'center',
                pointerEvents: 'none',
                lineHeight: '1.2'
              }}>
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
