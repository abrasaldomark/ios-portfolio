import ObfuscatedEmail from './ObfuscatedEmail';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mark Abrasaldo <br />Senior iOS Engineer</h1>
        <p className={styles.subtitle}>
          Specializing in SwiftUI, complex system architecture, and delivering polished experiences on the App Store.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.button}>View Projects</a>
          <ObfuscatedEmail 
            user="abrasaldomark" 
            domain="icloud.com" 
            className={styles.buttonSecondary}
          >
            Contact
          </ObfuscatedEmail>
        </div>
      </div>
    </section>
  );
}
