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

  async editUser(req, res) {
    try {
      const {id} = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });
      const result = {
        status: "ok",
        data: data,
      };
      data.email = req.email;
      data.username = req.username;
      data.total_score = req.total_score;
      data.bio = req.bio;
      data.city = req.city;
      data.social_media_url = req.social_media_url;

      await data.save();

    } catch (error) {
      console.log(error);
    }
  }

  async changePassword(req, res) {
    try {
      const {id} = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });

      data.password = req.password;

      await data.save();

    } catch (error) {
      console.log(error);
    }
  }

  async addPoint(req, res) {
    try {
      const {id} = req.params;
      const data = await models.User.findOne({
        where: {
          id: id
        }
      });

      data.total_score +=1;

      await data.save();

    } catch (error) {
      console.log(error);
    }
  }

  async showScore(req,res){
    try {
      const {id} = (req.params);
      const user = await models.User.findOne({ where: { id: id } });

      if(!user){
        return res.status(404).json({ error: "Game not found" });
      }

      res.json(user.total_score);
    } catch (error) {
      console.log(error);
    }
  }


  // async;
};
