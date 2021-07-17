var elDisplay = document.querySelector('.display');
var gOldNum = '';
var gNewNum = '';
var operator = '';

function addDigit(digit) {
  gNewNum += digit;
  elDisplay.innerText = gNewNum;
}

function equal() {
  var result = 0;
  switch (operator) {
    case '+':
      result = sum(gOldNum, gNewNum);

      break;

    case '-':
      result = sub(gOldNum, gNewNum);
      break;

    case '*':
      result = mult(gOldNum, gNewNum);
      break;

    case '/':
      result = div(gOldNum, gNewNum);

    default:
      break;
  }

  elDisplay.innerText = result;
  gNewNum = result;
}

function setOp(op) {
  switch (op) {
    case '+':
      operator = '+';
      gOldNum = gNewNum;
      gNewNum = '';

      break;
    case '-':
      operator = '-';
      gOldNum = gNewNum;
      gNewNum = '';
      break;
    case '*':
      operator = '*';
      gOldNum = gNewNum;
      gNewNum = '';
      break;
    case '/':
      operator = '/';
      gOldNum = gNewNum;
      gNewNum = '';
      break;

    default:
      break;
  }
}

function reset() {
  elDisplay.innerText = '';
  gNewNum = '';
  gOldNum = '';
}

function sum(num1, num2) {
  //   var sum = num1 + num2;
  var sum = +num1 + +num2;
  return sum;
}
function sub(num1, num2) {
  var sum = +num1 - +num2;
  return sum;
}
function div(num1, num2) {
  var sum = +num1 / +num2;
  return sum;
}
function mult(num1, num2) {
  var sum = +num1 * +num2;
  return sum;
}
