/*
    Practice 1
*/
const MIN_AGE = 18

document.getElementById("yourAge").onchange = function () {
    let age = Number(document.getElementById("yourAge").value);
    let msg = document.getElementById("yourMessage");
    msg.innerHTML = (age >= MIN_AGE ?
        "<H2>You are " + age + " years old, You may participate in the games of the National Lottery.</H2>" :
        "<H2>To participate in the games, you must be at least " + MIN_AGE + " years of age.</H2>");
    if( age > MIN_AGE )
        document.getElementById("myButton").style.display = "block";
}
document.getElementById("myButton").onclick = function() {
    let costs = [[2,4],[4,8],[6,12],[8,16],[10,18],[12,20]];
    let textResults = "";
    for( let x = 0; x < costs.length; x++ ) {
        textResults += "The cost for " + costs[x][0] + " is " + costs[x][1] + " Euros ("+
            (Math.round(costs[x][1]/costs[x][0]*100)/100).toFixed(2)+" Euro per).<br>";
    }
    document.getElementById("yourCosts").innerHTML = textResults;
}

/*
    Practice 2
*/
function calcYear() {
    let bYear = Number(document.getElementById("birthYear").value);
    let cYear = Number(document.getElementById("currentYear").value);
    let years;
    let result = "Invalid Data provided";

    if (document.getElementById("birthYear").value.trim() == "") return;

    if (typeof bYear != 'number' || typeof cYear != 'number' || isNaN(bYear) || isNaN(cYear))
        return;

    years = cYear - bYear;

    if (years < 0)
        result = "You've not been born yet.";
    else if (years >= 18)
        result = "From now on, you can decide everything within legal limits.";
    else result = "Luckily, your parents take care of everything for you.";

    document.getElementById("yourSecondMessage").innerHTML = "<h2>" + result + "</h2>";

}

document.getElementById("birthYear").onchange = calcYear;
document.getElementById("currentYear").onchange = calcYear;

/*
    Practice 3
*/
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