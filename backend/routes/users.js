const express = require("express");
const controller = require("../controller/user_controller");
const UserController = new controller();
const router = express.Router();

/* GET users listing. */
router.get("/:id", UserController.findUser);

//edit player data
router.put("/:id", UserController.editUser);

//show total points
router.get('/:id/total-score', UserController.showScore);

//add points
router.put('/:id/add-point', UserController.addPoint);

//reset password
router.put('/:id/reset-password', UserController.resetPassword);


module.exports = router;
