const express = require('express');
const port = 3000;

let app = express();

app.get("/", function( req, res ){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function( req, res ){
  let animal = req.params["animal"];
  if( animal === "pig") res.send("The pig says 'Oink'");
  else if( animal === "cow") res.send("The cow says 'Moo'");
  else if( animal === "dog") res.send("The dog says 'Woof Woof'");
  else res.send("This animal can't speak");
});

app.get("/repeat/:word/:times", function( req, res ){
  let word = req.params["word"];
  let times = Number(req.params["times"]);
  let retStr = "";
  for( let i = 0; i < times; i++ ){
    retStr += word;
    retStr += " ";
  }
  res.send(retStr);
});

app.get("*", function( req, res ){
  res.send("Sorry, page not found...");
});

app.listen( port, function(){
  console.log(`Server app listening on port: ${port}`);
});
