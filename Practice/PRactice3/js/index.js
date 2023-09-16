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
document.getElementById("01").innerHTML = arrayList.map( x => `${x[0]} + ${x[1]} = ${x[2]}<br>`).join("");

const myGGNumber = Math.floor(Math.random()*100)+1;
let GGLow = 0; let GGHigh = 101; let guesses = 0;

document.getElementById("guessingGame").onclick = function() {
    let guess = 0;
    const message = document.getElementById("02");
    while( guess = Number( prompt(`Guess #${guesses+1} (${GGLow+1} to ${GGHigh-1})`) ) ) {
        guesses++;
        console.log( guess );
        if (isNaN(guess) || typeof guess != 'number') {
            console.log( "Bad Number" );
            message.innerHTML += "<br>Guess wasted on a num number.  Try again.<br>";
            continue;
        }
        if( GGLow === GGHigh ) { console.log( `ERROR: ${myGGNumber}`); break; }
        if (guess <= GGLow || guess >= GGHigh) {
            console.log( "Outside of High/Low" );
            message.innerHTML += `Guess outside of parameters of ${GGLow} and ${GGHigh}`;
            continue;
        }
        if( guess < myGGNumber ) {
            console.log( "Guess is too low." );
            GGLow = guess;
            message.innerHTML += '<br>My number is higher than that.  Try again.<br>';
            document.getElementById( "ggLow" ).innerHTML = `${guess}`;
        } else if( guess > myGGNumber ) {
            console.log( "Guess is too high" );
            GGHigh = guess;
            message.innerHTML += '<br>My number is lower than that.  Try again.<br>';
            document.getElementById( "ggHigh" ).innerHTML = `${guess}`;
        } else break;
    }
    if (guess === myGGNumber) {
        message.innerHTML = `Success! My number was ${myGGNumber}! It took you ${guesses} guesses to figure out.`;
    } else {
        message.innerHTML = "You cancelled the game.";
    }
}