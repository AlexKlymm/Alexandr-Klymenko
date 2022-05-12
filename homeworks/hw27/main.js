const nameQeustion = prompt('Як тебе звати, друже?');
const userName = nameQeustion;
alert(`Привіт! ${userName}`);

const birthDay = parseInt(prompt('Вкажи рік у якому ти народився(лась)'));
const myYear = 2022;
const rez2 = myYear - birthDay;
alert(`Тобі наразі ${rez2} рочків.`); 

const sqrSide = parseInt (prompt('Вкажи довжину сторони квадрату.'));
const square = sqrSide**2;
alert(`Площа квадрату: ${square}`);

alert(`Наразі ми ідемо далі! :)`);

const radCircle = parseInt(prompt('Вкажи радіус кола.'));
const areaCircle = 3.14 * radCircle**2;
alert(`Площа кола: ${areaCircle}`);

alert(`${userName}, давай я тобі допоможу вирахувати швидкість км/ч!`)
const road2Home = parseInt(prompt('Уяви, що тобі потрібно приїхати з міста А у місто B. Вкажи відстань між цими містами.'));
const roadTime = parseInt(prompt('Дуже добре, а за скільки годин?'));
const kmPerHour = road2Home / roadTime;
alert(`Тобі потрібно їхати ${kmPerHour} км у годину часу. Будь обережний(на) під час руху!`);

alert('А зараз ми порахуємо скільки долларів ти зможешь перевести у євро!');
const howManyUSD = parseInt(prompt('Скільки долларів хотів(ла) би ти перевести у євро?'));
const EUR = 0.94;
const euroUser = EUR * howManyUSD;
alert(`Наразі це буде: ${euroUser} евро`);

alert(`${userName}, дякую тобі за увагу! Нехай тобі сонечко світить!`)

// function myPow(){
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

