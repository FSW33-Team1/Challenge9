const express = require("express");
const controller = require("../controller/user_controller");
const UserController = new controller();
const router = express.Router();

/* GET users listing. */
router.get("/:id", UserController.findUser);

module.exports = router;
