const btCalculate = document.getElementById('calculate');
const number1 = document.getElementById('firstNumber');
const number2 = document.getElementById('secondNumber');
const selectOperator = document.getElementById('operator');
const resultContainer = document.getElementById('result');

btCalculate.addEventListener('click', function (event) {
  event.preventDefault();

  let firstValue = parseInt(number1.value);
  let operator = selectOperator.value;
  let secondValue = parseInt(number2.value);
  
  compute(firstValue, secondValue, operator);
});

function compute(firstValue, secondValue, operator) {
  let result = 0;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;

    case '-':
      result = firstValue - secondValue;
      break;

    case '*':
      result = firstValue * secondValue;
      break;

    case '/':
      result = firstValue / secondValue;
      break;

    default:
      result = 'Invalid operator';
      break;
  }
  
  resultContainer.innerHTML = result;
}

console.log('start');
