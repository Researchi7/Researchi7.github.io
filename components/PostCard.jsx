import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  const lowResImageUrl = post.image.replace(/(\.[a-z]+)$/, 'm$1');
  return (
    <div className={styles.card}>
      <Image src={post.image}
        height={300}
        width={600}
        sizes="(max-width: 600px) 100vw, 600px"
        placeholder="blur"
        blurDataURL={lowResImageUrl}
        alt={post.name} />
      <div className={styles.content}>
        <h3>{post.name}</h3>
        <p>{post.description}</p>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {post.source_code && (
            <a
              href={post.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Code
            </a>
          )}
          {post.demo && (
            <a
              href={post.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Demo
            </a>
          )}
          {post.scholar && (
            <a
              href={post.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Paper
            </a>
          )}
          {post.fullText && (
            <Link href={post.fullText} passHref>
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

export default PostCard;
