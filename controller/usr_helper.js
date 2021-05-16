const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// hash password
module.exports.hashPassword = (password, salt) => {
  try {
    return bcrypt.hash(password, salt);
  } catch (err) {
    res.status(401).send(err);
  }
};

// verify password
module.exports.verifyPassword = (password, hash) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (err) {
    res.status(401).send(err);
  }
};

// create token
module.exports.createToken = (payload, expire) => {
  try {
    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: expire });
  } catch (err) {
    res.status(401).send(err);
  }
};
