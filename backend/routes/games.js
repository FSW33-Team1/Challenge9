const express = require("express");
const controller = require("../controller/game_controller");
const GameController = new controller();
const router = express.Router();

/* GET users listing. */
router.get("/", GameController.index);
router.get("/:id", GameController.show);

module.exports = router;
