const prdServices = require("../services/prd_services");
const prdController = {};

// get all products
prdController.getAll = async function (req, res) {
  try {
    const data = await prdServices.getAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

// get one product
prdController.getOne = async function (req, res) {
  try {
    const data = await prdServices.getOne(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

// add one product
prdController.create = async function (req, res) {
  try {
    const data = await prdServices.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

// update one product
prdController.update = async function (req, res) {
  try {
    const data = await prdServices.update(req.params.id, req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

// delete one product
prdController.deleteOne = async function (req, res) {
  try {
    const data = await prdServices.delete(req.params.id);
    res.send(`${data.deletedCount} item deleted successfully`);
  } catch (err) {
    res.status(500).send(err);
  }
};

// delete filtered products
prdController.deleteMany = async function (req, res) {
  try {
    const data = await prdServices.deleteCategory(req.body.category);
    res.send(`${data.deletedCount} items deleted successfully`);
  } catch (err) {
    res.status(500).send(err);
  }
};

// export controllers
module.exports = prdController;
