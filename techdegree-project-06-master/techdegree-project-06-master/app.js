const express = require('express');
const path = require('path');
const {projects} = require("./data.json");

const app = express();

app.set('view engine','pug');
app.use('/static',express.static('public'));

const mainRoute = require('./routes')
const aboutRoute = require('./routes/about')
const projectsRoute = require('./routes/projects')
app.use((req,res,next) => {
    res.locals.projects = projects;
    next();
})
app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/projects',projectsRoute);

app.use((req,res,next) =>{
    const error = new Error('Page not found');

    error.status = 404;
    error.stack;
    res.locals.error = error;
    error.url = req.headers.host + req.url
    next(error);
})

app.use ((err,req,res, next) => {
    console.log(`The following error occured at route  - '${err.url}'`)
    console.log(`Status code:  ${err.status}`)
    console.error(err.stack);
    res.locals.error = err;
    res.status(err.status)
    res.render('error')
});

app.listen(3000);