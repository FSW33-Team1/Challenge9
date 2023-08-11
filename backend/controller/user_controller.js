const models = require("../models");
const { user } = require("../models");
module.exports = class UserController {
  async findUser(req, res) {
    try {
      const id = parseInt(Object.values(req.params));
      const data = await models.User.findOne({ where: { id: id } });
      const result = {
        status: "ok",
        data: data,
      };
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async register(req, res) {//show register page
    res.render("register");
}
 static async create(req, res, next) {
  try {
    const { username, email, password} = req.body;
    
    if (!username || !email) {
      return res.status(400).json({
        result: "Failed",
        message: "username or email cannot empty",
      });
    }
    if (!password) {
      return res.status(400).json({
        result: "Failed",
        message: "password cannot be empty",
      });
    }
    const newPlayer = {
      username,
      email,
      password: await hashPassword(password),
      experience: experience ? experience : 0,
      lvl: experience ? Math.floor(experience / LEVEL_BAR) : 0,
    };
    const createdPlayer = await Player.create(newPlayer);
    if (createdPlayer) {
      return res.status(201).json({
        result: "Success",
        data: createdPlayer,
      });
    }
  } catch (error) {
    next(error);
  }
}
};
