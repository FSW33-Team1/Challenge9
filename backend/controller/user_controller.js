const models = require("../models");

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
  async create(req, res) {//insert
    const { username, password } = req.body;

    await models.User.create({
        username: username,
        password: password,
    });
    return res.redirect("/login");
 }
};
