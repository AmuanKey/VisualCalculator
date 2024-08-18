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
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case 'x':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
            break;
    }
}

let display = document.querySelector(".display");
let firstNum = "" ;
let secondNum ="";
let operator = "";

function go(){
    console.log("first number ",firstNum, firstNum.length);
    console.log("second number ",secondNum);
    console.log("operator ",operator);
}

console.log("chekcking firstnumber on the screen ",firstNum);
function appendNumber(number){
   console.log(firstNum);
    if (operator == "" ) {
        if(firstNum.length > 8){
             firstNum = firstNum.slice(0,8);
             updateDisplay(parseFloat(firstNum));
        }else{
            firstNum += number;
            updateDisplay(parseFloat(firstNum));
        }
        
       
        
         
     } else if(operator != "" && firstNum != ""){ {
        if(secondNum.length > 8){
            secondNum = secondNum.slice(0,8);
            updateDisplay(parseFloat(secondNum));
        }else{
            secondNum += number; 
            updateDisplay(parseFloat(secondNum));
        }
     
        
     }}
     

   }
    


function giveOperator(value){
    operator =value;
    run(value);
}
let result;

function run(equal){
    if(firstNum == "" || secondNum == ""){
        return;
    }else{
   let a = parseFloat(firstNum);
   let b = parseFloat(secondNum);
   console.log(a,operator,b);
   

result = operate(a,b,operator);
console.log("result "+result, result.toString().length);
let resultstring = result.toString();
if(resultstring.length > 8){
updateDisplay(resultstring.slice(0,8));
}else{
updateDisplay(resultstring);}


setback();
if ( equal!= "=") {
    operator = equal;
  }
}}





function setback(){
    operator ="";
    secondNum="";
    firstNum = "";
    
    firstNum+= result;

    result=0;
}

function updateDisplay(text){
display.innerText = text;

}

function test(){
    setback();
updateDisplay("");
}


