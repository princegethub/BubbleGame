var btm = document.querySelector("#pbtm");
var timer = 60;
var score = 0;
var hitrn = 0;
var wrong =0;

function increseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 171; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  btm.innerHTML = clutter;
}

function runTimer() {
  var timerId = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = `${timer}`;
    } else {
      btm.innerHTML = `<h1>Game Over</h1>
      
      `;
      clearInterval(timerId);
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

btm.addEventListener("click", (dets) => {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increseScore();
    makeBubble();
    getNewHit();
  }
 else{
    wrong++;
    alert("Worng Input")
  }
  if (wrong===3) {
    btm.innerHTML = `<h1>Game Over</h1> `;
  }
});
makeBubble();
runTimer();
getNewHit();
