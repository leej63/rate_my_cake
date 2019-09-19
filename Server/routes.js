const controller = require('./controller')

module.exports = function(app){
    app.get("/api/cakes", controller.all_cakes)
    app.post("/api/cakes", controller.create_cake)
    app.get("/api/cakes/:id", controller.one_cake)
    app.put("/api/cakes/:id", controller.update_cake)                   // Do not need a separate one for creating review. Can use this route for adding a review.
    app.delete("/api/cakes/:id", controller.delete_cake)                // Do not really need delete for this assignment
    // app.put("/api/cakes/review/:id", controller.create_review)
}

// patch = put, both will work