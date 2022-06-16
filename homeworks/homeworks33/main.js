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
// const text = 'lorem ipsum dolor sit anet.';

// const div = document.createElement('div');
// const p = document.createElement('p');
// div.append(p);

// const button = document.createElement('button');
// button.setAttribute('type', 'button')


// button.innerText = 'Click to toggle text';

// button.onclick = function () {
//     p.innerText = p.innerText === '' ? text : '';
// }

// const wrap = document.querySelector('#text_wrap');

// wrap.append(div);
// wrap.prepend(button);

// //стилi
// const style = {
//     body: {
//         backgroundColor: '#444'
//     },
//     div: {
//         border: '1px solid #999',
//         padding: '10px 20px',
//     },
//     button : {
//         borderRadius: '4px',
//         backgroundColor: 'blue',
//         color: "#fff",
//         cursor: 'pointer',
//         fontSize: '20px',
//         padding: '7px'
//     },
//     bar: {
//         height: '40px',
//         border: '1px solid pink',
//         borderRadius: '7px',
//         margin: '20px auto'
//     },
//     scale: {
//         height: '38px',
//         backgroundColor: 'blue',
//         width: '0'
//     }
// };

// function applyStyle(styles, elem) {
//     for(let prop in styles) {
//         elem.style[prop] = styles[prop];
//     }
// }

// applyStyle(style.div, div);
// applyStyle(style.body, document.body);
// applyStyle(style.button, button);

// //умова:
// // Создать html-страницу с progressbar и кнопкой, при нажатии на которую 
// // заполненность progressbar увеличивается на 5%.

// const bar = document.createElement('div');
// const scale = document.createElement('div');
// const buttonForScale = document.createElement('button');
// buttonForScale.setAttribute('type', 'button');
// buttonForScale.innerText = 'add 5%';
// //куди додаємо що ? - спосіб запам'ятати цей процесс
// bar.append(scale);

// const progress_wrap = document.querySelector('.progress_wrap');

// bar.append(scale);
// progress_wrap.append(bar);
// progress_wrap.append(buttonForScale);

// applyStyle(style.bar, bar);
// applyStyle(style.scale, scale);
// applyStyle(style.button, buttonForScale);

// buttonForScale.onclick = function () { 
//     if (parseInt(scale.style.width) < 100) {
//         scale.style.width = (parseInt(scale.style.width) + 5) + '%';
//     } else {
//         buttonForScale.setAttribute('disabled', 'disabled');
//         buttonForScale.style.opacity = '0.7'
//     }
// }
// //стилі зверху у style


//================Theory=================
    //DOM
// DOM - (global object model) - дает возможность изменять любой контент страницы,
// представляя его(весь контент) как объект. Document - (объект) гланая "точка входа".
// Любое изменение может быть осуществленно с помощью document. Пример:
// document.body.style.background = "#443" 
// ДОМ описывает: структуру, события, действия
    //BOM
// BOM (browser object model) - это комплекс дополнительных объектов
// данных хостом-средой для работы с всем, кроме документа.
// alert(navigator.userAgent)

// ДОМ дерево
// document.body.style.background = 'purple'
// setTimeout(() => document.body.style.background = 'green', 3000);
// ALL HTML/XML - представляются внутри брауера как дом деревою
// теги - узлы-елементы
// текст - текстовые узли и се остальное так же является элементами дома

//навигация по ДОМ'у
// К любому элементу древе можно обращаться 
// через document.(и в соответствии с иерархией):
// document.body // document.head // document.body.div // document.head//header
// document - ключ доступу к глобальному объекту
// Если по каким-то причинам объект к которому мы стучимся - недоступен, 
// то он вернет null, который в ДОМ специфике оначает "не существует"
// childNodes - список html элементов
// firstChild and lastСhild - дают доступ к первому элементу или последнему дочернему элементу.
// hasChildNodes() - проверка на дочерние элементы
// ДОМ-колекции - массиво подобные интрактивные объекты содержащие информацию о чем-либо
// внутри ДОМ-структуры (пример: childNodes).
// мы можем перебрать массив с помощью for...of:
// for( let node of document.body.childNodes) {
    // alert(node);
// }
// Он итерованный, поэтому это работает (цикл)ю Мы так же можем юзануть Symbol.iterator
// МЕТОДЫ МАССИВА НЕ БУДУТ РАБОТАТЬ И ОНИ ВЕРНУТ АНДЕФАЙНЕД, но мы можем создать
// настоящий массив от нашей колекции:
// alert(Array.from(document.body.childNodes).filter) 
// ДОМ-колекции всего-лишь для считывания. ДОМ - динамичен и чувствует любое изменение
// for...in  не юзать! он переберет свойства объекта!!!

// parentsNode - родительский узел, nextSibling - следующий узел (братский)
// previousSibling - предыдущий узел

// Обращение к элементам как к элементам, а не как к узлам:
// firstElementChil, lastElementChild, previousElementChil, nextElementChil, children
//  parentElement (if parent != html). 
// if html - parentElement,then we need use parent.document

// ПОИСК ЧЕРЕЗ getELement & querySelector
// let elements = document.querySelectorAll( 'ul > li:last-child')
// for (let elem of elements) {
    // alert(elem.innerHTML)
// } Он (метод) возвращает все элементы внутри elem, 
// которые отвечают заданному css-селектору. 

// let elements = document.querySelector( 'ul > li:last-child')
// вернет ОДНУ ли-шку внутри ПЕРВОГО ЖЕ ul 

// let elements = document.querySelectorAll( 'ul > li:last-child') 
// вернет нодлист( массивоподобный ) с перечнем последних ли-шек внутри ul 

// matches:
// elem.matchs - ничего не ищет, а проверяет, соответсвует ли элемент CSS-селектору.
// Возвращает true or false
// for (let elem of document.body.children) {
    // if(elem.matches('a[href$="zip"]')) {
        // alert("qwe:" + elem.href)
//     // } 
// } в данном случае, если результат инструкции = тру, тогда выполняетс условие,
// т.е если сравнение прошло успешно и элемент действительно ссответсвует условию,
// тогда срабатывает тело инструкции

//closest - ищет ближайшего предка, который соотвествует селектору
// let chapter = document.querySelector('.chapter');

// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.contents'));

// getElementsBy part:
// elem.getElementsByTagName(tag or *(all tags)) - ищет и все элементы по тегу
// или же если вместо тега заюзан * - то все теги.
// elem.getElemntsbyClassName(className) - возвращает се элементы по классу.
// document.getELementsByName(name) - возвращает элементы 
// с заданным атрибутом name во всем документе.

// Все методы getElementsBy* вощвращают живую колекцию, т.е коллекцию в текущем
// состоянии, которая всегда будет переобновляться при малекшем изменениию
// В отличии от querySelector, который всегда озвращает статическую колекцию.

// На последок elemA.contains(elemB)