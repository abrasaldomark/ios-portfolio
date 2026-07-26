'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/data/projects';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.tags}>
              {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
            {project.externalUrl && (
              <div className={styles.actionRow}>
                <a 
                  href={project.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.externalButton}
                >
                  <span>Visit Live</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className={styles.gallery}>
            {project.images.map((img, index) => (
              <div 
                key={index} 
                className={styles.imageContainer}
                onClick={() => setFullscreenImage(img)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} className={styles.screenshot} />
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <div className={styles.longDescription}>
              {project.longDescription.split('\n').map((line, i) => (
                <p key={i} className={line.trim() === '' ? styles.spacer : ''}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div className={styles.lightbox} onClick={() => setFullscreenImage(null)}>
          <button className={styles.lightboxClose} onClick={() => setFullscreenImage(null)}>×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fullscreenImage} alt="Fullscreen view" className={styles.fullImage} />
        </div>
      )}
    </>
  );
}
