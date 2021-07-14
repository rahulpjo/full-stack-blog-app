import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
