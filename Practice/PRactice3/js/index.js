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