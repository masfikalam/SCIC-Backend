const express = require("express");
const router = express.Router();
const usrController = require("../controller/usr_controller");

// get all users
router.get("/", usrController.getAll);

// user login
router.post("/login", usrController.login);

// user signup
router.post("/signup", usrController.signup);

// export routes
module.exports = router;
