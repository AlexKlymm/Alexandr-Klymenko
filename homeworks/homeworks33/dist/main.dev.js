"use strict";

var arr = ['foo', 'hello', 'bar', 'lorem', 'Ipsumdolor', 'Audi'];
var arrObj = [];
var arrShort = [];
var opts = ''; //принимает кол-бек функция как правило стрелочную функцию

arr.forEach(function (el, index) {
  opts += '<option value ="' + index + '">' + el + '</option>' + "\n";
  arrObj.push({
    key: index,
    value: el
  });

  if (el.length <= 4) {
    arrShort.push(el);
  }
});
console.log('arrShort', arrShort);
var arrShort2 = arr.filter(function (el) {
  return el.length <= 4;
});
console.log(opts); // создает новый массив

var arrObj2 = arr.map(function (el, index) {
  return {
    key: index,
    value: el
  };
});
console.log('arrShort2', arrShort2);
console.log('arrObj2', arrObj);