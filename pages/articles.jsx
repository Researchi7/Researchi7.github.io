import { getArticles } from './api/articles';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>My Literary Notes</h3>
      <br/>
      <hr/>
      <div className={styles.container}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.content}>
              <h3>{article.title}</h3>
              <p><strong>Abstract:</strong> {article.abstract}</p>
              <p><strong>Conference:</strong> {article.conference}</p>
              <p><strong>Year:</strong> {article.year}</p>
              <p><strong>Likes:</strong> {article.likes}</p>
              <div className={styles.cta}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read More
                </a>
              </div>
            </div>
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
