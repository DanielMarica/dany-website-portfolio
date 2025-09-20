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
    <div ref={portfolioRef} className="portfolio" style={{ paddingBottom: '6rem' }}>
  <h2 style={{ textAlign: 'center' }}>My Projects</h2>
      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        justifyItems: 'center',
      }}>
        {/* Project Card 1 - Image Example */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Project 1" style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
          <h3 style={{ margin: '0.5rem 0' }}>React Portfolio Website</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A modern and responsive portfolio website built with React and TypeScript. Features animations and a clean design.</p>
          <a href="https://github.com/DanielMarica/dany-website-portfolio" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 3 - Python Web App */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Python Web App" style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Python Web Application</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A dynamic web application built with Python and Flask. Features user authentication and a REST API.</p>
          <a href="https://github.com/DanielMarica/python-web-app" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 4 - Flappy Bird Clone */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Flappy_Bird_icon.png" alt="Flappy Bird" style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', background: '#eee' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Flappy Bird (Python)</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A clone of the famous Flappy Bird game developed in Python using Pygame. Includes scoring and sound effects.</p>
          <a href="https://github.com/DanielMarica/flappy-bird-python" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 5 - Snake Game */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Snake_game.png" alt="Snake Game" style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', background: '#eee' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Snake Game (Python)</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>The classic Snake game recreated in Python with Pygame. Responsive controls and increasing difficulty.</p>
          <a href="https://github.com/DanielMarica/snake-python" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 2 - Video Example */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <video controls style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 style={{ margin: '0.5rem 0' }}>Mobile App Demo</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>Demo of a cross-platform mobile app developed with React Native. Includes user authentication and real-time chat.</p>
          <a href="https://github.com/DanielMarica/mobile-app-demo" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 6 - Odoo Project */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://odoocdn.com/web/image/website/1/Odoo%20Logo/Odoo-logo.png" alt="Odoo Project" style={{ width: '300px', height: '180px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Odoo ERP Customization</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>Advanced Odoo ERP project with custom modules for business management, automation, and reporting. Integrates with third-party APIs.</p>
          <a href="https://github.com/DanielMarica/odoo-project" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 7 - Salesforce Apex Real Estate */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="/src/assets/Salesforce.com_logo.svg.png" alt="Salesforce Real Estate" style={{ width: '300px', height: '180px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Salesforce Apex Real Estate</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>Real Estate management solution built with Salesforce Apex. Features property listings, client management, and automated workflows.</p>
          <a href="https://github.com/DanielMarica/salesforce-apex-real-estate" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 8 - TypeScript Project 1 */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="/src/assets/icons8-typescript-48.png" alt="TypeScript Project 1" style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>TypeScript Task Manager</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A robust task management app built with TypeScript and React. Features drag-and-drop, filtering, and persistent storage.</p>
          <a href="https://github.com/DanielMarica/typescript-task-manager" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 9 - TypeScript Project 2 */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="/src/assets/icons8-typescript-48.png" alt="TypeScript Project 2" style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>TypeScript API Client</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A reusable API client library written in TypeScript. Supports REST, GraphQL, and advanced error handling.</p>
          <a href="https://github.com/DanielMarica/typescript-api-client" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 10 - Construction Website */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Construction Website" style={{ width: '300px', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Construction Company Website</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A professional website for a construction company. Showcases services, portfolio, and contact forms with a modern design.</p>
          <a href="https://github.com/DanielMarica/construction-website" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 11 - Sunday School Management (Spring Boot Java) */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="/src/assets/icons8-spring-boot-48.png" alt="Spring Boot Java" style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Sunday School Management</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A web application for managing Sunday School activities, attendance, and resources. Built with Spring Boot and Java.</p>
          <a href="https://github.com/DanielMarica/springboot-sunday-school" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
        {/* Project Card 12 - Salesforce Project */}
        <div className="project-card" style={{
          width: '340px',
          minHeight: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.2rem',
        }}>
          <img src="/src/assets/Salesforce.com_logo.svg.png" alt="Salesforce Project" style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem', background: '#fff' }} />
          <h3 style={{ margin: '0.5rem 0' }}>Salesforce Automation Project</h3>
          <p style={{ flex: 1, textAlign: 'center' }}>A Salesforce project focused on automating business processes, custom objects, and Lightning components for enhanced productivity.</p>
          <a href="https://github.com/DanielMarica/salesforce-automation-project" target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: '1rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'background 0.2s', border: 'none' }}>View on GitHub</a>
        </div>
      </div>
    </div>
  );
};
