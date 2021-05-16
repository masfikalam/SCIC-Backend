const usrServices = require("../services/usr_services");
const { createToken, hashPassword, verifyPassword } = require("./usr_helper");
const usrController = {};

// get all users
usrController.getAll = async function (req, res) {
  try {
    const data = await usrServices.getAll();
    const response = data.map((obj) => {
      return {
        id: obj._id,
        name: obj.name,
        username: obj.username,
      };
    });
    res.send(response);
  } catch (err) {
    res.status(401).send(err);
  }
};

// user login
usrController.login = async function (req, res) {
  try {
    const data = await usrServices.login(req.body.username);
    const valid = await verifyPassword(req.body.password, data.password);

    if (valid) {
      const response = {
        id: data._id,
        name: data.name,
        username: data.username,
      };
      const token = await createToken(response, "1h");
      res.json({ token, user: response });
    } else res.status(401).send("Invalid password");
  } catch (err) {
    res.status(401).send(`Authentication Failed - ${err}`);
  }
};

// user signup
usrController.signup = async function (req, res) {
  try {
    const uglyPassword = await hashPassword(req.body.password, 10);
    req.body.password = uglyPassword;
    const data = await usrServices.signup(req.body);
    const response = {
      id: data._id,
      name: data.name,
      username: data.username,
    };
    const token = await createToken(response, "1h");
    res.json({ token, user: response });
  } catch (err) {
    res.status(401).send(`Registration Failed - ${err}`);
  }
};

// export controllers
module.exports = usrController;
