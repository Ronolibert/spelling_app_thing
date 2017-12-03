const { User } = require('./models/User.model.js');

module.exports.jwtAuthentication = (req, res, next) => {
  const bearerTokenHeader = req.header('Authorization');

  if (!bearerTokenHeader) {
    return next();
  }

  const token = bearerTokenHeader.replace(/^Bearer\s/i, '');

  User.findOne({ token }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next(err);
    }

    req.user = user;
    return next();
  });
};

module.exports.authenticatedRoute = (req, res, next) => {
  if (!req.user) {
    return next(new Error('You do not have permission to access this route'));
  }

  return next();
};
