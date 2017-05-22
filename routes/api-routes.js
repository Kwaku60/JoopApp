
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
   

    res.json("/members");
  });

  
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      randomVal: req.body.randomVal
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

 
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });




  app.get("/api/user_data", function(req, res) {
    if (!req.user) {

      res.json({});
    }
    else {

     
      res.json({
        email: req.user.email,
        id: req.user.id});
    }
  });





//grab Next Seeing posts
app.get("/api/next/:id", function(req, res) {

   
    db.NextSee.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbNextSee) {
      res.json(dbNextSee);

    });

  });





//grab Last Seen posts
app.get("/api/last/:id", function(req, res) {

   
    db.LastSee.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbLastSee) {
      res.json(dbLastSee);

    });

  });

app.post("/api/next", function(req, res) {
    db.NextSee.create(req.body).then(function(dbNextSee) {
      res.json(dbNextSee);
    });
  });


app.post("/api/last", function(req, res) {
    db.LastSee.create(req.body).then(function(dbNextSee) {
      res.json(dbNextSee);
    });
  });



};
