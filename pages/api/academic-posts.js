import data from './academic-posts.json';

export const getAcademicPosts = () => {
  return data;
};

export default (req, res) => {
  const posts = getAcademicPosts();
  res.json(posts);
};
