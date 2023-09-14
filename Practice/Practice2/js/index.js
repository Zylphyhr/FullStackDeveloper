let practice01 = document.getElementById("1.1.howMany");

practice01.onchange = function() {
    let x = Number( practice01.value );
    let sum = 0;

    if( typeof x != 'number' || isNaN( x ) ) { alert(x); return; }

    for( let y = 0; y < x; y++ ) {
        sum += Number( prompt( "Enter a number: " ) );
    }
    document.getElementById("1").innerHTML += `<p>The total sum of the ${x} numbers is: ${sum}`;
}

let practice02 = document.getElementById("2");
for( let x = 0; x <= 5; x++ ) {
    for( let y = 0; y < x; y++ )
        practice02.innerHTML += "*";
    practice02.innerHTML += "<br>";
}

let practice03= document.getElementById("3");
for( let x = 0; x <= 5; x++ ) {
    for( let y = 0; y < x; y++ )
        practice03.innerHTML += "*";
    practice03.innerHTML += "<br>";
}
for( let x = 5; x >= 0; x-- ) {
    for (let y = 0; y < x; y++)
        practice03.innerHTML += "*";
    practice03.innerHTML += "<br>";
}

let practice04 = document.getElementById("4");
document.getElementById("factor").onchange = function() {
    let x = Number( document.getElementById("factor").value );
    let sum;
    if( typeof x != 'number' || isNaN( x ) ) { return; }
    sum = x;
    for( y = sum-1; y > 0; y-- ) sum *= y;
    practice04.innerHTML += `<p>The factor of those numbers is: ${sum}`;
}

let practice05 = document.getElementById("5");
let collection = new Array();
for( let x = 1; x < 100; x++ ) collection.push( x < 10 ? "0"+x : x );
practice05.innerHTML = collection.join(", ");

let practice06 = document.getElementById("6");
function searchString( myString, myChar ) {
    let myCount = 0;
    for( const x of myString ) if( myChar === x ) myCount++
    return myCount;
}

function practice6() {
    let myString = document.getElementById("6string").value;
    let myChar = document.getElementById("6char").value;

    if( myString === "" || myChar === "" || myChar.length > 1 ) return;

    practice06.innerHTML += `<br>&quot;${myString}&quot; has ${searchString( myString, myChar )} occurences of the letter ${myChar}<br>`;
}

document.getElementById("6char").onchange = practice6;
document.getElementById("6string").onchange = practice6;

let practice07 = document.getElementById("7");
document.getElementById("7increm").onchange = function() {
    let collection = new Array();
    let max = Number( document.getElementById("7increm").value );

    if( typeof max != 'number' || isNaN(max) ) return;
    for (let x = 1; x <= max; x++) collection.push(x);
    practice07.innerHTML += "<br>" + collection.join(", ");
}

let practice08 = document.getElementById("8");
document.getElementById("8expon").onchange = function() {
    let collection = new Array();
    let max = Number( document.getElementById("8expon").value );

    if( typeof max != 'number' || isNaN(max) ) return;
    for (let x = 1; x <= max; x *= 2) collection.push(x);
    practice08.innerHTML += "<br>" + collection.join(", ");
}

let practice09 = document.getElementById("9");
document.getElementById("9prime").onchange = function() {
    let collection = new Array();
    let max = Number( document.getElementById("9prime").value );

    if( typeof max != 'number' || isNaN(max) || max < 1 ) return;

    collection.push(1);
    if( max >= 2 ) collection.push(2);

    for (let x = 3; x <= max; x++ ) {
        let isPrime = true;
        for (let y = 2; y <= x/2; y++)
            if (x % y === 0) { isPrime = false; break; }
        if( isPrime ) collection.push(x);
    }
    practice09.innerHTML += "<br>" + collection.join(", ");
}

let practice10 = document.getElementById("10");
function createTable() {
    let min = Number( document.getElementById("10low").value );
    let max = Number( document.getElementById("10high").value );
    let results = "";

    if( typeof max != 'number' || typeof min != 'number' ||
        isNaN( min ) || isNaN( max ) || max <= min || min < 1 ) return;

    practice10.innerHTML += "<p>";
    for( let x = min; x <= max; x++ ) {
        for (let y = min; y <= max; y++)
            practice10.innerHTML += `${x} x ${y}  = ${x*y}, `;
        practice10.innerHTML += "<br>";
    }
}

document.getElementById("10low").onchange = createTable;
document.getElementById("10high").onchange = createTable;

document.getElementById("forLoop").onchange = function () {
    let total = 0;
    let numbers = new Array();
    let loop = Number(document.getElementById("forLoop").value);
    let msg = document.getElementById("yourThirdMessage");

    if (typeof loop != 'number' || isNaN(loop)) return;
    for (let x = 0; x < loop; x++) {
        var num = Number(prompt("Enter a number:"));
        numbers.push(num);
        total += num;
    }
    msg.innerHTML = "<h2>Total of " + numbers.join(" + ") + " = " + total + "</h2>";
}

let practice12 = document.getElementById("12");
function denominator() {
    let one = Number(document.getElementById("12one").value);
    let two = Number(document.getElementById("12two").value);
    let denom = 1;
    if (typeof one != 'number' || typeof two != 'number' ||
        isNaN(one) || isNaN(two) || two < 1 || one < 1) return;

    for( let x = 0; x < ( one < two ? one : two ); x++ )
        if( 0 === one%x && 0 === two%x ) denom = x;

    practice12.innerHTML = "<br>The greatest common denominator of " + one +
        " and " + two + " is: " + denom;
}

document.getElementById("12one").onchange = denominator;
document.getElementById("12two").onchange = denominator;

let practice13 = document.getElementById("13");
function denominator() {
    let one = Number(document.getElementById("13one").value);
    let two = Number(document.getElementById("13two").value);

    if (typeof one != 'number' || typeof two != 'number' ||
        isNaN(one) || isNaN(two) || two < 1 || one < 1) return;

    let mult = one * two;
    let lesser = one > two ? two : one;
    let greater = one < two ? two : one;

    for( let x = greater; x < lesser * greater; x+=greater ) {
        if (0 === x%lesser) {
            mult = x;
            break;
        }
    }
    practice13.innerHTML += "<br>The lowest common multiple of " + one +
        " and " + two + " is: " + mult;
}

document.getElementById("13one").onchange = denominator;
document.getElementById("13two").onchange = denominator;