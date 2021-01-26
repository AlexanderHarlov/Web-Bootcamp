const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

//POST
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});

let Post = new mongoose.model("Post", postSchema );

//USER - email, name
let userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

let User = mongoose.model("User", userSchema );

// let newUser = new User({
//   email: "ivan@ivanov.edu",
//   name: "Ivan Ivanov"
// });
//
// newUser.posts.push({
//   title: "Rakiq", content: "Kak se vari rakiq"
// });
//
// newUser.save((err, user) => {
//   if( err ){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// let newPost = new Post({
//   title: "Reflections on apples",
//   content: "They are delicious"
// });
//
// newPost.save((err, post) => {
//   if( err ){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Ivan Ivanov"}, (err,user) => {
  if(err){
    console.log(err);
  } else {
    user.posts.push({ title: "Vino", content: "Kak se pravi vino"});  //local
    user.save( (err, user) => {   //database
      if(err){
        console.log(err);
      }else{
        console.log(user);
      }
    });
  }
});
