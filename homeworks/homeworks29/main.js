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
let checkNumberesInArguments = (argument) => {
  argument = document.getElementById('numbersForLength').value;
  let result = String(argument).length;
  console.log(result);
}

// 3) Напиши функцію, яка приймає 2 числа і повертає :
//     1) -1, якщо перше число менше, ніж друге; 
//     2) 1 - якщо перше число більше, ніж друге; 
//     3) 0 - якщо числа рівні.
let getNumbers = () =>  prompt('Write your first number');

function checkNumbers() {
  let num1 = getNumbers(),
      num2 = getNumbers();
  let result = 0;
  if (num1 > num2) 
   return result = 1;
  else if (num1 < num2) 
   return result = -1;
  else if (num1 = num2) 
   return result;
}

let showNumberResult = () => document.getElementById('checkNumbers__result').innerHTML = 'Result: ' + checkNumbers();

//4) Напиши функцію, яка обчислює факторіал переданого їй числа.
let getFactorial = () => factorial = parseInt(document.getElementById('factorial__input').value);

function coundFactorial (factorial) {
  return factorial ? factorial * coundFactorial(factorial - 1) : 1;
}

let showFactorial = () => document.getElementById('factorial__result').innerText = 'Result: ' + coundFactorial(getFactorial());

//5) Напиши функцію, яка приймає три окремі цифри і перетворює 
//їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let getNumbers4String = () => prompt('Write your number');

function connectNumber() {
  debugger
  let firstNum = getNumbers4String(),
      secondNum = getNumbers4String(),
      thirdNum = getNumbers4String(),
      result = firstNum + secondNum + thirdNum;
      return result;
}

let showUnitedNumbers = () => document.getElementById('numbers4String__result').innerText = 'Result: ' + connectNumber();

//6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let getFigureWidth = () => document.getElementById('number__Fields--width').value;
let getFigureLength = () => document.getElementById('number__Fields--length').value;

function findFigureSquare () {
  debugger
  let width = parseInt(getFigureWidth());
  let length = parseInt(getFigureLength());
  let result = length * width;
  if (isNaN(length)) {
    result = width * width
  } else if (isNaN(width)) {
    result = length * length
  }
  if (isNaN(result)) {
    result = 'Будь-ласка введіть хоча б одно число!'
  }
  return result;
}

let showSquareResult= () => document.getElementById('square__result').innerText = 'Result: ' + findFigureSquare();