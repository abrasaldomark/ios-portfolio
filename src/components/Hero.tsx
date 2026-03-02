import styles from './Hero.module.css';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mark Abrasaldo. <br />Senior iOS Engineer.</h1>
        <p className={styles.subtitle}>
          Specializing in SwiftUI, complex system architecture, and delivering polished experiences on the App Store.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.button}>View Projects</a>
          <button onClick={onContactClick} className={styles.buttonSecondary}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}
