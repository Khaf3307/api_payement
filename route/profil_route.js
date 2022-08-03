module.exports = app => {
    const controller = require("../controller/profil_controller.js");
    var router = require("express").Router();

    // Create a new User
    router.post("/", controller.create);

    // Retrieve all User
    router.get("/", controller.findAll);

    // Retrieve a single User with id
    router.get("/:id", controller.findOne);

    // Update a User with id
    router.patch("/:id", controller.update);

    app.use('/api/profils', router);
  };