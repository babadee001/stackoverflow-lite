const express = require('express');
const app = express();

const Route1 = require('./api/routes/getAll');
const Route2 = require('./api/routes/deleteQuestion');
const Route3 = require('./api/routes/downvote');
const Route4 = require('./api/routes/login');
const Route5 = require('./api/routes/getQuestion');
const Route6 = require('./api/routes/postAns');
const Route7 = require('./api/routes/postQuest');
const Route8 = require('./api/routes/signUp');
const Route9 = require('./api/routes/updateAns');
const Route0 = require('./api/routes/vote')


app.use('/', Route1);
app.use('/', Route2);
app.use('/', Route3);
app.use('/', Route4);
app.use('/', Route5);
app.use('/', Route6);
app.use('/', Route7);
app.use('/', Route8);
app.use('/', Route9);
app.use('/', Route0)


module.exports = app; 