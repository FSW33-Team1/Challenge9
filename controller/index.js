const User = require('./user_controller')

const userRoute = () => {
    // tergantikan dengan React.js
    // const router = require("express").Router();
    // const controller = new User();
    // router.get('/', controller.homePage);
    // router.get('/login', controller.loginPage);
    // router.get('/register', controller.registerPage);
    // router.get('/game/:id', controller.gamePage1);

    // return router;
}

module.exports = (app) => {
    app.use('/', userRoute())
}

// module.exports = userRoute;
