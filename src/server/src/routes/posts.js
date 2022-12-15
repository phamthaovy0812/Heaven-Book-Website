const express = require('express');
const router = express.Router()

const PostController = require('../app/controllers/PostController')


router.get('/home', PostController.getListPost)
router.get('/store', PostController.createPost)
router.get('/update', PostController.updatePost)
router.get('/destroy', PostController.destroy)

module.exports = router
