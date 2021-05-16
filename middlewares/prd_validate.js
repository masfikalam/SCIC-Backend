const { check } = require("express-validator");

const prdValidate = [
  check("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("can't be empty")
    .bail()
    .isString()
    .withMessage("should be a string"),

  check("owner")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("can't be empty")
    .bail()
    .isString()
    .withMessage("should be a string"),

  check("category")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("can't be empty")
    .bail()
    .isString()
    .withMessage("needs to be a string"),
];

// export validator
module.exports = prdValidate;
