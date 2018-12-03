
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let semicolon = document.querySelector("#colon");
let button = document.querySelector("button");

msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

let timer;

function start() {
    timer = setInterval(msTen, 10);
    button.disabled = "disabled";
}

function restart() {
    clearInterval(timer);
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    msTens.classList.remove("redDigit");
    msHundreds.classList.remove("redDigit");
    secondOnes.classList.remove("redDigit");
    secondTens.classList.remove("redDigit");
    colon.classList.remove("redDigit");
    button.disabled = false;
    
}

function secTens() {
    if (secondTens.textContent === "0") {
        secondTens.textContent = 1;
        msTens.classList.add("redDigit");
        msHundreds.classList.add("redDigit");
        secondOnes.classList.add("redDigit");
        secondTens.classList.add("redDigit");
        colon.classList.add("redDigit");
        clearInterval(timer);
    } 
    else{
        secondTens.textContent = parseInt(secondTens.textContent) + 1;
    }
}

function secOnes() {
    if (secondOnes.textContent === "9") {
        secondOnes.textContent = 0;
        secTens();
    }
    else{
        secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
    }
}

function msHund() {
    if (msHundreds.textContent === "6") {
        msHundreds.textContent = 0;
        secOnes();
    }
    else{
        msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
    }
}

function msTen() {
    if (msTens.textContent === "9") {
        msTens.textContent = 0;
        msHund();
    }
    else{
        msTens.textContent = parseInt(msTens.textContent) + 1;
    }
}


