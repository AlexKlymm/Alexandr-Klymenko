// Це виклик факторіалу.

// function factorial(n = 0) {
//     if (n == 0) {
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// 5 * (4)
// 4 * (3)
// 3 * (2)
// 2 * (1)
// 1 * (0)

// factorial( n = 0)

//



// Підсказка до домашки з функціями

// function numbersCombine( a = 0, b = 0, c = 0) {
//     100*a 10*b + c
//     return '' + a + b + c;
// }



// Виклик декількох значень функції

// function myFunc(a, b) {
//     //TODO::
//     const ra = a * 2;
//     const rb = b * 2;
//     return {x: ra, y: rb}
// }

// const r = myFunc(2, 4);

// console.log(r.x, r.y)
// r.ra 
// r.rb




// const arr = ['Hello', false, 12, 'Bob', 42.67] 
/* Це не зовсім масив. Точніше це массив, але в він не 
 дуже добре структурованний і має багато різних типів.
 Це взагалі не правильно. Масив має в собі мати елементи
 одного типу.*/




//Практика з написання массивів
 //  let arr2 = new Array(5);
//  console.log(arr2);

//  const arr = [1,2,3,4,5,6,7,8,9];
// /*//  [1,2,3,4,5,6,7,8,9,0]
 
// function arrNum () {
//     return 5;
// }

//  console.log(arr[arr.length-1]);

//  console.log(arr[arrNum()]);

//  console.log(arr[100]);

// //  console.log(arr); 

// arr[1] = 22;

// arr[100] = 123;

// console.log(arr);
// console.log('length', arr.length);

// const news = {2:{},
// 15:{},
// 73:{}};

// news[2] = {};
// news[73] = {};

// console.log(news);

// for( let i = 0; i<arr.length; i++);

// for(let i=0; i<3; i++){
//     console.log(arr[i]);
// }

// console.log('================');
// for(let key in arr) {
//     console.log(arr[key]);
// }

// console.log('===================');
// for(let value of arr){
//     console.log(value);
// } */
// const len = arr.push(12, 10, 11);

// const last = arr.pop();

// console.log(arr);
// // console.log(arr.length);
// console.log(len);
// console.log(last);




// const arr = [ 1,2,3,4,5,6,7,8,9];

// // let arResult = arr.forEach(el => {
// //     arResult.push(el + 10);
// // });
// // console.log(arResult)

// let arResult = arr.map(el => el + 10);

// console.log(arResult);

// let arEven = arr.filter(el => el%2===0);

// console.log(arEven);

// const arr2 = [4,78,22,8,42,1,100,45];

// arr2.sort((a,b) => a + b);

// console.log(arr2);

/*
        {
        name: '',
        qty: 0,
        isBuy: false,
        price: 0.00,
        total: 0.00
    }

    */



const topPanel = {
    show: function(text, className){
        let panel = `<div id="top-panel" class="top-panel ${className}">${text}<div/>`;
        if(document.getElementById('top-panel') !== null) {
            document.getElementById('top-panel').remove();
        }
        document.body.insertAdjacentHTML('afterbegin', panel);
        this.hide();
    },
    hide: function() {
        setTimeout(function() {
            document.getElementById('top-panel').remove();
        },3000);
    },
    error: function(text) {
        this.show(text, 'panel-error');
    },
    success: function(text) {
        this.show(text, 'panel-success');
    },
    info: function(text) {
        this.show(text, 'panel-info');
    }
}

// topPanel.info('lorem ipsum')

const CART = [
    {
        name: 'Milk',
        qty: 1,
        isBuy: false,
        price: 15,
        total: 15
    },
    {
        name: 'Bread',
        qty: 2,
        isBuy: false,
        price: 23.45,
        total: 46.9
    }
];

viewCartTable();

function addToCart(name, qty, price) {
    if( CART.find(el => el.name === name) === undefined) {
        CART.push ({
            name: name,
            qty: qty,
            isBuy: false,
            price: price,
            total: parseFloat((qty * price).toFixed(2))
        });
        topPanel.success('Product succussfully added')
    } else {
        const prodIndex = CART.findIndex(el => el.name===name);
        const newQty = CART[prodIndex].qty + qty;
        CART[prodIndex].qty = newQty;
        CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2))
        topPanel.success('Product succussfully changed')
    }
    viewCartTable();
}

// addToCart('Milk', 2, 23.45)

function checkAndAddToCard() {
    let name = document.getElementById('product_name').value,
        qty = parseInt(document.getElementById('product_qty').value),
        price = parseFloat(document.getElementById('product_price').value);
    let valid = true;
    if (name === '') {
        topPanel.error('Enter product name');
        valid = false;
    }
    if (isNaN(qty)) {
        topPanel.error('Enter quantity valid value');
        valid = false;
    }
    if (qty <= 0) {
        topPanel.error('Quantity must be positive');
        valid = false;
    }
    if (isNaN(price)) {
        topPanel.error('Enter price valid value');
        valid = false;
    }
    if (price <= 0) {
        topPanel.error('Price must be positive');
        valid = false;
    }    
    if (valid) {
        addToCart(name, qty, price)
        topPanel.success('Product successfully added');
        document.getElementById('product_name').value = '';
        document.getElementById('product_qty').value = '1';
        document.getElementById('product_price').value = '';
    }
}

function viewCartTable() {
    let html = '';
    CART.forEach(product => {
        html += `
        <tr>
            <td>${product.name}</td>
            <td>
            <button class="btn btn-info btn-sm" onclick="changeProductlyQTY('${product.name}', 'dec')">-</button>
            ${product.qty}
            <button class="btn btn-info btn-sm" onclick="changeProductlyQTY('${product.name}', 'inc')">+</button>
            </td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.total.toFixed(2)}</td>
        </tr>
        `;
    });
    document.getElementById('cart-tbody').innerHTML = html;
    document.getElementById('cart-total').innerText = (sumTotal()).toFixed(2);
} 

function changeProductlyQTY(name, action) {
    // debugger;
    const index = CART.findIndex(el => el.name === name);
    let newQty = 0;
    if (action === 'inc') {
        newQty = CART[index].qty + 1;
    } else {
        if(CART[index].qty >= 2) {
            newQty = CART[index].qty - 1;
        } else {
            askProductDelete(name);
            return false;
        }
    }
    CART[index].qty = newQty;
    CART[index].total = CART[index].price * newQty;
    viewCartTable();
}

function askProductDelete(name) {
    return confirm('Delete product? '+name+'?');
}

function sumTotal () {
    return CART.reduce((acc, curr) => {return acc + curr.total;}, 0);
}

const DISCOUNT = [
    {
        promo: 'qwe',
        type: 'fixed', // or 'percent',
        value: 15,
        isUsed: false
    },
    {
        promo: 'qwert',
        type: 'percent',
        value: 5,
        isUsed: false
    }

]

function checkAndApplyDiscount() {
    const discPromo = document.getElementById('discountField').value;
    if (discPromo === '') {
        topPanel.error('Enter promo code');
        return false;
    }
    const index = DISCOUNT.findIndex(el => el.promo === discPromo);
    if (index === -1) {
        topPanel.error('Promo code not found');
        return false;
    } 
    const disc = DISCOUNT[index];
    if (disc.isUsed) {
        topPanel.error('This promo alredy used');
        return false;
    } 
    let newTotal = calcDiscount(disc);
    DISCOUNT[index].isUsed = true;
    document.getElementById('discValue').innerText = disc.value + (disc.type === 'fixed' ? ' UAH' : '%');
    document.getElementById('totalWithDisc').innerText = (newTotal).toFixed(2);
    document.getElementById('discountField').value = '';
}

function calcDiscount(disc) {
    const {type, value} = disc;
    const sumTotalValue = sumTotal();
    switch(type){
        case "fixed":
            return sumTotalValue - value;
        case "percent":
            return sumTotalValue - (sumTotalValue / 100 * value);
    }
}
