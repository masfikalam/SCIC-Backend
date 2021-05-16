const { validationResult } = require("express-validator");

const validateResult = function (req, res, next) {
  const err = validationResult(req);
  if (!err) {
    next();
  } else {
    const message = err.array().map((e) => `${e.param} ${e.msg}`);
    res.status(400).send(message);
  }
};

// export result
module.exports = validateResult;
