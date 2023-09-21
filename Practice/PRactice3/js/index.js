let currentPage = "";

function showPage( pageToShow ) {
    if( currentPage === pageToShow ) {
        document.getElementById( pageToShow ).style.display = "none";
        currentPage = "";
    } else {
        if( currentPage !== "" )
            document.getElementById( currentPage ).style.display = "none";
        document.getElementById( pageToShow ).style.display = "block";
        currentPage = pageToShow;
    }
}

Array.from(document.getElementsByClassName( "toggleView" )).map( x => { x.style.display = "none"; } );
Array.from(document.getElementsByClassName( "Label" )).map( x => {
    x.onclick = function () { showPage(x.id.slice(-2)); }
});

let arrayList = [];
for( let x = 0; x < 20; x++ ) {
    arrayList.push( [Math.floor(Math.random()*100),Math.floor(Math.random()*100)] );
}
arrayList.map( x => x.push( x[0] + x[1] ) );
document.getElementById("01").innerHTML = arrayList
    .sort( (a,b) => a[2] - b[2] )
    .map( x => `${x[0]} + ${x[1]} = ${x[2]}<br>`)
    .join("");

function addAppend() {
    return `Guess #${guesses + 1} (${GGLow + 1} to ${GGHigh - 1})`;
}

const highNum = 100;
const lowNum = 0;

const myGGNumber = Math.floor(Math.random()*highNum)+lowNum+1;
const message = document.getElementById("02");
let GGLow = lowNum; let GGHigh = highNum+1; let guesses = 0;
let ggLabel = `${addAppend()}`;

document.getElementById("guessingGame").onclick = function() {
    let guess;
    while( guess = Number( prompt(ggLabel) ) ) {
        guesses++;
        if (isNaN(guess)) {
            ggLabel = `Guess wasted on a non number.  Try again.\nGuess #${addAppend()}`;
            continue;
        }
        if( GGLow === GGHigh ) { console.log( `ERROR: ${myGGNumber}` ); break; }
        if (guess <= GGLow || guess >= GGHigh) {
            ggLabel = `Guess outside of parameters of ${GGLow} and ${GGHigh}\n${addAppend()}`;
            continue;
        }
        if( guess < myGGNumber ) {
            GGLow = guess;
            ggLabel = `My number is higher than that.  Try again.\n${addAppend()}`;
        } else if( guess > myGGNumber ) {
            GGHigh = guess;
            ggLabel = `My number is lower than that.  Try again.\n${addAppend()}`;
        } else break;
    }
    if (guess === myGGNumber) {
        let box = document.createElement("div");
        box.innerHTML += `Success! My number was ${myGGNumber}! It took you ${guesses} guesses to figure out.`;
        message.appendChild(box);
    } else {
        let box = document.createElement("div");
        box.innerHTML += "You cancelled the game.";
        message.appendChild(box);
    }
}

let lowCase = [];
let uppCase = [];
for( let x = "A".charCodeAt(0); x <= "Z".charCodeAt(0); x++ ) {
    lowCase.push( String.fromCharCode(x) );
    uppCase.push( String.fromCharCode(x+32) );
}
document.getElementById("03").style.fontFamily = "Courier, monospace";
document.getElementById("03").innerHTML += `LowerCase: ${lowCase.join(", ")}<br>UpperCase: ${uppCase.join(", ")}.<br>`;

let rndmNumsOne = [];
let rndmNumsTwo = [];

for( let x = 0; x < 10; x++ ) {
    rndmNumsOne.push( Math.floor(Math.random()*10) );
    rndmNumsTwo.push( Math.floor(Math.random()*10) );
}
let evenNums = rndmNumsOne.concat(rndmNumsTwo).filter( x => 0 === x%2 );
let oddNums = rndmNumsOne.concat(rndmNumsTwo).filter( x => 1 === x%2 );
let sum = 0;

oddNums.forEach( x => sum += x );

document.getElementById("04").innerHTML += `Even Numbers: ${evenNums.join( ", " )}
    <br>Sum of Odd Numbers (${oddNums.join(", ")}): ${sum}.<br>`;

var listOfNames = ["David", "Natanael", "Ellen", "Emeline", "Olivier", "Anik",
    "Benjamin", "Marceline", "Robbe", "Ruben", "Wendy", "Pravid", "Tom" ];
document.getElementById("05").innerHTML += listOfNames.sort().join( "<br>");

function armstrong( x ) {
    let word = x.toString().split('');
    let width = word.length;
    let sum = 0;

    for( let y = 0; y < width; y++ ) {
        sum += Math.pow(Number( word[y] ),width);
    }
    if( sum === x ) return true; return false;
}

let armstrongNumbers = [];
for( let x = 0; x < 1000000; x++ )
    if( armstrong(x) ) armstrongNumbers.push(x);
document.getElementById("06").innerHTML += armstrongNumbers.join(", ") + "<br>";