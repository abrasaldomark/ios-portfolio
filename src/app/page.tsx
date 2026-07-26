'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import { Project, clientProjects, personalProjects, skills, getProjectBySlug } from '@/data/projects';
import styles from './page.module.css';

interface HomeProps {
  initialSelectedSlug?: string;
}

export default function Home({ initialSelectedSlug }: HomeProps = {}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    initialSelectedSlug ? getProjectBySlug(initialSelectedSlug) : null
  );

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/projects/${project.slug}`);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <main className={styles.main}>
      
      <Hero />

      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Client Projects</h2>
          <p className={styles.sectionSubtitle}>A collection of applications built with precision and care.</p>
        </div>
        <div className={styles.grid}>
          {clientProjects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              {...project} 
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </section>

      <section id="personal" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Personal Projects</h2>
          <p className={styles.sectionSubtitle}>Experimental builds and personal passion projects.</p>
        </div>
        <div className={styles.grid}>
          {personalProjects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              {...project} 
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        key={selectedProject?.slug ?? 'none'}
        isOpen={!!selectedProject} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />

      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Stack</h2>
          <p className={styles.sectionSubtitle}>Tools and technologies I use to build world-class apps.</p>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.category} className={styles.skillCategory}>
              <h3 className={styles.skillLabel}>{skill.category}</h3>
              <div className={styles.skillList}>
                {skill.items.map((item) => (
                  <span key={item} className={styles.skillItem}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.contactCard}>
          <h2 className={styles.sectionTitle}>Let&apos;s build something together.</h2>
          <p className={styles.sectionSubtitle}>Currently open to new opportunities and interesting projects.</p>
          <div className={styles.emailDisplay}>
            <ObfuscatedEmail user="abrasaldomark" domain="gmail.com">
              abrasaldomark@gmail.com
            </ObfuscatedEmail>
          </div>
          <div className={styles.contactLinks}>
            <ObfuscatedEmail 
              user="abrasaldomark" 
              domain="gmail.com" 
              className={styles.contactButton}
            >
              Email Me
            </ObfuscatedEmail>
            <div className={styles.socials}>
              <a href="https://github.com/abrasaldomark" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abrasaldomark/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={styles.resumeContainer}>
          <a 
            href="/Mark%20Oraye%20Abrasaldo%20Resume.docx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mark Abrasaldo.</p>
      </footer>
    </main>
  );
}
