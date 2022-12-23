const express = require('express');
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')


router.get('/', SiteController.home)

router.get('/account', SiteController.getAll)

router.get('/login', SiteController.loginGet)
router.post('/login', SiteController.loginPost)

router.get('/signup', SiteController.signupGet)
router.post('/signup', SiteController.signupPost)

module.exports = router
