import PostCard from '../components/PostCard';
import { getNewsPosts } from './api/news-posts';
import { getAcademicPosts } from './api/academic-posts';
import { getLifePosts } from './api/life-posts';
import { getInterestingTricksPosts } from './api/interesting-tricks-posts';
import styles from '../styles/PostsPage.module.css';

const PostsPage = ({ news_posts, academic_posts, life_posts, interesting_tricks_posts }) => {
  return (
    <>
      <h3>Posts</h3>
      <br/>
      <center><h4>News</h4></center>
      <hr/>
      <div className={styles.container}>
        {news_posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <br/>
      <center><h4>Academic</h4></center>
      <hr/>
      <div className={styles.container}>
        {academic_posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <br/>
      <center><h4>Life</h4></center>
      <hr/>
      <div className={styles.container}>
        {life_posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <br/>
      <center><h4>Interesting Tricks</h4></center>
      <hr/>
      <div className={styles.container}>
        {interesting_tricks_posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const news_posts = getNewsPosts();
  const academic_posts = getAcademicPosts();
  const life_posts = getLifePosts();
  const interesting_tricks_posts = getInterestingTricksPosts();

  return {
    props: { title: 'Posts', news_posts, academic_posts, life_posts, interesting_tricks_posts },
  };
}

export default PostsPage;
