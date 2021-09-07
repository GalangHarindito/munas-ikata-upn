module.exports = app => {
    const dpt = require("../controllers/dpt.controller.js");
  
    var router = require("express").Router();
  
    // Create a new dpt
    router.post("/", dpt.create);
  
    // Retrieve all dpt
    router.get("/", dpt.findAll);

    // Retrieve all voted dpt
    router.get("/voted", dpt.findAllVoted);

    // Update a dpt with id
    router.put("/:id", dpt.update);

    // Delete a dpt with id
    router.delete("/:id", dpt.delete);
  
    app.use('/api/dpt', router);
};