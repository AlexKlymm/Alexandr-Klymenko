"use strict";

var nameQeustion = prompt('Як тебе звати, друже?');
var userName = nameQeustion;
alert("\u041F\u0440\u0438\u0432\u0456\u0442! ".concat(userName));
var birthDay = parseInt(prompt('Вкажи рік у якому ти народився(лась)'));
var myYear = 2022;
var rez2 = myYear - birthDay;
alert("\u0422\u043E\u0431\u0456 \u043D\u0430\u0440\u0430\u0437\u0456 ".concat(rez2, " \u0440\u043E\u0447\u043A\u0456\u0432."));
var sqrSide = parseInt(prompt('Вкажи довжину сторони квадрату.'));
var square = Math.pow(sqrSide, 2);
alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443: ".concat(square));
alert("\u041D\u0430\u0440\u0430\u0437\u0456 \u043C\u0438 \u0456\u0434\u0435\u043C\u043E \u0434\u0430\u043B\u0456! :)");
var radCircle = parseInt(prompt('Вкажи радіус кола.'));
var areaCircle = 3.14 * Math.pow(radCircle, 2);
alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430: ".concat(areaCircle));
alert("".concat(userName, ", \u0434\u0430\u0432\u0430\u0439 \u044F \u0442\u043E\u0431\u0456 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443 \u0432\u0438\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043A\u043C/\u0447!"));
var road2Home = parseInt(prompt('Уяви, що тобі потрібно приїхати з міста А у місто B. Вкажи відстань між цими містами.'));
var roadTime = parseInt(prompt('Дуже добре, а за скільки годин?'));
var kmPerHour = road2Home / roadTime;
alert("\u0422\u043E\u0431\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0457\u0445\u0430\u0442\u0438 ".concat(kmPerHour, " \u043A\u043C \u0443 \u0433\u043E\u0434\u0438\u043D\u0443 \u0447\u0430\u0441\u0443. \u0411\u0443\u0434\u044C \u043E\u0431\u0435\u0440\u0435\u0436\u043D\u0438\u0439(\u043D\u0430) \u043F\u0456\u0434 \u0447\u0430\u0441 \u0440\u0443\u0445\u0443!"));
alert('А зараз ми порахуємо скільки долларів ти зможешь перевести у євро!');
var howManyUSD = parseInt(prompt('Скільки долларів хотів(ла) би ти перевести у євро?'));
var EUR = 0.94;
var euroUser = EUR * howManyUSD;
alert("\u041D\u0430\u0440\u0430\u0437\u0456 \u0446\u0435 \u0431\u0443\u0434\u0435: ".concat(euroUser, " \u0435\u0432\u0440\u043E"));
alert("".concat(userName, ", \u0434\u044F\u043A\u0443\u044E \u0442\u043E\u0431\u0456 \u0437\u0430 \u0443\u0432\u0430\u0433\u0443! \u041D\u0435\u0445\u0430\u0439 \u0442\u043E\u0431\u0456 \u0441\u043E\u043D\u0435\u0447\u043A\u043E \u0441\u0432\u0456\u0442\u0438\u0442\u044C!")); // function myPow(){
//   const num = parseInt(prompt('Enter your integer number'));
//   const num2 = parseInt(prompt('Enter your integer number 2'));
//   const rez = num**num2;
//   alert(rez);
// }
// function avgNum(){
//   const num = parseInt(prompt('Enter your integer number'));
//   const num2 = parseInt(prompt('Enter your integer number 2'));
//   const rez = (num+num2)/2;
//   alert(rez);
// }
// function sqr(){
//   const num = parseInt(prompt('Square side size'));
//   const rez = num**2
//   alert(rez);
// }
// function km2ml(){
//   const km = parseInt(prompt('Сколько км требуется?'));
//   const K = 0.621371;
//   const ml = km*K;
//   alert(`В милях это ${ml}`);
// }
// function calc(){
//   const num = parseInt(prompt('Enter your integer number'));
//   const num2 = parseInt(prompt('Enter your integer number 2'));
//   const action = prompt('Choose action');
//   let rez;
//   if (action=== '+') {
//     rez = num + num2;
//   } else if  (action==='-') {
//     rez = num - num2;
//   } else if (action==='*') {
//     rez = num * num2;
//   } else if (action==='/') {
//     rez = num / num2;
//   } else {
//     alert('action not work')
//   }
//   if (rez != undefined) {
//     alert(`result - ${rez}`);
//   }
// }
// function findX(){
//   const a = parseInt(prompt('Enter your integer number'));
//   const b = parseInt(prompt('Enter your integer number 2'));
//   const x = b * (-1) / a;
//   alert(`X = ${x}`)
// }
// function time2dayEnd(){
//  const hour = +prompt('Enter hour');
//  const minutes = +prompt('Enter minutes');
//  const minutesTotalLeft = ((24 * 60) - (hour * 60 + minutes));
//  const hoursLeft = parseInt(minutesTotalLeft / 60);
//  const minutesLeft = minutesTotalLeft - hoursLeft * 60;
//  alert(`hours left: ${hoursLeft}, minutes left ${minutesLeft}`);
// }
// function digit2(){
//   const abc = +prompt('Ведите трёхзначное число')
//   const rez = parseInt((abc%100) / 10);
//   alert (`Иное число ${rez}`);
// }
// alert('Hello world!');
// console.log('qewqeqwewqeqweqw');
// alert('Hello world 2');
// const answer = confirm('delete item?');
// console.log(answer);
// if (confirm('delete item')){
//   alert('Select YES')
// } else {
//   alert('Select NO')
// }
// const user_name = prompt('What your name?');
// console.log(user_name);
// if (user_name != null) {
//     if(user_name !='') {
//       alert(user_name)
//     }
// }
// const integer = 12;
// const float = 12.34; // number with fly dot
// const text = 'Lorem ipsum';
// const isTrue = false;
// const undef = undefined;
// const Null = null;
// const NotANumber = NaN;
// const arr = [1,2,3,4];
// const obj = {"a":1, "b":2};
// const func = function(){alert('1')}
//
// console.log(integer, typeof (integer));
// console.log(float, typeof float);
// console.log(text, typeof text);
// console.log(isTrue, typeof isTrue);
// console.log(undef, typeof undef);
// console.log(Null, typeof Null);
// console.log(NotANumber, typeof NotANumber);
// console.log(obj, typeof obj);
// console.log(arr, typeof arr);
// console.log(func, typeof func);
// function sum10(a) {
//   return a+10
// }
// console.log(sum10(1))
// console.log(sum10(20))
// console.log(sum10('10'))
// function myPow(){
//   const num = parseInt(prompt('Enter your integer number'));
//   const num2 = parseInt(prompt('Enter your integer number 2'));
//   const rez = num**num2;
//   // const rez = Math.pow(num, num2);
//   alert(rez);
// }
// const num = parseInt(prompt('Enter integer number'));
// const rez = num*num;
// alert(rez);
// const num1 = parseInt(prompt('Enter your integer number'));
// const num2 = parseInt(prompt('Enter your integer number'));
// const rez1 = num1+num2;
// alert(rez1);
// const num3 = parseInt(prompt('Enter your integer number'));
// const num4 = parseInt(prompt('Enter your integer number'));
// const rez2 = num3**num4;
// alert(rez2);