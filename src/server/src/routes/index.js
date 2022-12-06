const postRouter = require('./posts')


function route(app) {    
    app.use('/post', postRouter);
}

module.exports = route;