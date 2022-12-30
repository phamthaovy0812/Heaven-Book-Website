const Course = require('../models/Account');
const collection = require('../models/Account')

const { multipleMongooseToObject } = require('../../util/mongoose'); 

class SiteController {

    //GET /getall
    getAll(req, res) {
        collection.find({}, function(err, collections) {
            if(!err) res.json(collections);
            else res.status(400).json({ error: 'Fail to get account list'});
        });
    }
    
    //GET '/update'
    updateInfoGet(req, res) {
        res.render('updateInfo');
    }

    //POST '/update'
    async updateInfoPost(req, res) {
        try{
            const check = await collection.findOne({username: req.body.username}).lean()
    
            if(!check) res.send("Username does not exist")
            else {
                console.log(check.id)
                res.render('home')
            }
        }
        catch (error) {
            res.send("Wrong detail")
        }
    }

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
            
            if(!check) res.status(400).json({ message: "Username does not exist!" })
            else {
                console.log(req.body)
                if(check.password === req.body.password) {
                    res.status(200).json({check, message: "Login success!"})
                }
                else res.status(400).json({ message: "Wrong password!" })
            }
        }
        catch (error) {
            res.status(400).json({ message: "Wrong detail!" })
        }
    }


    //GET /signup
    signupGet(req, res) {
        res.render('signup');
    }

    //POST /signup
    async signupPost(req, res) {
        const { username, password, lastName, firstName, email } = req.body

        if (!username || typeof username !== 'string') res.status(400).json({message: "Empty username!"})

        if (!password || typeof password !== 'string') res.status(400).json({message: "Empty password!"})
        
        try {
            const data =  {
                username,
                password,
                lastName,
                firstName,
                email
            }
            
            const check = await collection.findOne({username: req.body.username}).lean()
            
            if(check) res.status(400).json({ message: "Username has been used!" })
            else {
                await collection.insertMany([data])
                res.status(200).json({data, message: "Signup success!"})
            }
        }
        catch(error) {
            if(error.code === 11000) {
                res.status(400).json({message: "Email has been used!"})
            }
        }
    }

    //GET /change : change password
    changeGet(req, res) {
        res.render('changePassword');
    }


}

module.exports = new SiteController;