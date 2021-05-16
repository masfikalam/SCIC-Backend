const { PrdModel } = require("../models/prd_model");
const prdServices = {};

prdServices.getAll = function () {
  return PrdModel.find({});
};

prdServices.getOne = function (id) {
  return PrdModel.findOne({ _id: id });
};

prdServices.create = function (body) {
  return PrdModel.create(body);
};

prdServices.update = function (_id, body) {
  return PrdModel.findOneAndUpdate({ _id }, { $set: body }, { new: true });
};

prdServices.delete = function (id) {
  return PrdModel.deleteOne({ _id: id });
};

prdServices.deleteCategory = function (category) {
  return PrdModel.deleteMany({ category });
};

// export services
module.exports = prdServices;
