'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import styles from './page.module.css';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images: string[];
  mockupColor?: string;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const clientProjects: Project[] = [
    {
      title: "Swiftly Workspace",
      description: "A comprehensive business management and ERP system for macOS and iOS. Handles sales, project management, and financials.",
      longDescription: `Workspace is a multi-platform business management and ERP (Enterprise Resource Planning) system built with SwiftUI for macOS and iOS. It is designed to handle the end-to-end operations of a business, from initial sales and customer management to project execution, time tracking, and final invoicing.

Core Functionality:
• Sales & Customer Management: Handles customers, contacts, and the entire sales pipeline including quotes and contracts.
• Project & Task Management: Manages complex projects, tasks, and project-specific documentation.
• Financials & Invoicing: A robust system for generating invoices, managing payments, and ledger entries.
• Time & Resource Tracking: Includes timesheets and activity logging to monitor billable hours.

Technical Highlights:
• Multi-Platform: A single codebase serving both macOS and iOS with platform-specific optimizations.
• Cloud Synchronization: Uses NSPersistentCloudKitContainer for seamless data sync across devices.
• AI Integration: Integrates with OpenAI for enhanced business workflows.
• Architecture: Strict MVVM architecture with business logic in Core Data model extensions.`,
      tags: ["SwiftUI", "Core Data", "CloudKit", "OpenAI"],
      image: "/projects/Swiftly iOS 01.PNG",
      images: [
        "/projects/Swiftly iOS 01.PNG", "/projects/Swiftly iOS 02.PNG", "/projects/Swiftly iOS 03.PNG", "/projects/Swiftly iOS 04.PNG", "/projects/Swiftly iOS 05.PNG",
        "/projects/Swiftly iPadOS 01.PNG", "/projects/Swiftly iPadOS 02.PNG", "/projects/Swiftly iPadOS 03.PNG", "/projects/Swiftly iPadOS 04.PNG", "/projects/Swiftly iPadOS 05.PNG",
        "/projects/Swiftly macOS 01.png", "/projects/Swiftly macOS 02.png", "/projects/Swiftly macOS 03.png", "/projects/Swiftly macOS 04.png", "/projects/Swiftly macOS 05.png"
      ],
      mockupColor: "#007AFF"
    },
    {
      title: "Marine Rescue NSW",
      description: "Vital safety app for boaters in NSW. Features real-time trip tracking, weather alerts, and emergency services integration.",
      longDescription: `Marine Rescue NSW app is a vital safety tool designed for recreational boaters in New South Wales, Australia. Its primary mission is to help boaters stay safe on the water by providing a direct link to Marine Rescue NSW services.

Core Purpose:
The app acts as a "trip monitor." When a boater "Logs On" (starts a trip), Marine Rescue NSW tracks their expected return time. If the boater fails to "Log Off" by that time, the system alerts Marine Rescue to initiate a welfare check or search and rescue operation.

Key Features:
• Trip Logging: Easily register your departure time, destination, and expected return.
• Live Tracking: Uses your phone's GPS to provide position updates during your trip.
• Vessel Profiles: Store details about your boat to help rescuers identify you quickly.
• Maritime Weather: Real-time weather warnings, tide information, and sea conditions.

Technical Foundation:
Built with a robust architecture using Redux (ReSwift) for state management and RxSwift for reactive features, ensuring reliability in challenging maritime environments.`,
      tags: ["Swift", "Redux (ReSwift)", "RxSwift", "Core Location"],
      image: "/projects/MRNSW iOS 01.jpeg",
      images: [
        "/projects/MRNSW iOS 01.jpeg", "/projects/MRNSW iOS 02.jpeg", "/projects/MRNSW iOS 03.jpeg", "/projects/MRNSW iOS 04.jpeg", "/projects/MRNSW iOS 05.jpeg", "/projects/MRNSW iOS 06.jpeg", "/projects/MRNSW iOS 07.jpeg", "/projects/MRNSW iOS 08.jpeg",
        "/projects/MRNSW iPadOS 01.jpeg", "/projects/MRNSW iPadOS 02.jpeg", "/projects/MRNSW iPadOS 03.jpeg", "/projects/MRNSW iPadOS 04.jpeg", "/projects/MRNSW iPadOS 05.jpeg", "/projects/MRNSW iPadOS 06.jpeg", "/projects/MRNSW iPadOS 07.jpeg"
      ],
      mockupColor: "#E02B1D"
    },
    {
      title: "Tokyo Yakult Swallows",
      description: "Official fan app for the baseball team. Delivers real-time game updates, news, and exclusive stadium content via Beacons.",
      longDescription: `HouseMartin is the official mobile application for the Tokyo Yakult Swallows, a Japanese professional baseball team. It serves as a comprehensive portal for fans to stay updated on team news, game progress, and exclusive content.

Key Features:
• Real-Time Game Updates: Robust notification system for live events, score changes, and home runs.
• Fan Content: Organized gateway to team news, schedules, and player rosters.
• Premium Membership: Integrated in-app purchases for exclusive content and member-only features.
• Stadium Integration: HelloHMSBeacon library triggers location-based notifications and rewards at the stadium.

Technical Overview:
• Platform: iOS (Objective-C) using a Tab Bar navigation structure.
• Integrations: Uses Firebase for push notifications and crash reporting, and AFNetworking for data communication.`,
      tags: ["Objective-C", "Firebase", "Beacons", "AFNetworking"],
      image: "/projects/Tokyo Yakult Swallows Official 01.jpeg",
      images: [
        "/projects/Tokyo Yakult Swallows Official 01.jpeg", "/projects/Tokyo Yakult Swallows Official 02.jpeg", "/projects/Tokyo Yakult Swallows Official 03.jpeg", "/projects/Tokyo Yakult Swallows Official 04.jpeg"
      ],
      mockupColor: "#0F2D54"
    },
    {
      title: "Edion Delivery",
      description: "A hybrid app for delivery drivers. Features barcode scanning, digital signatures, and real-time delivery tracking.",
      longDescription: `Edion is a hybrid iOS application designed for Edion (a major Japanese electronics retailer) to be used by their delivery drivers. It acts as a bridge between a web-based delivery management system and native iPhone capabilities.

Key Functional Areas:
• Scanning & Inspection: Drivers scan product barcodes (JAN codes) to verify items during loading and delivery.
• Real-Time Location Tracking: Tracks GPS coordinates in the background to monitor delivery progress.
• Digital Signature Capture: Native signature pad collects customer signatures as proof of delivery.
• Hybrid Integration: Uses custom URL schemes so the web interface can trigger native features like camera and signatures.

Technical Overview:
• Architecture: Hybrid (WKWebView + Native controllers).
• Key Libraries: Alamofire, Firebase, and SignaturePad.`,
      tags: ["Swift", "Hybrid/WKWebView", "Firebase", "Alamofire"],
      image: "/projects/Edion 01.jpeg",
      images: [
        "/projects/Edion 01.jpeg", "/projects/Edion 02.jpeg", "/projects/Edion 03.jpeg", "/projects/Edion 04.jpeg", "/projects/Edion 05.jpeg"
      ],
      mockupColor: "#005BAC"
    },
    {
      title: "Memolead",
      description: "A lifestyle service portal for managing memberships. Integrates facility search and QR code check-ins.",
      longDescription: `Memolead is a Japanese hybrid iOS application designed for members of the Memolead Group, specializing in wedding ceremonies, funeral services, and mutual aid societies.

Key Features:
• Membership Management: Personal dashboard to view status, points, and contracts.
• Location-Based Services: GPS-enabled search for facilities and affiliate stores.
• QR Code Integration: Built-in scanner for check-ins and point collection.
• Information Hub: Access to etiquette guides, news, and specialized service websites.

Technical Structure:
• Architecture: Hybrid (Swift + WKWebView) with native navigation and background tracking.
• Cloud Integration: Firebase for analytics and push notifications.`,
      tags: ["Swift", "Hybrid/WKWebView", "Core Location", "Maps"],
      image: "/projects/Memolead 01.jpeg",
      images: [
        "/projects/Memolead 01.jpeg", "/projects/Memolead 02.jpeg", "/projects/Memolead 03.jpeg", "/projects/Memolead 04.jpeg"
      ],
      mockupColor: "#8E8E93"
    }
  ];

  const personalProjects: Project[] = [
    {
      title: "StoicLife",
      description: "A personal digital sanctuary for practicing Stoic philosophy. Integrate ancient wisdom into modern life.",
      longDescription: `StoicLife is a personal digital sanctuary for practicing Stoic philosophy. It's designed to help you integrate ancient wisdom into your modern life through three core pillars:

1. Daily Wisdom (The "Today" Tab)
• Curated Quotes: The app fetches quotes from authors like Marcus Aurelius, Epictetus, and Seneca.
• Interactive Quote Cards: Swipe through quotes, favorite them, or share them as images.
• Progressive Loading: Features a modern "Skeleton Screen" to provide a smooth experience while fetching data.

2. Stoic Journaling (The "Reflections" Tab)
• Deep Reflection: Journal your thoughts on specific quotes with multimedia support.
• Multimedia Journaling: Attach images, audio recordings, and videos to your reflections.
• Contextual Awareness: Save the location of your thoughts to create a geographic map of your journey.

3. Native Integration & Premium Features
• Home Screen Widgets: See daily quotes directly on your home screen.
• Spotlight Search: Search for quotes globally on your iPhone using system-wide Spotlight search.
• TipKit Support: Proactive tips guide you on how to get the most out of the app.
• Premium Model: Includes a paywall for "power users," offering unlimited favorites and reflections.

4. Cloud-Powered Wisdom (Firebase)
• Dynamic Content: The app uses Firebase Firestore as its central repository for Stoic wisdom. This allows you to add or update quotes remotely without requiring an app store update.
• Global Search & Fetching: When you first open the app, it pulls the latest curated quotes from the Firestore quotes collection.
• Infrastructure: The project includes custom Node.js scripts (upload-quotes.js) to manage and push massive libraries of quotes into the Firebase backend.

5. Modern Local Persistence (SwiftData)
• High-Performance Cache: Every quote fetched from Firebase is automatically persisted into SwiftData. This ensures the app is fully functional offline—your daily wisdom is always available, even without a connection.
• Complex Journaling: Your personal reflections, including their relationships to specific quotes and multimedia (audio/video/images), are managed by SwiftData's advanced @Relationship engine.
• Deep System Integration: Because it uses SwiftData, the app integrates deeply with Spotlight Search and iOS Widgets, allowing you to search your favorite quotes and reflections directly from the home screen.

6. Additional Key Features
• The "Today" Tab: A beautiful, swiping interface that fetches daily quotes from Firebase and caches them via SwiftData.
• Multimedia Stoic Journal: A sophisticated journaling system where you can record audio, video, and photos alongside your thoughts, all saved securely in your local SwiftData store.
• Proactive Discovery: Uses TipKit to teach you how to use Spotlight search and Widgets, ensuring you stay connected to Stoic practice throughout your day.
• Smart Navigation (MVVM-C): A robust architecture that keeps your Firebase networking and SwiftData persistence logic clean and separated from your UI.

In summary: It's a high-tech "Wisdom Engine" that leverages Firebase for content delivery and SwiftData for a fast, offline-capable, and media-rich personal experience.`,
      tags: ["SwiftUI", "TipKit", "Widgets", "Spotlight", "Firebase", "SwiftData", "MVVM-C"],
      image: "/projects/stoiclife_1.png",
      images: [
        "/projects/stoiclife_1.png", "/projects/stoiclife_2.png", "/projects/stoiclife_3.png", "/projects/stoiclife_4.png", "/projects/stoiclife_5.png", "/projects/stoiclife_6.png", "/projects/stoiclife_7.png", "/projects/stoiclife_8.png", "/projects/stoiclife_9.png"
      ],
      mockupColor: "#E0F2FE"
    }
  ];

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
              key={project.title} 
              {...project} 
              onViewDetails={() => setSelectedProject(project)}
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
              key={project.title} 
              {...project} 
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
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
            <ObfuscatedEmail user="abrasaldomark" domain="icloud.com">
              abrasaldomark@icloud.com
            </ObfuscatedEmail>
          </div>
          <div className={styles.contactLinks}>
            <ObfuscatedEmail 
              user="abrasaldomark" 
              domain="icloud.com" 
              className={styles.contactButton}
            >
              Email Me
            </ObfuscatedEmail>
            <div className={styles.socials}>
              <a href="https://github.com/abrasaldomark" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abrasaldomark/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.resumeContainer}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            Download Resume
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mark Abrasaldo. Built with Next.js and Swift-like precision.</p>
      </footer>
    </main>
  );
}

const skills = [
  { category: "Programming Language", items: ["Swift", "Objective-C"] },
  { category: "Frameworks", items: ["SwiftUI", "UIKit", "Combine", "RxSwift", "Redux (ReSwift)"] },
  { category: "Data & Networking", items: ["Core Data", "SwiftData", "CloudKit", "Firebase", "Alamofire", "REST"] },
  { category: "Tools & DevOps", items: ["Xcode", "Git", "Fastlane", "CI/CD", "JIRA"] }
];
