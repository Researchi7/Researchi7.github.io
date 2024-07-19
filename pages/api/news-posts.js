import data from './news-posts.json';

export const getNewsPosts = () => {
  return data;
};

export default (req, res) => {
  const posts = getNewsPosts();
  res.json(posts);
};
