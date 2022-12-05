const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/mongodb');
const methodOverride = require('method-override')


app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
