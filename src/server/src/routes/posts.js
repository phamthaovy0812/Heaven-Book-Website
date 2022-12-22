const express = require('express');
const router = express.Router()

const PostController = require('../app/controllers/PostController')

router.get('/getAll', PostController.getAll);
router.get('/getOne/:id', PostController.getOne);
router.post('/create', PostController.createPost)
router.put('/update', PostController.updatePost)
router.delete('/destroy', PostController.destroy)
router.get('/title', PostController.getTitle)
module.exports = router
