import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getSinglePost = async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message)
  }
};

export const createPost = async (req,res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
} 