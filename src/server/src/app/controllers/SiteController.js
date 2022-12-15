const Course = require('../models/Account');
const collection = require('../models/Account')

const { multipleMongooseToObject } = require('../../util/mongoose'); 

class SiteController {

    //GET '/'
    home(req, res, next) {
        res.render('home')
    }

    //GET /login
    login(req, res) {
        res.render('login');
    }

    //GET /register
    register(req, res) {
        res.render('register');
    }
}

module.exports = new SiteController;