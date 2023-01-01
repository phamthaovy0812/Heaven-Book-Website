const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/mongodb');
const methodOverride = require('method-override');
const { rmSync } = require('fs');
const cors = require('cors')
const collection = require('./app/models/Account');


app.use(express.static(path.join(__dirname, 'public')));

//Connect DB
db.connect();

//Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(cors())
//HTTP logger
app.use(morgan('combined'));
//PUT method
app.use(methodOverride('_method'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log(__dirname)

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
