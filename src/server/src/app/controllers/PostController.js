const { response } = require('express')
const Post = require('../models/Post')





//get All Post
const getAll = async (req, res) => {
    try{
        const data = await Post.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

//get One post
const getOne = async (req,res) =>{
    try{
        const data = await Post.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// Create Post
const createPost = async (req, res) =>{
    
    let post = new Post({
        status: req.body.status,
        title: req.body.title,
        img: req.body.img,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        content: req.body.content,
    })
    try{
        const dataToSave = await post.save();
        res.status(200).json(dataToSave)
    }
    catch(error)  {
        res.status(400).json({message: error.message})
    }
}
//Update Post
const updatePost = async (req, res) =>{
    try {

        const title = req.body.title;
        const img = req.body.img;
        const author = req.body.author;
        const category = req.body.category;
        const description = req.body.description;
        const content = req.body.content;

        const result = await Post.findByIdAndUpdate(
            title, img, author, category, description, content
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const destroy = async (req, res) =>{
    try {
        const id = req.params.id;
        const data = await Post.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports ={
    getAll, createPost, getOne, updatePost, destroy
}