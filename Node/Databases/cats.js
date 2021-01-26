const mongoose = require('mongoose');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/cat_app");


let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

let george = new Cat({
  name: "Norris",
  age: 7,
  temperament: "Evil"
});

/*
george.save((err, cat)=>{
  if(err){
    console.log("Something went wrong");
  } else {
    console.log("Saved a cat to the db");
    console.log(cat);
  }
});
*/

Cat.create({
  name: "Snowball",
  age: 15,
  temperament: "Nice"
}, (err, cat) => {
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

Cat.find({}, (err, cats)=>{
  if(err){
    console.log("Error occured");
    console.log(err);
  } else {
    console.log("All the cats");
    cats.map((el) => {
      console.log(el.name);
    });
  }
});
