const express = require("express");
const router = express.Router();
const controller = require("../controller/user_controller");
const UserController = new controller();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//new user regist
router.post("/register", UserController.registerUser);

module.exports = router;
