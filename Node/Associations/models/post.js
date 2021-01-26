const mongoose = require('mongoose');

//POST
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports =  mongoose.model("Post", postSchema );
