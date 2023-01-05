const { response } = require("express");
const Post = require("../models/Post");

// get by title
const getTitle = async (req, res) => {
  try {
    const data = await Post.find({ title: req.body.title });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get by categories
const getCategories = async (req, res) => {
  try {
    const data = await Post.find({ categories: req.params.categories });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get by status
const getStatus = async (req, res) => {
  try {
    const data = await Post.find({ status: { $in: [true, false] } });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all posts
const getAll = async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one post
const getOne = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Post
const createPost = async (req, res) => {
  let post = new Post({
    status: req.body.status,
    title: req.body.title,
    img: req.body.img,
    author: req.body.author,
    idReviewer: req.body.idReviewer,
    Reviewername: req.body.Reviewername,
    category: req.body.category,
    description: req.body.description,
    content: req.body.content,
  });
  try {
    const dataToSave = await post.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//Update Post
const updatePost = async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
      description: req.body.description,
      content: req.body.content,
      listLike: req.body.listLike,
      listDislike: req.body.listDislike,
    });

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAll,
  createPost,
  getOne,
  updatePost,
  destroy,
  getTitle,
  getCategories,
  getStatus,
};
