const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");
const percentage = document.querySelector(".percentage");

let firstNumber = ""; 
let operator1 = "";
let secondNumber = ""; 

operands.forEach(function(operand){
        operand.addEventListener('click',function(){
            if(operator1 === ""){
                firstNumber += operand.value;
            }else{
                secondNumber += operand.value;
            }
            updateDisplay();
    });  
    
});

operators.forEach(function(operator){
    operator.addEventListener('click',function(){
        operator1 = operator.value;
        updateDisplay();
    });
});

clear.addEventListener('click',function(){
    document.getElementById("display").innerText = ''
    firstNumber = "";
    operator1 = "";
    secondNumber = "";
})

function updateDisplay(){
     document.getElementById("display").innerText = `${firstNumber} ${operator1} ${secondNumber}`
}