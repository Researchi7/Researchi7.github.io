import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const lowResImageUrl = project.image.replace(/(\.[a-z]+)$/, 'm$1');
  return (
    <div className={styles.card}>
      <Image src={project.image}
        height={300}
        width={600}
        sizes="(max-width: 600px) 100vw, 600px"
        placeholder="blur"
        blurDataURL={lowResImageUrl}
        alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Demo
            </a>
          )}
          {project.scholar && (
            <a
              href={project.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Paper
            </a>
          )}
          {project.fullText && (
            <Link href={project.fullText} passHref>
              <a className={styles.underline} rel="noopener noreferrer">
                Read more
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
