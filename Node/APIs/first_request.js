//let request = require("request");
let rp = require("request-promise");

rp("http://jsonplaceholder.typicode.com/users/1")
  .then( (body) => {
    let parsedData = JSON.parse(body);
    console.log(`${parsedData["name"]} lives in ${parsedData["address"]["city"]}`);
  })
  .catch( (error) => {
    console.log("Error! ", error );
  });
