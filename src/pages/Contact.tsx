import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.css';
import { ScrambleText } from '../components/UI/ScrambleText';

gsap.registerPlugin(ScrollTrigger);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<ContactForm>({
    name: '', email: '', subject: '', message: ''
  });

  useEffect(() => {
    const contact = contactRef.current;
    if (!contact) return;

    gsap.fromTo('.contact-section',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    );

    // Animation apparition du formulaire au scroll
    gsap.fromTo('.contact-form',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Ajoutez ici la logique d'envoi
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div ref={contactRef} className="contact">
      <section className="contact-section">
        <ScrambleText 
          text="Contactez-moi" 
          tag="h2" 
          className="contact-title"
          slowMotion={true}
        />
        <p>Discutons de votre projet ensemble</p>
        <div className="scroll-down-arrow" style={{ cursor: 'pointer' }} onClick={() => {
          const el = document.getElementById('contact-form-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>
      <section className="contact-section" id="contact-form-section" style={{ marginTop: '80px' }}>
        <div className="contact-content" style={{ justifyContent: 'center' }}>
          <form className="contact-form" onSubmit={handleSubmit} style={{ margin: '0 auto', maxWidth: 500, width: '100%' }}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="cv-download-btn" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
