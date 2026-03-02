import styles from './ProjectCard.module.css';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  mockupColor?: string;
  onViewDetails: () => void;
}

export default function ProjectCard({ title, description, tags, image, mockupColor = '#007AFF', onViewDetails }: ProjectProps) {
  return (
    <div className={styles.card}>
      <div className={styles.mockup} style={{ backgroundColor: mockupColor }}>
        <div className={styles.screen}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className={styles.projectImage} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <button onClick={onViewDetails} className={styles.link}>
          View Details
        </button>
      </div>
    </div>
  );
}
