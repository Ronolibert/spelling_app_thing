const nconf = require('nconf');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: nconf.get('GOOGLE_CLIENT_ID'),
        clientSecret: nconf.get('GOOGLE_CLIENT_SECRET'),
        callbackURL: nconf.get('GOOGLE_CALLBACK_URL')
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('passport callback fired', profile);
      }
    )
  );
};
