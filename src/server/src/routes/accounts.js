const express = require('express');
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')


router.get('/', SiteController.home)

router.get('/login', SiteController.login)
router.get('/signup', SiteController.signup)

module.exports = router
