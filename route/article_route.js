module.exports = app => {
    const controller = require("../controller/article_controller.js");
    //const controller1 = require("../controller/auth_controller.js");
    var router = require("express").Router();

    // Create a new Article
    //router.post("/", controller.create);

    // Create a new Article
    router.post("/:id", controller.create);

    // Retrieve all User
    router.get("/", controller.findAll);

    // Retrieve a single Article with id
    router.get("/:id", controller.findOne);

    // Update a Article with id
    router.patch("/:id", controller.update);

    app.use('/api/articles', router);
  };