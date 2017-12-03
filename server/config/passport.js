const nconf = require('nconf');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const User = require('../models/User.model.js');

module.exports = passport => {
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) =>
    User.findById(id).then(user => {
      done(null, user);
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: nconf.get('GOOGLE_CLIENT_ID'),
        clientSecret: nconf.get('GOOGLE_CLIENT_SECRET'),
        callbackURL: nconf.get('GOOGLE_CALLBACK_URL')
      },
      (token, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }, (err, user) => {
          if (user) {
            console.log('I al;ready exist', user);
            done(null, user);
          } else {
            const userId = uuidv4();
            const token = jwt.sign(userId, nconf.get('JWT_SECRET'));

            User.create(
              {
                token,
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
              },
              (err, newUser) => {
                if (err) {
                  return done(err);
                }
                console.log('new user created', newUser);
                return done(null, newUser);
              }
            );
          }
        });
      }
    )
  );
};
