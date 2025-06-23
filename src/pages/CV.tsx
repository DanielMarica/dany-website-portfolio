import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageNavigation } from '../components/UI/PageNavigation';
import { DraggableSkills } from '../components/UI/DraggableSkills';

// Import des images
import gateauIcon from '../assets/gateau.png';
import domicileIcon from '../assets/domicile.png';
import enveloppeIcon from '../assets/enveloppe-de-courrier-electronique.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import whatsappIcon from '../assets/logo.png';

// Import du CV - chemin absolu et correct
import resumePdf from '../assets/Professional CV Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

export const CV: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;

    // Animate sections on scroll
    gsap.fromTo('.cv-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cv,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate timeline items
    gsap.fromTo('.timeline-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.timeline',
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate skills
    gsap.fromTo('.skill-item',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.skills-grid',
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const downloadCV = () => {
    try {
      // Ouvrir le PDF pour téléchargement
      window.open(resumePdf, '_blank');
    } catch (error) {
      console.error('Erreur lors de l\'ouverture du CV:', error);
      alert('Erreur lors de l\'ouverture du CV. Veuillez réessayer plus tard.');
    }
  };

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        // Nettoyer le numéro de téléphone pour WhatsApp
        const cleanPhone = value.replace(/[^0-9]/g, '');
        const whatsappNumber = cleanPhone.startsWith('0') 
          ? '32' + cleanPhone.substring(1) 
          : cleanPhone;
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        break;
      case 'instagram':
        window.open(`https://instagram.com/${value.replace('@', '')}`, '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/daniel-marica', '_blank');
        break;
    }
  };

  return (
    <div ref={cvRef} className="cv" style={{ marginBottom: '4rem' }}>
      {/* Header Section */}
      <section className="cv-section cv-header">
      <div className="gsap-tools-label">{"{ PROFESSIONAL CV }"}</div>
      <h2 className="gsap-scroll-title">DANIEL MARICA</h2>
      <p className="gsap-scroll-subtitle">"Développeur passionné et polyvalent"</p>
      
      {/* Download CV Button - Bouton unique */}
      <div className="cv-download-section">
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <button onClick={downloadCV} className="cv-download-btn">
          <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ marginRight: '8px' }}
          >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          TÉLÉCHARGER MON CV
        </button>
        </div>
      </div>
      
      <div className="cv-contact-info">
        <div className="contact-item">
        <img src={gateauIcon} alt="Âge" className="contact-icon-img" />
        <span className="contact-label">ÂGE</span>
        <span className="contact-value">20 ans</span>
        </div>
        
        <div className="contact-item">
        <img src={domicileIcon} alt="Adresse" className="contact-icon-img" />
        <span className="contact-label">ADRESSE</span>
        <span className="contact-value">Rue Docteur Oblin n°35, 7090 Braine-le-Comte</span>
        </div>
        
        <div 
        className="contact-item clickable" 
        onClick={() => handleContactClick('email', 'liviusdanielmarica@gmail.com')}
        >
        <img src={enveloppeIcon} alt="Email" className="contact-icon-img" />
        <span className="contact-label">EMAIL</span>
        <span className="contact-value">liviusdanielmarica@gmail.com</span>
        </div>
        
        <div 
        className="contact-item clickable whatsapp-item" 
        onClick={() => handleContactClick('whatsapp', '0487/80 18 71')}
        >
        <img src={whatsappIcon} alt="WhatsApp" className="contact-icon-img whatsapp-icon" />
        <span className="contact-label">WHATSAPP</span>
        <span className="contact-value">0487/80 18 71</span>
        </div>
        
        <div 
        className="contact-item clickable" 
        onClick={() => handleContactClick('instagram', '@daniel_marica')}
        >
        <img src={instagramIcon} alt="Instagram" className="contact-icon-img" />
        <span className="contact-label">INSTAGRAM</span>
        <span className="contact-value">@daniel_marica</span>
        </div>
        
        <div 
        className="contact-item clickable" 
        onClick={() => handleContactClick('linkedin', 'Daniel Marica')}
        >
        <img src={linkedinIcon} alt="LinkedIn" className="contact-icon-img" />
        <span className="contact-label">LINKEDIN</span>
        <span className="contact-value">Daniel Marica</span>
        </div>
      </div>
      </section>

      {/* Education Section */}
      <section className="cv-section">
      <h3 className="section-title">FORMATION</h3>
      <div className="timeline">
        <div className="timeline-item education">
        <div className="timeline-content">
          <div className="timeline-period">2022 – Aujourd'hui</div>
          <h4 className="timeline-title">BAC Développement Applications & Web</h4>
          <div className="timeline-company">HE VINCI (ex-DEVINCI)</div>
          <p className="timeline-description">
          Formation spécialisée en développement d'applications web et mobiles. 
          Maîtrise des technologies modernes et des frameworks actuels.
          </p>
        </div>
        </div>

        <div className="timeline-item education">
        <div className="timeline-content">
          <div className="timeline-period">2021 – 2022</div>
          <h4 className="timeline-title">BAC 1 Ingénieur Industriel</h4>
          <div className="timeline-company">ECAM Brussels</div>
          <p className="timeline-description">
          Première année d'ingénieur industriel, solides bases en mathématiques 
          et sciences appliquées.
          </p>
        </div>
        </div>

        <div className="timeline-item education">
        <div className="timeline-content">
          <div className="timeline-period">2015 – 2021</div>
          <h4 className="timeline-title">Enseignement Secondaire</h4>
          <div className="timeline-company">CES Saint-Vincent Soignies</div>
          <p className="timeline-description">
          Diplôme d'études secondaires avec de solides bases académiques.
          </p>
        </div>
        </div>
      </div>
      </section>

      {/* Technical Skills Section */}
      <section className="cv-section">
      <h3 className="section-title">COMPÉTENCES TECHNIQUES</h3>
      <div className="skills-organized">
        {/* Technical Skills with Draggable */}
        <div className="skill-category-section technical">
        <DraggableSkills />
        </div>
      </div>
      </section>

      {/* Langues */}
      <section className="cv-section">
        <h3 className="section-title" style={{ paddingTop: '6rem', fontSize: '2.1rem' }}>MAÎTRISE DES LANGUES</h3>
        <div className="skills-organized">
        <div className="skill-category-section languages">
          <div className="skill-items-row" style={{ gap: '2.5rem', justifyContent: 'center' }}>
          <div className="skill-item languages" style={{ minWidth: 140 }}>
            <div className="skill-name" style={{ fontSize: '1.15rem' }}>Français</div>
            <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>Natif</div>
          </div>
          <div className="skill-item languages" style={{ minWidth: 140 }}>
            <div className="skill-name" style={{ fontSize: '1.15rem' }}>Roumain</div>
            <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>Natif</div>
          </div>
          <div className="skill-item languages" style={{ minWidth: 140 }}>
            <div className="skill-name" style={{ fontSize: '1.15rem' }}>Anglais</div>
            <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>B1</div>
          </div>
          <div className="skill-item languages" style={{ minWidth: 140 }}>
            <div className="skill-name" style={{ fontSize: '1.15rem' }}>Néerlandais</div>
            <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>C1</div>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="cv-section">
        <h3 className="section-title" style={{ paddingTop: '6rem', fontSize: '2.1rem' }}>SOFT SKILLS</h3>
        <div className="skills-organized">
          <div className="skill-category-section soft-skills">
            <div
              className="skill-items-row"
              style={{
                justifyContent: 'center',
                gap: '2.5rem', // même écart que les autres sections
                alignItems: 'stretch'
              }}
            >
              <div className="skill-item soft-skills" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem', textAlign: 'center' }}>Résolution de problèmes</div>
              </div>
              <div className="skill-item soft-skills" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem', textAlign: 'center' }}>Adaptabilité</div>
              </div>
              <div className="skill-item soft-skills" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem', textAlign: 'center' }}>Gestion du stress</div>
              </div>
              <div className="skill-item soft-skills" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem', textAlign: 'center' }}>Écoute active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Expérience */}
    <section className="cv-section">
      <h3 className="section-title" style={{ paddingTop: '6rem' }}>EXPÉRIENCE PROFESSIONNELLE</h3>
      <div className="timeline">
      <div className="timeline-item experience">
      <div className="timeline-content">
        <div className="timeline-period">2023 – Aujourd'hui</div>
        <h4 className="timeline-title">Équipier Polyvalent</h4>
        <div className="timeline-company">Pret A Manger SSP</div>
        <div className="timeline-location">Aéroport de Bruxelles</div>
        <p className="timeline-description">
        • Service client dans un environnement international<br/>
        • Préparation et service de produits alimentaires<br/>
        • Travail en équipe dans un rythme soutenu<br/>
        • Communication multilingue avec la clientèle
        </p>
      </div>
      </div>

      <div className="timeline-item experience">
      <div className="timeline-content">
        <div className="timeline-period">2022 – 2023</div>
        <h4 className="timeline-title">Développeur & Support Technique</h4>
        <div className="timeline-company">BEPHOTO - Startup Informatique</div>
        <div className="timeline-location">Braine-l'Alleud</div>
        <p className="timeline-description">
        • Gestion et développement de solutions informatiques<br/>
        • Support technique et formation utilisateurs<br/>
        • Livraison et explication d'équipements photo<br/>
        • Contribution au développement produit d'une startup
        </p>
      </div>
      </div>

      <div className="timeline-item experience">
      <div className="timeline-content">
        <div className="timeline-period">2021 – 2022</div>
        <h4 className="timeline-title">Opérateur de Production</h4>
        <div className="timeline-company">iSFI - Industrie Alimentaire</div>
        <div className="timeline-location">Braine-l'Alleud</div>
        <p className="timeline-description">
        • Emballage de marchandises en industrie alimentaire<br/>
        • Respect des normes d'hygiène et de sécurité<br/>
        • Travail en équipe dans un environnement industriel
        </p>
      </div>
      </div>
      </div>
    </section>

      {/* Qualities Section */}
      <section className="cv-section">
      <h3 className="section-title">QUALITÉS PROFESSIONNELLES</h3>
      <div className="qualities-grid">
        <div className="quality-item">
        <h4>🚀 Dynamisme</h4>
        <p>Prise d'initiative et énergie dans tous les projets</p>
        </div>
        <div className="quality-item">
        <h4>🎯 Flexibilité</h4>
        <p>Emploi du temps flexible et grande disponibilité</p>
        </div>
        <div className="quality-item">
        <h4>🤝 Collaboration</h4>
        <p>Excellent travail en équipe et esprit de service</p>
        </div>
        <div className="quality-item">
        <h4>💡 Innovation</h4>
        <p>Passion pour les nouvelles technologies et solutions créatives</p>
        </div>
      </div>
      </section>

      <PageNavigation />
    </div>
  );
};
