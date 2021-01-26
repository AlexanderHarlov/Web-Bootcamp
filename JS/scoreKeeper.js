let p1Btn = document.querySelector("#p1");
let p2Btn = document.querySelector("#p2");
let resetBtn = document.querySelector("#reset");
let p1ScoreLbl = document.querySelector("#p1Score");
let p2ScoreLbl = document.querySelector("#p2Score");
let maxScoreLbl = document.querySelector("#maxScore");
let maxScoreSelector = document.querySelector("#maxScoreSelector");

let p1Score = 0;
let p2Score = 0;
let maxScore = 5;
let finished = false;

p1ScoreLbl.textContent = p1Score;
p2ScoreLbl.textContent = p2Score;
maxScoreLbl.textContent = maxScore;

maxScoreSelector.addEventListener("change", (ev) => {
  maxScore = Number(ev.target.value);
  maxScoreLbl.textContent = maxScore;
  reset();
});

p1Btn.addEventListener('click', ev => {
  if( finished )
    return;

  p1Score++;
  p1ScoreLbl.textContent = p1Score;

  if( p1Score === maxScore ){
    p1ScoreLbl.style.color = "green";
    finished = true;
  }
});

p2Btn.addEventListener('click', ev => {
  if( finished )
    return;

  p2Score++;
  p2ScoreLbl.textContent = p2Score;

  if( p2Score === maxScore ){
    p2ScoreLbl.style.color = "green";
    finished = true;
  }
});

function reset() {
  p1Score = p2Score = 0;
  p1ScoreLbl.textContent = p1Score;
  p2ScoreLbl.textContent = p2Score;

  p1ScoreLbl.style.color = "black";
  p2ScoreLbl.style.color = "black";

  finished = false;
}

resetBtn.addEventListener( "click", (ev) => {
  reset();
});
