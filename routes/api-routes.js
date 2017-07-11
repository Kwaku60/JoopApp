
var db = require("../models");
var passport = require("../config/passport");


//delete shortcut



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

//grab friend names
app.get("/api/friends/:id", function(req, res) {

   
    db.FriendNames.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbFriendNames) {
      res.json(dbFriendNames);

    });

  });


app.get("/api/friendsQuick/:id", function(req, res) {

   
    db.FriendNames.findAll({
      where: {
        userEmail: req.params.id
      },
      order: [ [ 'updateId', 'ASC' ]],
      include: [db.User]
    }).then(function(dbFriendNames) {
      res.json(dbFriendNames);

    });

  });


app.post("/api/profilePhoto", function(req,res){

console.log(req.body);

    db.FriendProfileImages.create(

    { image: req.body.image,
      userEmail: req.body.userEmail,
      updateId: req.body.updateId

    } 

).then(function(FriendProfileImages) {
      res.json(FriendProfileImages);
    });


})



app.get("/api/profilePhoto/:id", function(req,res){


db.FriendProfileImages.findAll({

where: {

  userEmail: req.params.id
},

}).then(function(dbFriendNProfileImages) {
      res.json(dbFriendNProfileImages);

    });


})



app.get("/api/profileText/:id/:updateId", function(req,res){

   
    db.LastSees.findAll({
      where: {
        userEmail: req.params.id,
        updateId: req.params.updateId
      },
      include: [db.User]
    }).then(function(dbLastSees) {
      res.json(dbLastSees);

    });



})






//grab Next Seeing posts
app.get("/api/next/:id", function(req, res) {

   
    db.NextSees.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbNextSees) {
      res.json(dbNextSees);

    });

  });




//grab Last See posts
app.get("/api/last/:id", function(req, res) {

   
    db.LastSees.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbLastSees) {
      res.json(dbLastSees);

    });

  });

//delete any previous instance
app.delete("/api/friendsClear/:param1/:param2", function(req,res){

db.FriendNames.destroy({
    where: {
          userEmail: req.params.param1,
        updateId: req.params.param2
    }
})


})

//create a name
app.post("/api/friends", function(req, res) {
    db.FriendNames.create(req.body).then(function(dbFriendNames) {
      res.json(dbFriendNames);
    });
  });



//create next see post
app.post("/api/next", function(req, res) {
    db.NextSees.create(req.body).then(function(dbNextSee) {
      res.json(dbNextSees);
    });
  });


//create last see post
app.post("/api/last", function(req, res) {
    db.LastSees.create(req.body).then(function(dbLastSees) {
      res.json(dbLastSees);
    });
  });


//grab relevant plans from next see 

app.get("/api/schedule/:userEmail/:IdValue", function(req, res) {

   
    db.NextSees.findAll({
      where: {
        userEmail: req.params.userEmail,
        updateId: req.params.IdValue
      },
      order:[ ['createdAt', 'DESC'] ],      
    }).then(function(dbNextSees) {
      res.json(dbNextSees);


    });

  });


//deleteMemories
//delete any previous instance
app.delete("/api/deleteMemory/", function(req,res){

db.LastSees.destroy({
    where: {
          userEmail: req.body.user,
          body: req.body.body
    }
})


})







};
