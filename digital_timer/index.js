
// variables for the timer

let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

secondTens.innerHTML = "0";
secondOnes.innerHTML = "0";
msHundreds.innerHTML = "0";
msTens.innerHTML = "0";

let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;

//body selector 
let body = document.querySelector("body");
let isBlue = false;

function myTimer () {
    if (msTens.innerHTML !== '9') {
        msTensCounter++;
        msTens.innerHTML = msTensCounter.toString();    
    } else {
        msTensCounter = 0;
        msTens.innerHTML = '0';

        if (msHundreds.innerHTML !== '9') {
            msHundredsCounter++;
            msHundreds.innerHTML = msHundredsCounter.toString();
        } else {
            msHundredsCounter = 0;
            msHundreds.innerHTML = '0';

            if (secondOnes.innerHTML !== '9') {
                secondOnesCounter++
                secondOnes.innerHTML = secondOnesCounter.toString();
            } else {
                secondOnesCounter = 0;
                secondOnes.innerHTML = '0';

                if (secondTens.innerHTML !== '1') {
                    secondTensCounter++;
                    secondTens.innerHTML = secondTensCounter.toString();
                } clearInterval(timer);
                document.getElementById("secondTens").classList.add("redDigit");
                document.getElementById("secondOnes").classList.add("redDigit");
                document.getElementById("msHundreds").classList.add("redDigit");
                document.getElementById("msTens").classList.add("redDigit");
                document.getElementById("colon").classList.add("redDigit");
                clearInterval(timer2);
                body.style.background = "#3498db";
            } 
        } 
    } 
    
} 
function colorChange() {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
    document.querySelector("body")
}   
let timer = (setInterval(function () { myTimer() }, 10));
let timer2 = (setInterval(function () { colorChange() }, 1000 ));
 



// clearInterval(timer);
//document.getElementsByClassName("digit").classList.toggleClass("redDigit")
