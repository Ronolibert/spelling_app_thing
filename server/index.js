const path = require('path');
const express = require('express');
const nconf = require('nconf');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./initialize');
require('./config/passport')(passport);

const app = express();

const rootDir = path.join(__dirname, '../');

app.set('port', nconf.get('PORT') || 5000);

// Connect to MongoDB
mongoose.connect(nconf.get('mongoURI'), () => {
  console.log('connected to mongo');
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    console.log('o ye', req);
    res.send('this happened');
  }
);

app.get('*', (req, res) => {
  console.log('i see you');
});

app.listen(nconf.get('PORT'), () => {
  console.log(`Running in ${process.env.NODE_ENV}`);
  console.log(`Listening on port: ${nconf.get('PORT')}`);
});
