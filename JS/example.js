let btn = document.querySelector("button");
let isPurple = false;
btn.addEventListener( "click", () => {
  if( isPurple ){
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "purple";
  }
  isPurple = !isPurple;
});
