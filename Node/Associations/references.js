const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_two");

const Post = require("./models/post");
const User = require('./models/user');


// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Brown"
// });

// Post.create({
//   title: "How to cook a pizza",
//   content: "Pizzaaaaa"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//       if( err ){
//         console.log(err);
//       } else {
//           foundUser.posts.push(post);
//           foundUser.save( (err, data ) => {
//             if(err){
//               console.log(err);
//             } else {
//               console.log(data);
//             }
//           });
//       }
//     });
// });

User.findOne( {email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
});
