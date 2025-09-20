import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DraggableSkills } from '../components/UI/DraggableSkills';

// Import images
import gateauIcon from '../assets/gateau.png';
import domicileIcon from '../assets/domicile.png';
import enveloppeIcon from '../assets/enveloppe-de-courrier-electronique.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import whatsappIcon from '../assets/logo.png';

// Import CV PDF
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
      window.open(resumePdf, '_blank');
    } catch (error) {
      console.error('Error opening CV:', error);
      alert('Error opening CV. Please try again later.');
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
        <h2 className="gsap-scroll-title">LIVIUS MARICA</h2>
        {/* Download CV Button */}
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
              DOWNLOAD MY CV
            </button>
          </div>
        </div>
        <div className="cv-contact-info">
          <div className="contact-item">
            <img src={gateauIcon} alt="Age" className="contact-icon-img" />
            <span className="contact-label">AGE</span>
            <span className="contact-value">20 years</span>
          </div>
          <div className="contact-item">
            <img src={domicileIcon} alt="Address" className="contact-icon-img" />
            <span className="contact-label">ADDRESS</span>
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
        <h3 className="section-title">EDUCATION</h3>
        <div className="timeline">
          <div className="timeline-item education">
            <div className="timeline-content">
              <div className="timeline-period">2022 – Present</div>
              <h4 className="timeline-title">Bachelor in Application & Web Development</h4>
              <div className="timeline-company">HE VINCI (ex-DEVINCI)</div>
              <p className="timeline-description">
                Specialized training in web and mobile application development.
              </p>
            </div>
          </div>
          <div className="timeline-item education">
            <div className="timeline-content">
              <div className="timeline-period">2021 – 2022</div>
              <h4 className="timeline-title">Bachelor 1 Industrial Engineering</h4>
              <div className="timeline-company">ECAM Brussels</div>
              <p className="timeline-description">
                First year of industrial engineering, strong foundations in mathematics and applied sciences.
              </p>
            </div>
          </div>
          <div className="timeline-item education">
            <div className="timeline-content">
              <div className="timeline-period">2015 – 2021</div>
              <h4 className="timeline-title">Secondary Education</h4>
              <div className="timeline-company">CES Saint-Vincent Soignies</div>
              <p className="timeline-description">
                Secondary school diploma (CESS).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Skills Section */}
      <section className="cv-section">
        <h3 className="section-title">TECHNICAL SKILLS</h3>
        <div className="skills-organized">
          <div className="skill-category-section technical">
            <DraggableSkills />
          </div>
        </div>
      </section>
      {/* Languages */}
      <section className="cv-section">
        <h3 className="section-title" style={{ paddingTop: '6rem', fontSize: '2.1rem' }}>LANGUAGE PROFICIENCY</h3>
        <div className="skills-organized">
          <div className="skill-category-section languages">
            <div className="skill-items-row" style={{ gap: '2.5rem', justifyContent: 'center' }}>
              <div className="skill-item languages" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem' }}>French</div>
                <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>Native</div>
              </div>
              <div className="skill-item languages" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem' }}>Romanian</div>
                <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>Native</div>
              </div>
              <div className="skill-item languages" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem' }}>English</div>
                <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>B2</div>
              </div>
              <div className="skill-item languages" style={{ minWidth: 140 }}>
                <div className="skill-name" style={{ fontSize: '1.15rem' }}>Dutch</div>
                <div className="skill-level" style={{ paddingTop: '0.7rem', fontSize: '1.05rem' }}>B1</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Professional Experience */}
      <section className="cv-section">
        <h3 className="section-title" style={{ paddingTop: '6rem' }}>PROFESSIONAL EXPERIENCE</h3>
        <div className="timeline">
          <div className="timeline-item experience">
            <div className="timeline-content">
              <div className="timeline-period">2023 – Present</div>
              <h4 className="timeline-title">Student Job Coffee Maker</h4>
              <div className="timeline-company">Pret A Manger SSP</div>
              <div className="timeline-location">Gare du Midi</div>
              <p className="timeline-description">
                • Customer service in an international environment<br/>
                • Preparation and service of food products<br/>
                • Teamwork in a fast-paced environment<br/>
                • Multilingual communication with customers
              </p>
            </div>
          </div>
          <div className="timeline-item experience">
            <div className="timeline-content">
              <div className="timeline-period">2022 – 2023</div>
              <h4 className="timeline-title">Student Job</h4>
              <div className="timeline-company">BEPHOTO - IT Startup</div>
              <div className="timeline-location">Braine-l'Alleud</div>
              <p className="timeline-description">
                • Technical support and user training<br/>
                • Delivery and explanation of photo equipment<br/>
              </p>
            </div>
          </div>
          <div className="timeline-item experience">
            <div className="timeline-content">
              <div className="timeline-period">2021 – 2022</div>
              <h4 className="timeline-title">Student Job</h4>
              <div className="timeline-company">iSFI - Food Industry</div>
              <div className="timeline-location">Braine-l'Alleud</div>
              <p className="timeline-description">
                • Packaging of goods in the food industry<br/>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Qualities Section */}
      <section className="cv-section">
        <h3 className="section-title">Qualities</h3>
        <div className="qualities-grid">
          <div className="quality-item">
            <p>Motivated and detail-oriented individual</p>
          </div>
          <div className="quality-item">
            <p>Soon multilingual: English, Romanian, French, and Dutch</p>
          </div>
          <div className="quality-item">
            <p>Team spirit</p>
          </div>
        </div>
      </section>
    </div>
  );
};
