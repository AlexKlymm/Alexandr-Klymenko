"use strict";

// 1) Напиши всі можливі варіанти створення функцій.
// function expression:
// let functionName = function() {
//   alert('some text');
// }
// function declaration:
// function fucntionName() {
//   alert('some text');
// }
//arrow function: 
// let message = () => alert('hi!');
// 2) Створи функцію, яка буде виводити кількість 
// переданих їй аргументів.
var checkNumberesInArguments = function checkNumberesInArguments(argument) {
  argument = document.getElementById('numbersForLength').value;
  var result = String(argument).length;
  console.log(result);
}; // 3) Напиши функцію, яка приймає 2 числа і повертає :
//     1) -1, якщо перше число менше, ніж друге; 
//     2) 1 - якщо перше число більше, ніж друге; 
//     3) 0 - якщо числа рівні.


var getNumbers = function getNumbers() {
  return prompt('Write your first number');
};

function checkNumbers() {
  var num1 = getNumbers(),
      num2 = getNumbers();
  var result = 0;
  if (num1 > num2) return result = 1;else if (num1 < num2) return result = -1;else if (num1 = num2) return result;
}

var showNumberResult = function showNumberResult() {
  return document.getElementById('checkNumbers__result').innerHTML = 'Result: ' + checkNumbers();
}; //4) Напиши функцію, яка обчислює факторіал переданого їй числа.


var getFactorial = function getFactorial() {
  return factorial = parseInt(document.getElementById('factorial__input').value);
};

function coundFactorial(factorial) {
  return factorial ? factorial * coundFactorial(factorial - 1) : 1;
}

var showFactorial = function showFactorial() {
  return document.getElementById('factorial__result').innerText = 'Result: ' + coundFactorial(getFactorial());
}; //5) Напиши функцію, яка приймає три окремі цифри і перетворює 
//їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


var getNumbers4String = function getNumbers4String() {
  return prompt('Write your number');
};

function connectNumber() {
  debugger;
  var firstNum = getNumbers4String(),
      secondNum = getNumbers4String(),
      thirdNum = getNumbers4String(),
      result = firstNum + secondNum + thirdNum;
  return result;
}

var showUnitedNumbers = function showUnitedNumbers() {
  return document.getElementById('numbers4String__result').innerText = 'Result: ' + connectNumber();
}; //6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


var getFigureWidth = function getFigureWidth() {
  return document.getElementById('number__Fields--width').value;
};

var getFigureLength = function getFigureLength() {
  return document.getElementById('number__Fields--length').value;
};

function findFigureSquare() {
  debugger;
  var width = parseInt(getFigureWidth());
  var length = parseInt(getFigureLength());
  var result = length * width;

  if (isNaN(length)) {
    result = width * width;
  } else if (isNaN(width)) {
    result = length * length;
  }

  if (isNaN(result)) {
    result = 'Будь-ласка введіть хоча б одно число!';
  }

  return result;
}

var showSquareResult = function showSquareResult() {
  return document.getElementById('square__result').innerText = 'Result: ' + findFigureSquare();
};