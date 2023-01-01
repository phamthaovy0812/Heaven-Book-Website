const express = require('express');
const router = express.Router()

const PostController = require('../app/controllers/PostController')

router
    .route('/')
        .get( PostController.getAll)
        .post( PostController.createPost)
        .put( PostController.updatePost);
                
router
    .route('/:id')
        .delete( PostController.destroy)
        .get( PostController.getOne);

router.get('/title', PostController.getTitle);

module.exports = router
