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





let firstNumber ;
let secondNumber ;
let theOperator ;

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

let clickNum = "";
let operator = "";
nums.map((num)=>{
   num.addEventListener("click",(e)=>{
       clickNum += e.target.value;
       display.innerText = clickNum;
       console.log(clickNum);
   });

});

