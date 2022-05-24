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
