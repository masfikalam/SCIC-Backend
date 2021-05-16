const jwt = require("jsonwebtoken");

module.exports.verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const valid = await jwt.verify(authorization, process.env.JWT_KEY);
    if (valid) next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
