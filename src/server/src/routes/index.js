const postRouter = require('./posts')
const siteRouter = require('./accounts')


function route(app) {    
    app.use('/', siteRouter);

    app.post("login", async (req, res) => {
        try{
            const check = await collection.findOne({username: req.body.username})
    
            if(check.password === req.body.password) res.render('home')
            else res.render('login')
        }
        catch (error) {
            res.render('login')
        }  
    })

    app.post("/signup", async (req, res) => {

        const { username, password: plainTextPassword } = req.body
    
        if (!username || typeof username !== 'string') res.render('signup')
    
        if (!plainTextPassword || typeof plainTextPassword !== 'string') res.render('signup')
    
        try {
            const data =  {
                username,
                password
            }
            await collection.insertMany([data])
            console.log(data)
            res.render('login')
        }
        catch {
            res.render('signup')
        }
    })
}

module.exports = route;