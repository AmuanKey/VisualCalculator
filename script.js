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


let firstNum = "" ;
let secondNum ="";
let operator = "";



console.log("chekcking firstnumber on the screen ",firstNum);
function appendNumber(number){

 
  
   
    if (operator == "" ) {
        
        firstNum += number;
        
         
     } else {
        secondNum += number; 
     }
     

   }
    


function giveOperator(value){
    operator =value;
}
let result;

function run(){
    if(firstNum == undefined || firstNum == ""){
        return;
    }
   let a = parseFloat(firstNum);
   let b = parseFloat(secondNum);
   console.log(a,operator,b);
   

result = operate(a,b,operator);
console.log("result "+result);

setback();
}

function setback(){
    operator ="";
    secondNum = "";
    firstNum = "";
    
    firstNum+= result;

    result=0;
}
function test(){
    console.log("checking result ", result ,typeof(result));
    console.log("first num " ,firstNum);
    console.log("second num  ", secondNum);
    console.log("operator  ", operator)
}