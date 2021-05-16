const { UsrModel } = require("../models/usr_model");
const usrServices = {};

usrServices.login = function (username) {
  const user = UsrModel.findOne({ username });
  if (user) return user;
};

usrServices.signup = function (body) {
  return UsrModel.create(body);
};

usrServices.getAll = function () {
  return UsrModel.find({});
};

// export services
module.exports = usrServices;
