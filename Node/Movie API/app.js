const express = require('express');
const request = require('request');


let app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
})

app.get("/results", (req, res) => {
  let searchQuery = req.query.searchQuery;
  request(`http://www.omdbapi.com/?s=${searchQuery}&apikey=thewdb`, ( err, resp, body ) => {
      if( !err && res.statusCode == 200 ){
        let data = JSON.parse(body);
        res.render("results", {data: data});
      }
  })
});

app.listen( 3000, function(){
  console.log(`Server app listening on port 3000`);
});
