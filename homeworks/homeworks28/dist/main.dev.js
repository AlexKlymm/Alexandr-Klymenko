"use strict";

// const year = new Date().getFullYear();
// for(let i=year; i>(year - 60); i--) {
//     console.log(i);
// }
function task1() {
  var num = parseInt(document.getElementById('task_1_number').value);
  var rez = '';
  var i = 0;

  while (i < num) {
    rez += '#';
    i++;
  }

  document.getElementById('task_1_result').innerText = rez;
}

function task2() {
  var num = parseInt(document.getElementById('task_2_number').value);
  var rez = '';
  var i = num;

  while (i >= 0) {
    rez += i + ' ';
    i--;
  }

  document.getElementById('task_2_result').innerText = rez;
}

function task4() {
  var num1 = parseInt(document.getElementById('task_4_number1').value);
  var num2 = parseInt(document.getElementById('task_4_number2').value);
  var rez = '';
  var minNum = num1 < num2 ? num1 : num2;
  var i = 1;

  while (i <= minNum / 2) {
    if (num1 % i == 0 && num2 % i == 0) {
      rez += i + ' ';
    }

    i++;
  }

  if (minNum == num1) {
    if (num2 % num1 == 0) {
      rez += num1;
    }
  } else {
    if (num1 % num2 == 0) {
      rez += num2;
    }
  }

  document.getElementById('task_4_result').innerText = rez;
}

function numbersSum() {
  var num1 = parseInt(document.getElementById('sumNumber__Input--1').value);
  var num2 = parseInt(document.getElementById('sumNumber__Input--2').value);
  var rez = 0;

  if (num1 > num2) {
    num2--;

    while (num1 > num2) {
      num2++;
      rez += num2;
    }
  } else if (num1 < num2) {
    num1--;

    while (num1 < num2) {
      num1++;
      rez += num1;
    }
  }

  document.getElementById('sumNumber__Result').innerText = rez;
}

function divideNumber() {
  var num1 = document.getElementById('divideNumber__Input--1').value;
  var num2 = document.getElementById('divideNumber__Input--2').value;
  var rez = '';
  var minNum = num1 < num2 ? num1 : num2;

  if (minNum == num1) {
    if (num2 % num1 == 0) {
      rez += num1;
    }
  } else {
    if (num1 % num2 == 0) {
      rez += num2;
    }
  }

  document.getElementById('divideNumber__Result').innerText = rez;
}

function numberLength() {
  var userNum = document.getElementById('numberLength__input').value;
  var rez = String(userNum).length;
  document.getElementById('numberLength__Result').innerText = rez;
}

function PosistiveOrNegative() {
  var dodatni = 0,
      videmni = 0,
      parni = 0,
      nuli = 0,
      neparni = 0,
      rez = '',
      userNum = 0,
      allNumber = '',
      i = 0;
  var limit = 10;

  while (i < limit) {
    userNum = parseInt(prompt('Enter number'));

    if (!isNaN(userNum)) {
      allNumber += userNum + ', ';

      if (userNum === 0) {
        nuli++;
      } else {
        if (userNum > 0) {
          dodatni++;
        } else {
          videmni++;
        }
      }

      if (userNum % 2 === 0) {
        parni++;
      } else {
        neparni++;
      }

      i++;
    } else {
      break;
    }
  }

  rez = "\u0414\u043E\u0434\u0430\u0442\u043D\u0456: ".concat(dodatni, ", \u0432\u0456\u0434'\u0454\u043C\u043D\u0456: ").concat(videmni, ", \n           \u043D\u0443\u043B\u0456 ").concat(nuli, ":, \u043F\u0430\u0440\u043D\u0456 ").concat(parni, ":, \u043D\u0435\u043F\u0430\u0440\u043D\u0456: ").concat(neparni, ".");
  document.getElementById('PosistiveOrNegative__Result').innerHTML = allNumber + '<br>' + rez;
}

function cyrcleCalc() {
  var num1 = parseInt(prompt('Write your first number'));
  var num2 = parseInt(prompt('Write your second number'));
  var userAction = prompt('Write your math action');
  var rez = '';
  var answer = true;

  while (answer == true) {
    if (answer !== true) {
      break;
    }

    if (isNaN(num1) || isNaN(num2)) {
      alert('You write falsy number.');
      cyrcleCalc();
    }

    if (userAction === '/') {
      rez = num1 / num2;
    } else if (userAction === '*') {
      rez = num1 * num2;
    } else if (userAction === '-') {
      rez = num1 - num2;
    } else if (userAction === '+') {
      rez = num1 + num2;
    } else if (userAction !== '/' || userAction !== '*' || userAction !== '-' || userAction !== '+') {
      alert('You write falsy action. Write: +, -, / or *');
      cyrcleCalc();
    }

    alert(rez);
    answer = confirm('Do you will continue operation with calc?');

    if (answer == true) {
      cyrcleCalc();
    }
  }
}

function findDividers(num) {
  var userNum = document.getElementById('findDividers__input').value;
  var dividersBox = [1];
  var halfNum = Math.floor(userNum / 2),
      i,
      j;
  userNum % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

  for (i; i <= halfNum; i += j) {
    userNum % i === 0 ? dividersBox.push(i) : false;
  }

  dividersBox.push(num);
  var rez = '' + dividersBox;
  document.getElementById('findDividers__Result').innerText = rez;
}

function dayNow() {
  var continueConfirm = confirm('Бажаєте побачити який сьогодні день неділі?');
  var days = 0;

  if (continueConfirm == true) {
    while (days <= 8) {
      if (continueConfirm == false) {
        break;
      } else if (days >= 7) {
        days = 0;
      } else {
        days++;

        if (days == 1) {
          alert('Понеділок');
        } else if (days == 2) {
          alert('Вівторок');
        } else if (days == 3) {
          alert('Середа');
        } else if (days == 4) {
          alert('Четверг');
        } else if (days == 5) {
          alert("\u041F'\u044F\u0442\u043D\u0438\u0446\u044F");
        } else if (days == 6) {
          alert('Субота');
        } else if (days == 7) {
          alert('Неділя');
        }
      }

      continueConfirm = confirm('Бажаєте побачити наступний день?');
    }
  }
}

function reverseString() {
  var str = document.getElementById('reverseString__input--1').value;
  var numNeedReplace = document.getElementById('reverseString__input--2').value;
  var stringReplace = str.slice(numNeedReplace);
  var numberReplace = str.substring(0, numNeedReplace);
  var result = stringReplace + numberReplace;
  document.getElementById('reverseString__Result').innerText = result;
}

function validAge() {
  var userAge = document.getElementById('validAge__input').value;
  var rez = '';

  if (isNaN(userAge)) {
    rez = 'Напишіть будь-ласка число!';
  }

  if (userAge >= 0 && userAge < 12) rez = 'Ваш рік каже, що ви наразі дитина';
  if (userAge >= 12 && userAge < 18) rez = 'Ваш рік каже, що ви наразі підліток';
  if (userAge >= 18 && userAge < 60) rez = 'Ваш рік каже, що ви наразі дорослий';
  if (userAge >= 60) rez = 'Ваш рік каже, що ви наразі пенсіонер';
  document.getElementById('validAge__Result').innerText = rez;
}

function num2specialySymbol() {
  var userNum = document.getElementById('num2specialySymbol__input').value;
  var rez = '';

  switch (userNum) {
    case '1':
      rez = '!';
      break;

    case '2':
      rez = '@, "';
      break;

    case '3':
      rez = '№, #';
      break;

    case '4':
      rez = '$, ;';
      break;

    case '5':
      rez = '%';
      break;

    case '6':
      rez = ':, ^';
      break;

    case '7':
      rez = '&, ?';
      break;

    case '8':
      rez = '*';
      break;

    case '9':
      rez = '(';
      break;

    case '0':
      rez = ')';
      break;
  }

  document.getElementById('num2specialySymbol__Result').innerText = rez;
}
/*
     Я не смог найти решения математического, 
     поэтому пришлось делать через массив.
*/


function isPalindrom() {
  var numUser = document.getElementById('palindrom__input').value;
  return numUser === numUser.split('').reverse().join('');
}

function palindrom() {
  var rez = '';
  var numUser = document.getElementById('palindrom__input').value;

  if (isPalindrom() == true) {
    rez = "\u0422\u0430\u043A! \u0426\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C! ".concat(numUser);
  } else {
    rez = 'Ні! Це не паліндром!';
  }

  console.log(numUser, isPalindrom());
  document.getElementById('palindrom__Result').innerText = rez;
}

function whatDiscount() {
  var userBasket = parseInt(document.getElementById('whatDiscount__input').value);
  var rez = 0;

  if (userBasket < 200) {
    rez = 'Ви не маєте знижки';
  } else if (userBasket >= 200 || userBasket <= 300) {
    rez = userBasket + userBasket / 100 * 3;
  } else if (userBasket > 300 || userBasket <= 500) {
    rez = userBasket + userBasket / 100 * 5;
  }

  if (userBasket > 500) {
    rez = userBasket + userBasket / 100 * 7;
  }

  console.log(rez);
  document.getElementById('whatDiscount__Result').innerHTML = "\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(rez, ". <br> \u0426\u0456\u043D\u0430 \u0431\u0435\u0437 \u0437\u043D\u0438\u0436\u043A\u0438: ").concat(userBasket, ".");
}