import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Importez le fichier CSS

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    emailjs.sendForm(
      'service_hk8jya6',
      'template_0mhqv6o',
      form.current,
      'EHBJ-J0IIS2L_cTiw'
    )
    .then(() => {
      setShowPopup(true);
      form.current?.reset();
    })
    .catch((error) => {
      console.error('Erreur EmailJS:', error);
      alert('Erreur lors de l\'envoi : ' + error.text);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact-Me</h2>
        <div className="form-group">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your name" 
            required 
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your email" 
            required 
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Your message" 
            required 
            disabled={isLoading}
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? 'cv-send-btn' + (isLoading ? ' loading' : '') : 'cv-send-btn'}
        >
          {isLoading ? 'Loading...' : 'Send!'}
        </button>
      </form>
      {showPopup && (
        <div className="popup-success">
          <span>Send sucessfully!</span>
          <button className="popup-close" onClick={() => setShowPopup(false)}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};