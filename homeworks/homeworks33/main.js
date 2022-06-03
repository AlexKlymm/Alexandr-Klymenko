/*
const arr = ['foo', 'hello', 'bar', 'lorem', 'Ipsumdolor', 'Audi']
const arrObj = []

const arrShort = []

let opts = '';
//принимает кол-бек функция как правило стрелочную функцию
arr.forEach(( el, index)=>{
    opts += '<option value ="' +index+'">'+el+'</option>'+"\n";
    arrObj.push ({
        key:index,
        value: el
    })
    if(el.length<=4) {
        arrShort.push(el);
    }
});

console.log('arrShort', arrShort,);

const arrShort2 = arr.filter(el=>el.length<=4);

console.log(opts);

// создает новый массив
const arrObj2 = arr.map((el, index) =>{
    return {
        key: index,
        value: el
    }
});
console.log('arrShort2', arrShort2);

console.log('arrObj2', arrObj,);
*/


// ============================= DOM BOM ======================

//умова:
//Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться.
//При повторном нажатии – текст должен снова отображаться.
const text = 'lorem ipsum dolor sit anet.';

const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);

const button = document.createElement('button');
button.setAttribute('type', 'button')


button.innerText = 'Click to toggle text';

button.onclick = function () {
    p.innerText = p.innerText === '' ? text : '';
}

const wrap = document.querySelector('#text_wrap');

wrap.append(div);
wrap.prepend(button);

//стилi
const style = {
    body: {
        backgroundColor: '#444'
    },
    div: {
        border: '1px solid #999',
        padding: '10px 20px',
    },
    button : {
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: "#fff",
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px'
    },
    bar: {
        height: '40px',
        border: '1px solid pink',
        borderRadius: '7px',
        margin: '20px auto'
    },
    scale: {
        height: '38px',
        backgroundColor: 'blue',
        width: '0'
    }
};

function applyStyle(styles, elem) {
    for(let prop in styles) {
        elem.style[prop] = styles[prop];
    }
}

applyStyle(style.div, div);
applyStyle(style.body, document.body);
applyStyle(style.button, button);

//умова:
// Создать html-страницу с progressbar и кнопкой, при нажатии на которую 
// заполненность progressbar увеличивается на 5%.

const bar = document.createElement('div');
const scale = document.createElement('div');
const buttonForScale = document.createElement('button');
buttonForScale.setAttribute('type', 'button');
buttonForScale.innerText = 'add 5%';
//куди додаємо що ? - спосіб запам'ятати цей процесс
bar.append(scale);

const progress_wrap = document.querySelector('.progress_wrap');

bar.append(scale);
progress_wrap.append(bar);
progress_wrap.append(buttonForScale);

applyStyle(style.bar, bar);
applyStyle(style.scale, scale);
applyStyle(style.button, buttonForScale);

buttonForScale.onclick = function () { 
    if (parseInt(scale.style.width) < 100) {
        scale.style.width = (parseInt(scale.style.width) + 5) + '%';
    } else {
        buttonForScale.setAttribute('disabled', 'disabled');
        buttonForScale.style.opacity = '0.7'
    }
}
//стилі зверху у style

