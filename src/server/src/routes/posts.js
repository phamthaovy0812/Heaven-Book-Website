const express = require('express');
const router = express.Router()

const PostController = require('../app/controllers/PostController')

router.get('/', PostController.index)
router.get('/home', PostController.show)
router.get('/store', PostController.store)
router.get('/update', PostController.update)
router.get('/destroy', PostController.destroy)

module.exports = router
