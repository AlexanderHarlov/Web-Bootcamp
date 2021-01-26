const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = [ "Ivan", "Stoqn", "Dragan", "Petkan" ];

app.get("/", function( req, res ){
  res.render("home");
});

app.get("/friends", function( req, res ){

  res.render("friends", { friends: friends });
});

app.post("/addfriend", function( req, res ){
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
})

app.listen( port, function(){
  console.log(`Server app listening on port: ${port}`);
});
