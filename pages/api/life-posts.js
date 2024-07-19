import data from './life-posts.json';

export const getLifePosts = () => {
  return data;
};

export default (req, res) => {
  const posts = getLifePosts();
  res.json(posts);
};
