//=======stream practise + w3schools theory=================

// const colors = ['red', 'blue', 'black'] // it's array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const carsExample2 = new Array ('Пежот', 'Tesla', 'Folkswagen'); 
//it's also work, but better use array literal method

/*
const cars = []; // create array
cars[0] = 'Saab';
cars[1] = 'BMW';
cars[2] = 'Reno'; // add some element's.
*/
// let car = cars[0]; // i can get some array el by index number <-- example
//array start with 0 index.

/*
cars[0] = 'Opel'; // Schanging el in Array. 
// Now i have on 0 index 'Opel', before 'Saab'
console.log(cars);
*/
// document.getElementById('demo').innerHTML = cars;
// I can show all el's in Array with Array's name

//Array have return with typeof object type, but arr use numbers to 
// access any element in arr. Example on 13 string. And obj use names
// to access some el in obj. 

//in Arr i can have any type of elements:
/*
myArr[0] = Date.now; // obj
myArr[1] = myFunc; // func
myArr[2] = myCars // arr and e.t.c
*/

//======METHODS AND PROPERTIES!!=====
// ===Properties===!
// cars.length // return me number length this arr. Also it's properties!
//length properties is always return me one more than the highest array index. 
// (i have 0,1,2 index, but arr.length return me 3)
// let fruit = fruits[0]; //accessing to any el.
// let fruit = fruits[fruits.length - 1]; // accessing the last arr el

//==some special arr cycle ====
//for loop: // 
/*
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} // in this way i can get in console all el in arr with idex access
*/
//for of:
/*
for (let fruit of fruits) {
    console.log(fruit);
} // here i can get also all el in arr< but without index access.
*/

//====Methods===!
// arr.sort(): 
// car.sort() // sort my arr

//Array.forEach():
/*
let text = '<ul>';
fruits.forEach(myFunction); 
//this method use argument's in () for each elem in arr. 
//In this way it's function 
text += '</ul>';
document.getElementById("demo").innerHTML = text;
function myFunction(value) {
    text += '<li>' + value + '</li>' // here i can see this way (61)
}
*/
//or with anonim function sort out array
/*
fruits.forEach(function(el) {
    console.log(el);
})
*/

// Array.push(): adding arr el
// fruits.push('Lemon'); // now i add lemon in my fruits arr
// i can make this step with length property:
// fruits[fruits.length] = 'lemon';
// console.log(fruits);

//Array.pop():
/*
console.log(fruits);
fruits.pop() // delete last el in arr
console.log(fruits); // now i lost 'mango'
*/

//Array.shift():
/*
console.log(fruits);
fruits.shift(); // delete first el in arr
console.log(fruits); // now i lost 'banana'
*/

//Array.splice():
    // 1)change way:
/*
fruits.splice(1,1,'Applepen') // this method work in three steps:
//                      1) 'index of element'
//                      2) 'amount deleted elements'
//                      3) 'new elements'
//In this way i find index 1, delete 'Orange', because 'Orange' have 1 index,
// and change on 'Applepen'. Now i have there 'Applepen' and lost 'Orange'
console.log(fruits);
*/
    //2) copy arr part way:
/*
const newFruits = fruits.splice(1,2)
// In this way i copy some part of arr in new arr. 
// I need write index value. This is impotant
console.log(newFruits);
*/

//Array.concact():
/*
const eatBag = ['meat','milk', 'butter']
const dinner = fruits.concat(eatBag);
// This method can help me with concatination arrays. 
// He unite both arrays in new different array.
console.log(dinner);
*/ 

// Four ways to find something in array:
    //Array.indexOf():
// const numbers = [10,11,12,13,14,15,16]
// console.log(numbers.indexOf(12)); // i get 2 index
// here i must write name of index and then i can get index of this things
// console.log(fruits.indexOf('Orange')); // i get 1 index
//if i can't find element i return -1
    //Array.lastIndexOf():
// console.log(fruits.lastIndexOf('Banana')); // i get 0 index
// console.log(numbers.lastIndexOf(11)); // i get 1 index
//if i can't find element i return -1
    //Array.includes():
// console.log(fruits.includes(1)); // false
// console.log(fruits.includes('Orange')); // true
//if i can't find element i return false
    //Array.find()
//===some theory==

// If i try to add some el with highter index, then my max index
// i can get a 'hole'. Example:
// fruits[15] = 'Lemon'
// console.log(fruits); 
// now i have 11 empty elements, which 
// browser read as 'empty' or 'hole' in JS slang.
// This things return undefined, when i can try to find empty elment.

// JS does support arr with named index!!!! 
// (we can't use 'hashes' or associative arrays)
// If i try to give my index in arr some name, JS will redefine 
// the arr to object. After that, many arr propeties
// and methods can make incorrect results.

// Arr is a special kind of obj, and main difference in this second things is:
// arr have numbered indexes, when obj have named indexes.

//===JS consturctor new Arr()===
//Two way to create Arr in JS: 
// const points = new Array(); // here i use array constructor 
// const points = []; // classic

/*
const points = new Array(40); 
// if i try to create one el with cunstuctor new,
//i get unexpected results - one big 'hole',
// or in this  i get 40 oempty elements.
const points1 = [40]
//it/s not the same as new Arr
console.log(points);
console.log(points1);
*/

// ====How i can recognize Arr?===
// Solution 1: Array.isArray()
// console.log(Array.isArray(fruits)) 
// if this element - array i get true
// Solution 2: inctanceof:
// console.log(fruits instanceof Array);
//also return true

//not recomeden give in Arr many different types of date.

//====spread-operator====
// If i need to use some values from Arrr i can use spread-operator (...)
// I can use this in solution, when i don't know how much arguments
// i give in function.
/*
const arr = [12, 2 ,-7]
console.log(arr); // i get array
console.log(...arr); // i get three values
*/
// now each value here have freedom and if it's should be function
// i can use any value, as all free arguments.






// const topPanel = {
//     show: function(text, className){
//         let panel = `<div id="top-panel" class="top-panel ${className}">${text}<div/>`;
//         if(document.getElementById('top-panel') !== null) {
//             document.getElementById('top-panel').remove();
//         }
//         document.body.insertAdjacentHTML('afterbegin', panel);
//         this.hide();
//     },
//     hide: function() {
//         setTimeout(function() {
//             document.getElementById('top-panel').remove();
//         },3000);
//     },
//     error: function(text) {
//         this.show(text, 'panel-error');
//     },
//     success: function(text) {
//         this.show(text, 'panel-success');
//     },
//     info: function(text) {
//         this.show(text, 'panel-info');
//     }
// }

// // topPanel.info('lorem ipsum')

// const CART = [
//     {
//         name: 'Milk',
//         qty: 1,
//         isBuy: false,
//         price: 15,
//         total: 15
//     },
//     {
//         name: 'Bread',
//         qty: 2,
//         isBuy: false,
//         price: 23.45,
//         total: 46.9
//     }
// ];

// viewCartTable();

// function addToCart(name, qty, price) {
//     if( CART.find(el => el.name === name) === undefined) {
//         CART.push ({
//             name: name,
//             qty: qty,
//             isBuy: false,
//             price: price,
//             total: parseFloat((qty * price).toFixed(2))
//         });
//         topPanel.success('Product succussfully added')
//     } else {
//         const prodIndex = CART.findIndex(el => el.name===name);
//         const newQty = CART[prodIndex].qty + qty;
//         CART[prodIndex].qty = newQty;
//         CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2))
//         topPanel.success('Product succussfully changed')
//     }
//     viewCartTable();
// }

// // addToCart('Milk', 2, 23.45)

// function checkAndAddToCard() {
//     let name = document.getElementById('product_name').value,
//         qty = parseInt(document.getElementById('product_qty').value),
//         price = parseFloat(document.getElementById('product_price').value);
//     let valid = true;
//     if (name === '') {
//         topPanel.error('Enter product name');
//         valid = false;
//     }
//     if (isNaN(qty)) {
//         topPanel.error('Enter quantity valid value');
//         valid = false;
//     }
//     if (qty <= 0) {
//         topPanel.error('Quantity must be positive');
//         valid = false;
//     }
//     if (isNaN(price)) {
//         topPanel.error('Enter price valid value');
//         valid = false;
//     }
//     if (price <= 0) {
//         topPanel.error('Price must be positive');
//         valid = false;
//     }    
//     if (valid) {
//         addToCart(name, qty, price)
//         topPanel.success('Product successfully added');
//         document.getElementById('product_name').value = '';
//         document.getElementById('product_qty').value = '1';
//         document.getElementById('product_price').value = '';
//     }
// }

// function viewCartTable() {
//     let html = '';
//     CART.forEach(product => {
//         html += `
//         <tr>
//             <td>${product.name}</td>
//             <td>
//             <button class="btn btn-info btn-sm" onclick="changeProductlyQTY('${product.name}', 'dec')">-</button>
//             ${product.qty}
//             <button class="btn btn-info btn-sm" onclick="changeProductlyQTY('${product.name}', 'inc')">+</button>
//             </td>
//             <td>${product.price.toFixed(2)}</td>
//             <td>${product.total.toFixed(2)}</td>
//         </tr>
//         `;
//     });
//     document.getElementById('cart-tbody').innerHTML = html;
//     document.getElementById('cart-total').innerText = (sumTotal()).toFixed(2);
// } 

// function changeProductlyQTY(name, action) {
//     // debugger;
//     const index = CART.findIndex(el => el.name === name);
//     let newQty = 0;
//     if (action === 'inc') {
//         newQty = CART[index].qty + 1;
//     } else {
//         if(CART[index].qty >= 2) {
//             newQty = CART[index].qty - 1;
//         } else {
//             askProductDelete(name);
//             return false;
//         }
//     }
//     CART[index].qty = newQty;
//     CART[index].total = CART[index].price * newQty;
//     viewCartTable();
// }

// function askProductDelete(name) {
//     return confirm('Delete product? '+name+'?');
// }

// function sumTotal () {
//     return CART.reduce((acc, curr) => {return acc + curr.total;}, 0);
// }

// const DISCOUNT = [
//     {
//         promo: 'qwe',
//         type: 'fixed', // or 'percent',
//         value: 15,
//         isUsed: false
//     },
//     {
//         promo: 'qwert',
//         type: 'percent',
//         value: 5,
//         isUsed: false
//     }

// ]

// function checkAndApplyDiscount() {
//     const discPromo = document.getElementById('discountField').value;
//     if (discPromo === '') {
//         topPanel.error('Enter promo code');
//         return false;
//     }
//     const index = DISCOUNT.findIndex(el => el.promo === discPromo);
//     if (index === -1) {
//         topPanel.error('Promo code not found');
//         return false;
//     } 
//     const disc = DISCOUNT[index];
//     if (disc.isUsed) {
//         topPanel.error('This promo alredy used');
//         return false;
//     } 
//     let newTotal = calcDiscount(disc);
//     DISCOUNT[index].isUsed = true;
//     document.getElementById('discValue').innerText = disc.value + (disc.type === 'fixed' ? ' UAH' : '%');
//     document.getElementById('totalWithDisc').innerText = (newTotal).toFixed(2);
//     document.getElementById('discountField').value = '';
// }

// function calcDiscount(disc) {
//     const {type, value} = disc;
//     const sumTotalValue = sumTotal();
//     switch(type){
//         case "fixed":
//             return sumTotalValue - value;
//         case "percent":
//             return sumTotalValue - (sumTotalValue / 100 * value);
//     }
// }


// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// let arrResult = []
// 
// arr.forEach(el => {
    // arrResult.push(el + 10);
// });

// let arrResult = arr.map(el => el + 10);
// return new array with changed elements
// 1. get value
// 2. change THIS value
// 3. and return new changes in arr

// let arrResult = arr.map((el, i) => el + 10 + i);
// we can cantain with index

// console.log(arrResult);
// console.log(arr);

// filter возращает массив, где мы какждый элемент проверяем на какое-то услоие
// и изменет его длину
// let arrEven = arr.filter(el => el%2===0);
// console.log(arrEven);

/*
const arr2 = [4, 78, 222, 42, 8, 1, 98, 100, 45];
console.log(arr2);
arr2.sort((a, b) => a - b);
//  таком виде сортирует массив
console.log(arr2);
*/
