const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");
const percentage = document.querySelector(".percentage");
const equalTo = document.querySelector(".equalTo");

let firstNumber = ""; 
let operator1 = "";
let secondNumber = ""; 
let result = 0;

operands.forEach(function(operand){
        operand.addEventListener('click',function(){
            if(operator1 === ""){
                firstNumber += operand.value;
            }else{
                secondNumber += operand.value;
            }
            document.getElementById("display").innerText = `${firstNumber} ${operator1} ${secondNumber}`
    });  
    
});

operators.forEach(function(operator){
    operator.addEventListener('click',function(){
        operator1 = operator.value;
        document.getElementById("display").innerText = `${firstNumber} ${operator1} ${secondNumber}`
    });
});

clear.addEventListener('click',function(){
    document.getElementById("display").innerText = ''
    firstNumber = "";
    operator1 = "";
    secondNumber = "";
});

equalTo.addEventListener('click',operate)

function operate(){
    if(firstNumber !== "" && operator1 !== "" && secondNumber !== "" ){
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        
        switch(operator1){
            case  '-':
                result = num1 - num2;
                break;
            case  '+':
                result = num1 + num2;
                break;
            case  '*':
                result = num1 * num2;
                break;
            case  '/':
                result = num1 / num2;
                break;
        }
        document.getElementById("display").innerText = `${result}`
    }
}



