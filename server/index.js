const path = require('path');
const express = require('express');
const nconf = require('nconf');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { jwtAuthentication } = require('./middleware');

require('./initialize');
require('./config/passport')(passport);

const app = express();

const rootDir = path.join(__dirname, '../');

app.set('port', nconf.get('PORT') || 5000);

app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect(nconf.get('mongoURI'), () => {
  console.log('connected to mongo');
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(jwtAuthentication);
// ROUTES
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    const { token } = req.user;

    // Make it a 5-year cookie
    const cookieExpirationDate = new Date(
      Date.now() + 2 * 365 * 24 * 60 * 60 * 1000,
    );

    res.cookie(nconf.get('AUTH_TOKEN_KEY'), token, {
      expires: cookieExpirationDate,
    });

    return res.redirect('http://localhost:3000');
  },
);

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'build/index.html'));
});

app.listen(nconf.get('PORT'), () => {
  console.log(`Running in ${process.env.NODE_ENV}`);
  console.log(`Listening on port: ${nconf.get('PORT')}`);
});
