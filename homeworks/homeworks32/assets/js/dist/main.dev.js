"use strict";

// const { info } = require("autoprefixer");
var topPanel = {
  show: function show(text, className) {
    var panel = "<div id=\"top-panel\" class=\"top-panel ".concat(className, "\">").concat(text, "</div>");

    if (document.getElementById("top-panel") !== null) {
      document.getElementById("top-panel").remove();
    }

    document.body.insertAdjacentHTML('afterbegin', panel);
    this.hide();
  },
  hide: function hide() {
    setTimeout(function () {
      if (document.getElementById("top-panel") !== null) {
        document.getElementById("top-panel").remove();
      }
    }, 3000);
  },
  error: function error(text) {
    this.show(text, 'panel-error');
  },
  success: function success(text) {
    this.show(text, 'panel-success');
  },
  info: function info(text) {
    this.show(text, 'panel-info');
  }
};
/*
    {
        name: '',
        qty: 0,
        isBuy: false,
        price: 0.00,
        total: 0.00
    }
*/

var CART = [{
  name: 'Bread',
  qty: 1,
  isBuy: true,
  price: 15,
  total: 15
}, {
  name: 'Milk',
  qty: 2,
  isBuy: false,
  price: 23.45,
  total: 46.9
}, {
  name: 'Water',
  qty: 1,
  isBuy: false,
  price: 12,
  total: 12
}];
viewCartTable();

function addToCart(name, qty, price) {
  // find ищет в массиве элементы, которые удовлетворяют словие, 
  // если он его находит, то метод возвращает элемент.
  if (CART.find(function (el) {
    return el.name === name;
  }) === undefined) {
    CART.push({
      name: name,
      qty: qty,
      isBuy: false,
      price: price,
      total: parseFloat((price * qty).toFixed(2))
    });
    topPanel.success('Product successfully added');
  } else {
    var prodIndex = CART.findIndex(function (el) {
      return el.name === name;
    });
    var newQty = CART[prodIndex].qty + qty;
    CART[prodIndex].qty = newQty;
    CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2));
    topPanel.success('Product quantity changed');
  }

  viewCartTable();
}

; // addToCart('Milk', 2, 23.45);

function checkAndAddToCart() {
  var name = document.getElementById('product_name').value,
      qty = parseInt(document.getElementById('product_qty').value),
      price = parseFloat(document.getElementById('product_price').value);
  var valid = true;

  if (name === '') {
    topPanel.error('Enter prouct name');
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
    addToCart(name, qty, price);
    document.getElementById('product_name').value = '';
    document.getElementById('product_qty').value = '1';
    document.getElementById('product_price').value = '';
  }
}

function viewCartTable() {
  var html = '';
  CART.sort(function (a, b) {
    return Number(b.isBuy) - Number(a.isBuy);
  });
  CART.forEach(function (product) {
    html += "\n        <tr>\n            <td>".concat(product.name, "</td>\n            <td> ").concat(product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>', "</td>\n            <td>\n                <button class=\"btn btn-info btn-sm\" type=\"button\" onclick=\"changeProductQty('").concat(product.name, "', 'dec')\">-</button>    \n                ").concat(product.qty, "\n                <button class=\"btn btn-info btn-sm\" type=\"button\" onclick=\"changeProductQty('").concat(product.name, "', 'inc')\">+</button>    \n            </td>\n            <td>").concat(product.price.toFixed(2), "</td>\n            <td>").concat(product.total.toFixed(2), "</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-primary\" onclick=\"changeProdStatus('").concat(product.name, "')\">Change status</button>\n                <button type=\"button\" class=\"btn btn-danger\" onclick=\"askProDel('").concat(product.name, "')\">&times;</button>\n            </td>\n        </tr>\n        ");
  });
  document.getElementById('cart-tbody').innerHTML = html;
  document.getElementById('cart-total').innerText = sumTotal().toFixed(2);
}

function changeProductQty(name, action) {
  var index = CART.findIndex(function (el) {
    return el.name === name;
  });
  var newQty = 0;

  if (action === 'inc') {
    newQty = CART[index].qty + 1;
  } else {
    if (CART[index].qty >= 2) {
      newQty = CART[index].qty - 1;
    } else {
      return askProDel(name);
    }
  }

  CART[index].qty = newQty;
  CART[index].total = CART[index].price * newQty;
  viewCartTable();
}

function sumTotal() {
  // let total = 0;
  // for( let i = 0; i < CART.length; i++ ) {
  // total += CART[i].total;
  // }
  // return total.toFixed(2);
  return CART.reduce(function (prev, curr) {
    return prev + curr.total;
  }, 0); // first arg, function reducer
  // second arg, reduce - initital value
  // вместо прев попадает коллбек функция
  // вместе курр попадает первый элемент массива
}

function askProDel(name) {
  if (confirm('Delete ' + name + '?')) {
    var index = CART.findIndex(function (el) {
      return el.name === name;
    });
    CART.splice(index, 1);
    viewCartTable();
    topPanel.info('Product sucsessfully deleted');
  }
}

function changeProdStatus(name) {
  var index = CART.findIndex(function (el) {
    return el.name === name;
  });
  CART[index].isBuy = !CART[index].isBuy; // сокращенная версия смены булеевых значений
  // if (CART[index].isBuy) {
  //     CART[index].isBuy = false;
  // } else {
  //     CART[index].isBuy = true;
  // }

  viewCartTable();
  topPanel.info('Product status changed');
}

var DISCOUNT = [{
  promo: 'qwe',
  type: 'fixed',
  //percent
  value: 15,
  isUsed: false
}, {
  promo: 'qwert',
  type: 'percent',
  //percent
  value: 5,
  isUsed: false
}];

function checkAndApplyDiscount() {
  var discPromo = document.getElementById('discountField').value;

  if (discPromo === '') {
    topPanel.error('Enter promo code');
    return false;
  }

  ;
  var disc = DISCOUNT.find(function (el) {
    return el.promo === discPromo;
  });

  if (index === -1) {
    topPanel.error('Promo code not found');
    return false;
  }

  ;
  var index = DISCOUNT[index];

  if (disc.isUsed) {
    topPanel.error('THis promo alredy used');
    return false;
  }

  var newTotal = calcDiscount(disc);
  DISCOUNT[index].isUsed = true;
  document.getElementById('discountValue').innerText = disc.value + (disc.type === 'fixed' ? ' UAH' : '%');
  document.getElementById('discWithTotal').innerText = newTotal.toFixed(2);
  document.getElementById('discountField').value = '';
}

function calcDiscount(disc) {
  var type = disc.type,
      value = disc.value;
  var sumTotalDisc = sumTotal();

  switch (type) {
    case 'fixed':
      return sumTotalDisc - value;

    case 'percent':
      return sumTotalDisc - sumTotalDisc / 100 * value;
  }
}
/*
const user = {
    name: 'Bob',
    gender: 'male',
    level: 'user'
}

function checkUser(user) {
    const {name, gender, level, age = 0} = user; // пример деструктуризации 
    console.log(name);
    console.log(gender);
    console.log(level);
    console.log(age);

}

const arr = [1,2,3,4,5,6]

const [a,b,c,d] = arr
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// деструктуризация - когда мы массив разбиваем на переменные 
*/

/*
function sumAll(...numbers){
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
// spread - ...
*/
//print hw

/*
const drobb = {
    // value1: {
        // ch: 0,
        // zn: 0
    // },
    // value2: {
        // ch: 0,
        // zn: 0
    // },
    setValue: function (key, ch, zn) {
        // this[key].ch = ch;
        // this[key].zn = zn;
        // скобки на Кей нужны для обрщаения к пременной
        this[key] = {
            ch: ch,
            zn: zn
        }
    },
    multiply: function() {
        const result = {
            ch: this.value1.ch * this.value2.ch,
            zn: this.value1.zn * this.value2.zn
        }
        return this.short(result);
    },
    divide: function() {
        const result = {
            ch: this.value1.ch * this.value2.zn,
            zn: this.value2.zn * this.value2.ch
        }
        return this.short(result);
    }, 
    short: function (rez) {
        //TODO: Найти наибольший общий делитель
        let nzd = 0;
        for(let i = Math.min(rez.ch, rez.zn); i > 0; i--) {
            if (rez.ch % i === 0 && rez.zn % i === 0) {
                nzd = i;
                break
            }
        }
        if (nzd !== 0 ) {
            return {
                ch: rez.ch /nzd,
                zn: rez.zn / nzd
            }
        } else {
            return rez;
        }
    }
}

drobb.setValue('value1', 1, 2)
drobb.setValue('value2', 3, 12)


const multp = drobb.multiply();
console.log(multp);

const div = drobb.divide();
console.log(div);

*/


var arr = ['foo', 'bar', 'hello', 'lorem']; //принимает коллбек функцию.
//1-й арг - сам элемент

2;
arr.forEach();