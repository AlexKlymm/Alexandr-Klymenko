"use strict";

function myPow() {
  var num = parseInt(prompt('Enter integer number'));
  var num2 = parseInt(prompt('Enter integer number 2'));
  var rez = num * num2;
  alert(rez);
}

function avgNum() {
  var num = parseInt(prompt('Enter integer number'));
  var num2 = parseInt(prompt('Enter integer number 2'));
  var rez = num * num2 / 2;
  alert(rez);
}

function sqrNum() {
  var num = parseInt(prompt('Укажите сторону квадрата'));
  var rez = Math.pow(num, 2);
  alert(rez);
}

function km2ml() {
  var km = parseInt(prompt('Сколько км интересует?'));
  var K = 0.621371;
  var ml = km * K;
  alert("\u0412 \u043C\u0438\u043B\u044F\u0445 \u044D\u0442\u043E ".concat(ml, "\u043C\u043B"));
}

function calc() {
  var num = parseInt(prompt('Вкажіть число 1'));
  var num2 = parseInt(prompt('Вкажіть число 2'));
  var action = prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0434\u0456\u044E");
  var rez;

  if (action === '+') {
    rez = num + num2;
  } else if (action === '-') {
    rez = num - num2;
  } else if (action === '*') {
    rez = num * num2;
  } else if (action === '/') {
    rez = num / num2;
  } else {
    alert('Недопустима дія');
  }

  if (rez != undefined) {
    alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 - ".concat(rez));
  }
}

function findX() {
  var a = parseInt(prompt('Укажите число 1'));
  var b = parseInt(prompt('Укажите число 2'));
  var x = b * -1 / a;
  alert("\u0418\u043A\u0441 \u0440\u0430\u0432\u043D\u043E : ".concat(X));
}