"use strict";

var car = {
  Mark: 'Ferrari',
  Manufacturer: 'Italy',
  Model: 'Roma',
  'Year Edition': 2019,
  'Max Speed': 320,
  'Averege Speed': 180,
  'Max Fuel Tank': 80,
  'Averege Fuel Consumption': 9.71
};
var carUl = '<div>' + '<ul>';

for (var key in car) {
  carUl += '<li><b>' + key + ':' + '</b> ' + car[key] + '</li>';
}

carUl += '</ul>' + '</div>';
document.getElementById('carView').innerHTML = '<h6>Car:</h6>' + carUl;
var driver = {
  Name: 'Alex',
  Age: 18,
  Gender: 'Male',
  'Driver Licens': true,
  'Birth Year': 2003
};

function addDriver() {
  car.driver = driver;
  var driverUl = '<div>' + '<ul>';

  for (var _key in car.driver) {
    driverUl += '<li><b>' + _key + ': ' + '</b>' + car.driver[_key] + '</li>';
  }

  driverUl += '</ul>' + '</div>';
  document.getElementById('driverView').innerHTML = '<h6>Driver:</h6>' + driverUl;
}

var fuelTank = {
  Fuel: 80
};
car.fuelTank = fuelTank;

function needRefueling() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Do you need refueling?';
  var lowTank = confirm(text);

  if (lowTank == true) {
    car.fuelTank.Fuel == 80;
  } else {
    alert('Your tank is low!');
    return false;
  }

  refueling();
}

function refueling() {
  var fuelUl = '<div>' + '<ul>';

  for (var _key2 in car.fuelTank) {
    fuelUl += '<li><b>' + _key2 + ': ' + '</b>' + car.fuelTank[_key2] + '</li>';
  }

  fuelUl += '</ul>' + '</div>';
  document.getElementById('fuelView').innerHTML = '<h6>Cars fuel tank:</h6>' + fuelUl;
}

function userRoad() {
  checkFuelInRoad();

  if (getTrueDriver() == false) {
    return;
  } else {
    alert('Welcome!');
  }

  var userRoadDistance = +prompt('How many km need you drive?');
  var averegeSpeed = 80;
  var requiredTime = parseInt(userRoadDistance / averegeSpeed);
  var breakTime = parseInt(requiredTime / 4);
  var allTimeInWay = parseInt(requiredTime + breakTime);
  checkFuelInRoad(userRoadDistance);
  document.getElementById('userRoadResult').innerHTML = '<div>' + "\n    <h6>Your way:</h6>" + '<ul>' + '<li>' + '<b>' + 'All way with break times: ' + '</b>' + "".concat(allTimeInWay, " h;") + '</li>' + '<li>' + '<b>' + 'Way without break times: ' + '</b>' + "".concat(requiredTime, " h;") + '</li>' + '<li>' + '<b>' + 'Break times: ' + '</b>' + "".concat(breakTime, " h;") + '</li>' + '<li>' + '<b>' + 'Your distance way: ' + '</b>' + "".concat(userRoadDistance, "km;") + '</li>' + '<li>' + '<b>' + 'And your averege speed: ' + '</b>' + "".concat(averegeSpeed, "km/hour;") + '</li>' + '<li>' + '<b>' + 'I wish you nice way on the road!' + '</b>' + '</li>' + '</ul>' + '</div>';
}

function checkFuelInRoad(userRoadDistance) {
  var spentFuel = car['Averege Fuel Consumption'] * userRoadDistance / 100;

  if (spentFuel > car['Max Fuel Tank']) {
    for (var i = parseInt(spentFuel / car['Max Fuel Tank']); i != 0; i--) {
      needRefueling("Your way is very long. You need a park and make refueling ".concat(i, " more times. "));

      if (needRefueling() === false) {
        alert('You cant continue way with low tank.');
        break;
      }
    }
  }
}

function getTrueDriver() {
  var driverName = prompt('Write your driver and we check your driver license!');

  if (driverName == '' || driverName != car.driver.Name) {
    alert('You make mistake with driver name. This driver cant use this car! Please try again with correct name or if you didnt add driver, just click on button add driver!');
    return false;
  }
} // ================ func + obj stream + advice with teacher ==============
// -------------------------------------------------------
// 6
// 1,2,3
// 1+2+3=6

/*
function evenOrOddLang(lang, text) {
  if(lang === 'ru') {
      if(text === 'четные') {
          return 'четные';
      } else {
          return 'нечетные';
      }
  } else if ( lang === 'en') {
      if (text === 'четные') {
          return 'even'
      } else {
          return 'odd'
      }
  }


}
//answerFunc - callback

function getNumber(num, lang, answerFunc) {
    // console.log(answerFunc);
    if(num % 2=== 0) {
        return answerFunc(lang, 'четные'); // сквозная передача пармаетра
    } else {
        return answerFunc(lang, 'нечетные');
    }
}

console.log(getNumber(25, 'en', evenOrOddLang));
*/
//замыкание - функция, которая  возвращает функцию

/*
function addConst(num) {
    num *= 10; 
    return function(x) { // тут-то она ее и возвращает!
        return x+num;
    }
}

const add10 = addConst(10);
const add20 = addConst(20);

console.log(add10(2));
console.log(add20(2));
*/
// clean function

/*function sum (a = 0, b = 0) {
    // return a + b;
    // document.getElementById('rez').innerTet = 'sum' + (a+b); //не чистая функция, если там есть такое
     проблемы в этой функции, если document.getElementById и тому подобные:
    1. Процесс обсчитывание  - часть строки с 
    результатом, т.е лишнее действия в  строке, 
    которая предназначена только для вывода результата.
    2. Посторонний процесс - собственно вывод результата в функции,
    которая предназначена для обсчитывания перменных.
}
*/
// console.log(sum (10, 15))
//Recursion

/*
function sumTo (num) {
 return num == 0  ? num : num + sumTo(num-1);
}
function sumTo2(num) {
    let rez = 0;
    for (let i = 1;i <= num; i++) {
        rez += i
    }
    return rez;
}

function factorial (n) {
    return n != 1 ? n * factorial(n - 1) : n = 1; 
}
*/
//бесконечная рекурсия

/*
function myFunc() {
    const text = prompt('qwe?');
    alert(text);
    if ( text != '' ) {
    myFunc();
    }
}
myFunc();
*/
// рекурсия с задержкой, т.к функция setTimeout(time)

/*
function checkNewOrders() {
    //code request
    setTimeout(function(){
        checkNewOrders();
    },300000);
}
*/
//анонимная функция 

/*
function anonFuncExample(){
    (function(){
    //func body
    })
}
*/
//IIFE -immediately invoked function expression

/*
(function() {
    console.log('hello!');
})();
*/
//===========================hasOwnProperty()==========================
//Object.method hasOwnProperty - check have obj this key or not 
//                                      (return undefined if no).

/*
const obj = {
    name: 'vasya',
    // age: 25
}
*/
// console.log(obj?.age.qqq);
//if i try to find some obj in obj with ? i have error

/*
if(obj.hasOwnProperty('age')) {
    console.log((obj.age.qqq));
} else {
    console.log('obj has no "age" property');
}
*/
// in this way i have undefined, if i haven't this key in obj.
// This method try to find the key on first level obj,
// and he can't go on the next level if we
// wanna try to check some key in obj in obj
//==================Objectfreeze()/Object.isFrozen()======================
//obj methods: Objectfreeze()/Object.isFrozen()

/*
const obj = {
    name: 'vasya',
    age: 25
}
*/
// Object.freeze(obj);
//Now i can't change anything in this obj, because this objhas been frozen.

/*
obj.age = 35;
obj.gender = 'male';
*/
//This changes isn't work.
// console.log(Object.isFrozen(obj));
//This method check my obj and return true, 
// if obj is frozen, or false if obj isn't frozen
// Give key some variable value

/*
const nameKey = 'name';
const obj = {
    name: 'vasya',
    age: 25
}
*/

/*
if(obj.hasOwnProperty(nameKey)) {
    console.log(obj[nameKey]);
    //In this way i make 2 steps: check have this obj nameKey value in key
    //and give in console key with name, as in nameKey variable value.
} 
*/
//in this way, i have in variable nameKey stirng wigh value 'name',
//and if i give some obj this variable: console.log(obj[nameKey]),
//i try find key in this obj with name as variable value.
//Example: obj.name 'vasya', const nameKey = 'name', if nameKey have any 
// another value i get undefined.

/*
for(let k in obj) {
    console.log(k+': '+obj[k]);
}
*/
//in this way i give in console all keys in obj.