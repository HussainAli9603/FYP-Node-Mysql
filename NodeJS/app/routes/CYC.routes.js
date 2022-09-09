module.exports = (app) => {
  const user = require("../controllers/User.controllers");
  const track = require("../controllers/Track.controllers");
  const badge = require("../controllers/badges.controllers");
  const playground = require("../controllers/playgrounds.controllers");
  const ResetPassword = require("../controllers/Reset.controllers");
  const Login = require("../controllers/Login.controllers")

  var router = require("express").Router();


  //// User Routes (JunHao) /////

  //Search role
  router.get("/users", user.searchfindAll);

  // Retrieve tracks with id
  router.get("/tracks/:id", track.trackfindOne);

  // Update a user with id
  router.put("/users/:id", user.update);

  // Retrieve a single user with id
  router.get("/users/:id", user.findOne);

  // Delete a user with id
  router.delete("/users/:id", user.delete);

  // Send Email under that user ID
  router.post("/users/mail/:id", user.sendMail);

  // Create users
  router.post("/users", user.AddUser);

  //// Badges (Wei Chun) ////
   
  //Search badge name
  router.get("/badges", badge.searchBadgeName);

  // Check Users
  router.get("/Login/search/:username/:password", Login.checkUsers);

  // Retrieve Badge with id
  router.get("/badges/:id", badge.findBadge);

  // Update badges
  router.put("/badges/:id", badge.update);

  // badges_router.get("/index/:id", find);

  // badges_router.get("/search/:searchTerm", search);

  // badges_router.put("/index/:id", editBadge);

  // Create Badge
  router.post("/badges", badge.AddBadge);


  //// Playground routes (JunYi) /////

  // Find all playground
  router.get("/playgrounds", playground.findAllPlaygrounds);

  // Find playground by single ID
  router.get("/playgrounds/:id", playground.findPlaygrounds);

  // Search playground
  router.get("/playgrounds/search/:searchTerm", playground.searchPlayground);

  // Update playground
  router.put("/playgrounds/:id", playground.updatePlayground);

  // Delete playground
  router.delete("/playgrounds/:id", playground.deletePlayground);

  // Create playground
  router.post("/playgrounds", playground.createPlayground);

  // Search username
  router.get("/username/search/:searchTerm", ResetPassword.searchusername); 

  // update password
  router.put("/username/search/:searchTerm", ResetPassword.update);






  app.use("/api", router);
};
