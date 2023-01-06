const Course = require('../models/Account');
const collection = require('../models/Account')

const { multipleMongooseToObject } = require('../../util/mongoose'); 
const { estimatedDocumentCount } = require('../models/Post');

class SiteController {
    
    //GET '/'
    home(req, res, next) {
        res.render('home')
    }

    //GET /account
    getAll(req, res) {
        collection.find({}, function(err, collections) {
            if(!err) res.json(collections);
            else res.status(400).json({ error: 'Fail to get account list'});
        });
    }

    //GET /account/:id
    async getOne(req,res) {
        try{
            const data = await collection.findById(req.params.id)
            res.json(data)
        }
        catch(error){
            res.status(400).json({message: "Account does not exist"})
        }
    }

    //GET /change: change password
    changeGet(req, res) {
        res.render('changePassword');
    }

    //POST /change: change password
    async changePost(req, res) {
        try{
            if(!req.body.password) return res.status(400).json({ message: "Empty current password" })

            if(!req.body.newpass) return res.status(400).json({ message: "Empty new password" })
            
            const user = await collection.findOne({username: req.body.username}).lean()
            
            if(!user) return res.status(400).json({ message: "Username does not exist!" })
            
            if(user.password !== req.body.password) return res.status(400).json({ message: "Wrong password" })
            
            await collection.findByIdAndUpdate(
                user._id, {
                    password: req.body.newpass,
                }
            )
            res.status(200).json({message: "update success"})

        }
        catch (error) {
            res.status(400).json({ message: "error" })
        }
    }

    //GET '/update'
    updateInfoGet(req, res) {
        res.render('updateInfo');
    }

    //POST '/update'
    async updateInfoPost(req, res) {
        try{
            if(!req.body.username) return res.status(400).json({ message: "Empty username!" })

            const user = await collection.findOne({username: req.body.username}).lean()
            
            if(!user) res.status(400).json({ message: "Username does not exist!" })
            else {
                await collection.findByIdAndUpdate(
                    user._id, {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        listIdPosted : req.body.listIdPosted
                      }
                )
                res.status(200).json({message: "update success"})
            }

        }
        catch (error) {
            res.status(400).json({ message: "Email already in used!" })
        }
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
}

module.exports = new SiteController;