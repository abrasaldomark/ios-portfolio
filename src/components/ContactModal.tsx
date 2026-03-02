'use client';

import { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset status when closing
      setTimeout(() => setStatus('idle'), 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/abrasaldomark@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      setStatus('idle');
      alert('Failed to send message. Please check your connection.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.content}>
          {status === 'success' ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.title}>Message Sent!</h2>
              <p className={styles.subtitle}>Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
              <button className={styles.doneButton} onClick={onClose}>Done</button>
            </div>
          ) : (
            <>
              <h2 className={styles.title}>Get in Touch</h2>
              <p className={styles.subtitle}>Have a project in mind or just want to say hi? Send me a message below.</p>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="How can I help you?" rows={5} required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={styles.sendButton}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
