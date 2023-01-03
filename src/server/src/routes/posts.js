const express = require('express');
const router = express.Router()

const PostController = require('../app/controllers/PostController')

router
    .route('/')
        .get( PostController.getAll)
        .post( PostController.createPost);
      
                
router
    .route('/:id')
        .delete( PostController.destroy)
        .get( PostController.getOne)
        .put( PostController.updatePost);

router.get('/title', PostController.getTitle);

module.exports = router
