
// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {
      db.Burger.findAll({}).then(function(results) {
        var hbsObject = {
          burgers: results
        };
        res.render("index", hbsObject);
      });
    });
      
    app.post("/create", function(req, res) {
      db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function(results) {
        res.redirect("/");
      });
    });
        
    app.put("/:id", function(req, res) {
     
      db.Burger.update({
        devoured: req.body.devoured 
        }, {
          where: {
            id: req.params.id
          }
      }).then(function(results) {
        res.redirect("/");
      });
    });

};
