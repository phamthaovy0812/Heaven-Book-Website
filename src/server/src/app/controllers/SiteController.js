const Course = require('../models/Account');
const collection = require('../models/Account')

const { multipleMongooseToObject } = require('../../util/mongoose'); 

class SiteController {

    //GET '/'
    home(req, res, next) {
        res.render('home')
    }

    //GET /login
    loginGet(req, res) {
        res.render('login');
    }

    //GET /signup
    signupGet(req, res) {
        res.render('signup');
    }
}

module.exports = new SiteController;