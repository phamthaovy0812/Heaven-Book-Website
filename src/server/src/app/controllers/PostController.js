const { response } = require('express')
const Post = require('../models/Post')


const index = (req,res,next) =>{
    Post.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'Error occured'
        })
    })
}

const show = (req, res, next) =>{
    let postId = req.body.postId
    Post.findById(postId)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'Error occured'
        })
    })
}

const store = (req, res, next) =>{
    let post = new Post({
        text: req.body.text,
        img: req.body.img,
        category: req.body.category
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

const update = (req, res, next) =>{
    let postID = req.body.postId

    let updateData = {
        text: req.body.text,
        img: req.body.img,
        category: req.body.category
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
    index, show, store, update, destroy
}