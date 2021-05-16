const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");
const prdController = require("../controller/prd_controller");
const prdValidate = require("../middlewares/prd_validate");
const validateResult = require("../middlewares/validate_result");

// get all products
router.get("/", prdController.getAll);

// get one product
router.get("/:id", prdController.getOne);

// add one product
router.post(
  "/",
  verifyToken,
  prdValidate,
  validateResult,
  prdController.create
);

// update one product
router.patch("/:id", verifyToken, prdController.update);

// delete one product
router.delete("/:id", verifyToken, prdController.deleteOne);

// delete filtered products
router.delete("/", verifyToken, prdController.deleteMany);

// export routes
module.exports = router;
