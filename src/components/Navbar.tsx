'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['top', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Detects when section is in the middle of the screen
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

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={`${styles.logo} ${activeSection === 'top' ? styles.active : ''}`}>
          <Link href="#top">Mark Abrasaldo</Link>
        </div>
        <div className={styles.links}>
          <Link 
            href="#projects" 
            className={activeSection === 'projects' ? styles.active : ''}
          >
            Projects
          </Link>
          <Link 
            href="#skills" 
            className={activeSection === 'skills' ? styles.active : ''}
          >
            Skills
          </Link>
          <Link 
            href="#contact" 
            className={activeSection === 'contact' ? styles.active : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
