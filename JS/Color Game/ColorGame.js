let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for( let i = 0; i < modeBtns.length; i++ ){
    modeBtns[i].addEventListener('click', function(){
      for( let i = 0; i < modeBtns.length; i++ )
        this.classList.remove("selected");

      this.classList.add("selected");
      numSquares = (this.textContent === "Easy")?3:6;
      reset();
    });
  }
}

function setupSquares(){
  for( let i = 0; i < squares.length; i++ ){
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if( clickedColor === pickedColor ){
        messageDisplay.textContent = "Correct!";
        resetBtn.textContent = "Play again?";
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  heading.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";

  for( let i = 0; i < squares.length; i++ ){
    if( colors[i] ){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
}

resetBtn.addEventListener('click', function() {
  reset();
});

function changeColors( color ){
  for( let i = 0; i < squares.length; i++ ){
    squares[i].style.backgroundColor = color;
  }
  let heading = document.querySelector("#heading");
  heading.style.backgroundColor = color;
}

function pickColor() {
  let idx = Math.floor( Math.random() * colors.length );
  return colors[idx];
}

function generateRandomColors( count ){
  let arr = [];
  for( let i = 0; i < count; i++ ){
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  let r = Math.floor( Math.random() * 256 );
  let g = Math.floor( Math.random() * 256 );
  let b = Math.floor( Math.random() * 256 );

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
