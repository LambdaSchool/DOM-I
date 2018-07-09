let digits = document.querySelectorAll(".digits .digit");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
// let msTensCount = 0;
// let msHundredsCount = 0;
// let onesCount = 0;
// let tensCount = 0;
msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
ones.innerHTML = 0;
tens.innerHTML = 0;
let body = document.querySelector("body");
let startBtn = document.createElement('button');
startBtn.appendChild(document.createTextNode("Start"));
body.appendChild(startBtn);
let resetBtn = document.createElement('button');
resetBtn.appendChild(document.createTextNode("Reset"));
body.appendChild(resetBtn);


startBtn.addEventListener("click", timer);

resetBtn.addEventListener("click", function () {
  // msTensCount = 0;
  // msHundredsCount = 0;
  // onesCount = 0;
  // tensCount = 0;
  digits.forEach(function(digit) {
    digit.style.color = "black";
  })
  msTens.innerHTML = 0;
  msHundreds.innerHTML = 0;
  ones.innerHTML = 0;
  tens.innerHTML = 0;
});

function increment() {
  if (Number(tens.innerHTML) === 1) {
    clearInterval(timer);
    digits.forEach(function(digit) {
      digit.style.color = "red";  
    })
    startBtn.disabled = false;
    
  } else {
    console.log(Number(msTens.innerHTML));
    if (Number(msTens.innerHTML) <= 8) {
      msTens.innerHTML = Number(msTens.innerHTML) + 1;
    } else if (Number(msHundreds.innerHTML) <= 8) {
      msTens.innerHTML = 0;
      msHundreds.innerHTML = Number(msHundreds.innerHTML) + 1;
    } else if (Number(ones.innerHTML) <= 8) {
      msHundreds.innerHTML = 0;
      ones.innerHTML = Number(ones.innerHTML) + 1;
    } else {
      msTens.innerHTML = 0;
      msHundreds.innerHTML = 0;
      ones.innerHTML = 0;
      tens.innerHTML = 1;
    }

    // msTens.innerHTML = msTensCount;
    // msHundreds.innerHTML = msHundredsCount;
    // ones.innerHTML = onesCount;
    // tens.innerHTML = tensCount;
  }
};

function timer() {
  startBtn.disabled = true;
  setInterval(increment, 10);
} 
