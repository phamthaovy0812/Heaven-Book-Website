const postRouter = require('./posts')
const siteRouter = require('./accounts')


function route(app) {    
    app.use('/', siteRouter);
    app.use('/post', postRouter);
}

module.exports = route;