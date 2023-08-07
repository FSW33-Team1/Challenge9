const User = require('./user_controller');

const userRoute = () => {
    const router = require("express").Router();
    const userController = new User();

    router.get("/", userController.allUsers)
    router.post("/")

    return router;
}

module.exports = (app) => {
    app.use("/", userRoute());
};