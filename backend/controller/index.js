const User = require('./user_controller');

const userRoute = () => {
    const router = require("express").Router();
    const userController = new User();
    //nama tabel/models users: user_
    //nama tabel/models game: game
    //utk detail dapat dilihat di folder models

    //post/register player
    router.post("/register/:id", controller.create);
    //get/register player
    router.get("/register", controller.register);

    //login player (need auth)
    router.post("/login");

    //get player data - DONE
    router.get("/player/:id", userController.findUser);

    //edit player data (semua data kecuali createdAt dan updatedAt)
    router.put("/player/:id");

    //show game list
    router.get("/games");

    //show leaderboard (score semua player di suatu game)
    router.get("/game/:id/leaderboard");

    return router;
}

module.exports = (app) => {
    app.use("/", userRoute());
};