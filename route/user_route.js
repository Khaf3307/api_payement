module.exports = app => {
    const controller = require("../controller/user_controller.js");
    //const controller1 = require("../controller/auth_controller.js");
    var router = require("express").Router();

    // Create a new User
    router.post("/", controller.create);

    // Retrieve all User
    router.get("/", controller.findAll);

    // Retrieve a single User with id
    router.get("/:id", controller.findOne);

    // Update a User with id
    router.patch("/:id", controller.update);

    // Update a User Account with id
    router.patch("/account/:id", controller.updateAccount);

    //router.post("/api/auth/signin", controller1.signin);

    // Create a new User
    router.post("/auth", controller.auth);

    app.use('/api/users', router);
  };