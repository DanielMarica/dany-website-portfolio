import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Application Salesforce CRM",
    description: "Développement d'une solution CRM complète avec automatisations et intégrations.",
    technologies: ["Salesforce", "Apex", "Lightning", "API REST"]
  },
  {
    id: 2,
    title: "Site Web Portfolio",
    description: "Site web responsive avec animations GSAP et React TypeScript.",
    technologies: ["React", "TypeScript", "GSAP", "CSS3"]
  }
  // Ajoutez vos projets ici
];

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

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div ref={portfolioRef} className="portfolio">
      <section className="portfolio-header">
        <h2>Mes Réalisations</h2>
        <p>Découvrez quelques-uns de mes projets les plus récents</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-placeholder">📱</div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="project-link">
                  Voir le projet →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
