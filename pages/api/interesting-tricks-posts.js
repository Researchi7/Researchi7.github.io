import data from './interesting-tricks-posts.json';

export const getInterestingTricksPosts = () => {
  return data;
};

export default (req, res) => {
  const posts = getInterestingTricksPosts();
  res.json(posts);
};
