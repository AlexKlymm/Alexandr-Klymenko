"use strict";

//usability func 
function getUserNumber(id) {
  var num = +document.getElementById(id).value;
  return checkIsNumber(num);
}

function checkIsNumber(num) {
  if (Number(num)) {
    return num;
  } else {
    return alert('Write only truthfully number!');
  }
}

function showResult(resultId, mainFunction) {
  document.getElementById(resultId).innerText = 'Result: ' + mainFunction;
} // 1) Напиши всі можливі варіанти створення функцій.
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


function numbers4Length(argument) {
  argument = getUserNumber('numbersForLength');
  var result;
  return result = String(argument).length;
}

var checkNumberesInArguments = function checkNumberesInArguments() {
  return showResult('numbersForLength__result', numbers4Length());
}; // 3) Напиши функцію, яка приймає 2 числа і повертає :
//     1) -1, якщо перше число менше, ніж друге; 
//     2) 1 - якщо перше число більше, ніж друге; 
//     3) 0 - якщо числа рівні.


function checkNumbers() {
  var num1 = getUserNumber('checkNumbers1__input'),
      num2 = getUserNumber('checkNumbers2__input');
  var result = 0;
  if (num1 > num2) return result = 1;else if (num1 < num2) return result = -1;else if (num1 = num2) return result;
}

var showNumberResult = function showNumberResult() {
  return showResult('checkNumbers__result', checkNumbers());
}; //4) Напиши функцію, яка обчислює факторіал переданого їй числа.


var getFactorial = function getFactorial() {
  return factorial = getUserNumber('factorial__input');
};

function coundFactorial(factorial) {
  return factorial ? factorial * coundFactorial(factorial - 1) : 1;
}

var showFactorial = function showFactorial() {
  return showResult('factorial__result', coundFactorial(getFactorial()));
}; //5) Напиши функцію, яка приймає три окремі цифри і перетворює 
//їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function connectNumber() {
  var firstNum = getUserNumber('numbers4String1__input'),
      secondNum = getUserNumber('numbers4String2__input'),
      thirdNum = getUserNumber('numbers4String3__input'),
      result = firstNum * 100 + secondNum * 10 + thirdNum;
  return result;
}

var showUnitedNumbers = function showUnitedNumbers() {
  return showResult('numbers4String__result', connectNumber());
}; //6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function findFigureSquare() {
  var width = getUserNumber('number__Fields--width');
  var length = getUserNumber('number__Fields--length');
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
  return showResult('square__result', findFigureSquare());
}; //perfect number 


function isPerfectNumber(num) {
  var sum = 0;

  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

var showPerfectNumber = function showPerfectNumber() {
  return showResult('perfectNumber__result', isPerfectNumber(num = getUserNumber('perfectNumber__input')));
}; //perfect number in range 


function perfectInRange(from, to) {
  from = getUserNumber('perfectNumberInRange1');
  to = getUserNumber('perfectNumberInRange2');
  var rez = '';

  for (var i = from; i <= to; i++) {
    if (isPerfectNumber(i)) {
      rez += i + ', ';
    }
  }

  return rez;
}

var showPerfectNumberInRange = function showPerfectNumberInRange() {
  return showResult('perfectNumberInRange__result', perfectInRange());
}; // let showPerfectNumberInRange = () => document.getElementById('perfectNumberInRange__result').innerText = ' Result: ' + perfectInRange();