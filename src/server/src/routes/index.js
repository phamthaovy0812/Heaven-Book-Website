const postRouter = require('./posts')
const siteRouter = require('./accounts')


function route(app) {    
    app.use('/', siteRouter);
}

module.exports = route;