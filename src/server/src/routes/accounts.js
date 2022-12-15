const express = require('express');
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')


router.get('/', SiteController.home)

router.get('/login', SiteController.loginGet)
router.get('/signup', SiteController.signupGet)

module.exports = router
