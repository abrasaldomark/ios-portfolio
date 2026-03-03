'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sectionNames: Record<string, string> = {
    top: 'Mark Abrasaldo',
    projects: 'Client Projects',
    personal: 'Personal Projects',
    skills: 'Technical Stack',
    contact: 'Contact'
  };

  useEffect(() => {
    const sections = ['top', 'projects', 'personal', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.container}>
          <div className={`${styles.logo} ${activeSection === 'top' ? styles.active : ''}`}>
            <Link href="#top" onClick={closeMenu}>
              {isMobile ? (sectionNames[activeSection] || 'Mark Abrasaldo') : 'Mark Abrasaldo'}
            </Link>
          </div>
          
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          <div className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
            {isMobile && (
              <Link 
                href="#top" 
                className={activeSection === 'top' ? styles.active : ''}
                onClick={closeMenu}
              >
                Mark Abrasaldo
              </Link>
            )}
            <Link 
              href="#projects" 
              className={activeSection === 'projects' ? styles.active : ''}
              onClick={closeMenu}
            >
              Client
            </Link>
            <Link 
              href="#personal" 
              className={activeSection === 'personal' ? styles.active : ''}
              onClick={closeMenu}
            >
              Personal
            </Link>
            <Link 
              href="#skills" 
              className={activeSection === 'skills' ? styles.active : ''}
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              className={activeSection === 'contact' ? styles.active : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && <div className={styles.menuOverlay} onClick={closeMenu} />}
    </>
  );
}
