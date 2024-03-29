const jwt = require('jsonwebtoken');
const auth = require('../config/auth');

const generateToken = (params = {}) => {
  return jwt.sign(params, auth.secret, {
    expiresIn: 86400,
  });
};

module.exports = generateToken;
