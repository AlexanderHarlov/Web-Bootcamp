const express = require('express');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/restful_blog_app");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

let Blog = mongoose.model( "Blog", blogSchema );

app.get("/", (req,res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find({}, (err, blogs) => {
    if( err ){
      console.log(err);
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

app.get("/blogs/new", (req, res) => {
  res.render("new");
});

app.post("/blogs", (req, res) => {
  console.log(req.body);
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log("=======================");
  console.log(req.body);
  Blog.create( req.body.blog, (err, newBlog) => {
    if(err){
      res.render("new");
    }
    else{
      res.redirect("/blogs");
    }
  });
});

app.get("/blogs/:id", (req, res)=>{
  Blog.findById( req.params.id, (err, foundBlog) => {
    if( err ){
      res.redirect("/blogs");
    } else {
      res.render("show", { blog: foundBlog } );
    }
  });
});

app.get("/blogs/:id/edit", (req, res) => {
  Blog.findById( req.params.id, (err, foundBlog) => {
    if( err ){
      res.redirect("/blogs");
    } else {
      res.render("edit", {blog: foundBlog });
    }
  })
});

app.put("/blogs/:id", (req, res) => {
  console.log(req.body);
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log("=======================");
  console.log(req.body);
  Blog.findByIdAndUpdate( req.params.id, req.body.blog, (err, updatedBlog) => {
    if( err ){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id );
    }
  });
});

app.delete("/blogs/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  });
});

app.listen( 3000, () => {
  console.log("RESTful BLOG SERVER STARTED");
});
