function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function devide(a,b){
    return a/b;
}







function operate(a,b,operator){
    switch (operator) {
        case '+':
            add(a,b)
            break;
        case '-':
            subtract(a,b)
            break;
        case '*':
            multiply(a,b)
            break;
        case '/':
            devide(a,b)
            break;
        default:
            break;
    }
}

let buttons = document.querySelectorAll(".btn");
let btnarr = [...buttons];
let display = document.querySelector(".display");
let nums = btnarr.slice(6);

let clickNum = "not changed";
let operator = "";
btnarr.map((num)=>{
   num.addEventListener("click",(e)=>{
    let value = e.target.value;
    if (value == "+" || value == "-" || value == "x" || value == "/" ) {
        giveOperator(value);
    }
    else if(value == "="){
        return;
    }
    else {
        appendNumber(value);
        updateDisplay();
    }
     
       
   });

});

function giveOperator(value){
operator += value;

}
console.log(operator);
function appendNumber(number){
clickNum += number;

firstNumber = clickNum;

}
console.log(clickNum);
function calculate(){
   
}

function updateDisplay(){
    display.innerText = clickNum;
}


let test = 12;
let testbtn= document.querySelector("#test");
function  paound(){
    test += 12;
   
}
console.log(test);
testbtn.addEventListener("click",paound);




