
var friendData = require("../data/friends");


module.exports = function(app) {
// Routes
// =============================================================

  // Displays all tables
  app.get("/api/friends", function(req, res) {
    
    return res.json(friendData);

  });
  
  
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var userData = req.body;
  
   
    // newReservation.routeName = newReservation.reserve-name.replace(/\s+/g, "").toLowerCase();
  
    console.log(userData);


        friendData.push(userData);
  
        res.json(true);

    
  });
}
