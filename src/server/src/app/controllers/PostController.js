const { response } = require('express')
const Post = require('../models/Post')
const { mongooseToObject } = require('../../util/mongoose');

import uuid from 'uuid/v1';

const showCreate = (req, res, next) =>{
    res.render('') //create view
}
const showUpdate = (req, res, next) =>{
    res.render('') //update view
}

//getListPost
const getListPost = (req, res, next) => {
    Post.find({})
        .then(post => res.render(''/*view url*/, {
            post: multipleMongooseToObject(post)
        }))
        .catch(next)
}

//getPost
const getPost = (req, res, next) => {
    Post.findOne({id: req.body.id})
        .then(post => {
            res.json({post: mongooseToObject(post)})
        })
        .catch(next)
}
//createNewPost
const createPost = (req, res, next) =>{
    let post = new Post({
        id: uuid(),
        title: req.body.title,
        img: req.body.img,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        content: req.body.content,

    })
    post.save()
    .then(response =>{
        res.json({
            message: 'Added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'Error occured'
        })
    })
}
//PUT method to update
const updatePost = (req, res, next) =>{
    let postID = req.body.postId

    let updateData = {
        title: req.body.title,
        img: req.body.img,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        content: req.body.content,
    }

    Post.findByIdAndUpdate(postId,{$set: updateData})
    .then(() =>{
        res.json({
            message: 'updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'Error occured'
        })
    })
}

const destroy = (req, res, next) =>{
    let postID = req.body.postId
    Post.findOneAndRemove(postID)
    .then(() =>{
        res.json({
            message: 'deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'Error occured'
        })
    })
}
module.exports ={
    getPost, getListPost, createPost, updatePost, destroy, showCreate, showUpdate
}