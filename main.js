'use strict'

// add listeners

for(let i=0; i<10; i++){
    let element = document.getElementById("number"+i);
    element.addEventListener('click',(e) => display(i));
}

document.getElementById("operator+").addEventListener("click",(e) => setOperator("+"));
document.getElementById("operator-").addEventListener("click",(e) => setOperator("-"));
document.getElementById("operator*").addEventListener("click",(e) => setOperator("*"));
document.getElementById("operator/").addEventListener("click",(e) => setOperator("/"));

document.getElementById("total").addEventListener("click",(e) => solve());
document.getElementById("reset").addEventListener("click",(e) => resetStatus());

//----------------


let firstNumber = 0;
let secondNumber = undefined;
let wasSolved = false;
let operator = '';

function display(val) {
    
    document.getElementById('result').innerHTML += val;

    let n = Number(document.getElementById('result').innerHTML);

    document.getElementById('result').innerHTML = n;
}

function solve() {
    
    if(secondNumber == undefined) {
       secondNumber = Number(document.getElementById('result').innerHTML);
    } else {
       firstNumber = Number(document.getElementById('result').innerHTML);
    }
    
    if (operator == "/" && secondNumber == 0){
        document.getElementById('result').innerHTML = "ERROR";
    } else {
        let result = eval(firstNumber + operator + secondNumber);

        document.getElementById('result').innerHTML = result;
        wasSolved = true;
    }
}

function clearScreen() {
    const result = document.getElementById('result');
    result.innerHTML = 0;
}

function setOperator(op) {
    
    if(operator !="" && ! wasSolved) {
        secondNumber = Number(document.getElementById('result').innerHTML);
        let result = eval(firstNumber + operator + secondNumber);
        document.getElementById('result').innerHTML = result;
    } 

    operator = op;
    firstNumber = Number(document.getElementById('result').innerHTML);
    secondNumber = undefined;
    wasSolved=false;

    clearScreen();
}

function resetStatus() {

    clearScreen();
    operator = 0;
    firstNumber = 0;
    secondNumber = undefined;
    wasSolved = false;
}