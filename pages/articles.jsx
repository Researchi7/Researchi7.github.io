import { getArticles } from './api/articles';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>Chi's Literary Notes</h3>
      <br />
      <hr />
      <div className={styles.container}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.content}>
              <h3>{article.title}</h3>
              <p><strong>Abstract:</strong> {article.abstract}</p>
              {article.conference && (
                <p><strong>Conference:</strong> {article.conference}</p>
              )}
              <p><strong>Year:</strong> {article.year}</p>
              <div className={styles.cta}>
                <a
                  href={article.zhlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read More (cn)
                </a>
              </div>
              {article.enlink && (
                <div className={styles.cta}>
                <a
                  href={article.enlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read More (en)
                </a>
              </div>
              )}
            </div>
            {article.cover_image && (
              <div className={styles.coverImage}>
                <img src={`/cover_images/${article.cover_image}`} alt={article.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};



export async function getStaticProps() {
  const articles = getArticles();

  return {
    props: { title: 'Articles', articles },
  };
}

export default ArticlesPage;
