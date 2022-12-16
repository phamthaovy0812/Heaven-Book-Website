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

    //POST /login
    async loginPost(req, res) {
        try{
            const check = await collection.findOne({username: req.body.username}).lean()
    
            if(!check) res.send("Username does not exist")
            else {
                console.log(req.body)
                if(check.password === req.body.password) res.render('home')
                else res.send("Wrong password")
            }
        }
        catch (error) {
            res.send("Wrong detial")
        }
    }


    //GET /signup
    signupGet(req, res) {
        res.render('signup');
    }

    //POST /signup
    async signupPost(req, res) {
        const { username, password } = req.body

        if (!username || typeof username !== 'string') res.render('signup')

        if (!password || typeof password !== 'string') res.render('signup')
        
        try {
            const data =  {
                username,
                password
            }
            await collection.insertMany([data])
            console.log(data)
            res.render('login')
        }
        catch(error) {
            if(error.code === 11000) res.render('signup')
        }
    }


}

module.exports = new SiteController;