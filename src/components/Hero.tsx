import ObfuscatedEmail from './ObfuscatedEmail';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mark Abrasaldo <br />Mobile App Developer</h1>
        <p className={styles.subtitle}>
          Specializing in Swift, SwiftUI, UIKit, Kotlin, Java, Jetpack Compose, React Native, Flutter and complex system architecture to build robust, scalable native and cross-platform solutions.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.button}>View Projects</a>
          <ObfuscatedEmail
            user="abrasaldomark"
            domain="gmail.com"
            className={styles.buttonSecondary}
          >
            Contact
          </ObfuscatedEmail>
        </div>
      </div>
    </section>
  );
}
