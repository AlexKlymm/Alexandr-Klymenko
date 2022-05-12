function myPow () {
    const num = parseInt(prompt ('Enter integer number'));
    const num2 = parseInt(prompt ('Enter integer number 2'));
    const rez = num*num2;
    alert(rez);
}

function avgNum () {
    const num = parseInt(prompt ('Enter integer number'));
    const num2 = parseInt(prompt ('Enter integer number 2'));
    const rez = num*num2/2;
    alert(rez);
}

function sqrNum () {
    const num = parseInt(prompt ('Укажите сторону квадрата'));
    const rez = num**2;
    alert(rez);
}

function km2ml () {
    const km = parseInt(prompt('Сколько км интересует?'));
    const K = 0.621371 ;
    const ml = km*K;
    alert (`В милях это ${ml}мл`);
}

function calc () {
    const num = parseInt(prompt('Вкажіть число 1'));
    const num2 = parseInt(prompt('Вкажіть число 2'));
    const action = prompt(`Вкажіть дію`);
    let rez;
    if (action==='+'){
        rez = num + num2;
    }
    else if (action=== '-') {
        rez = num - num2;
    }
    else if (action==='*') {
        rez = num * num2;
    }
    else if (action==='/') {
        rez = num / num2;
    }
    else {
        alert ('Недопустима дія')
    }

    if (rez != undefined) {
        alert (`Результат - ${rez}`);
    }
}

function findX () {
    const a = parseInt(prompt('Укажите число 1'));
    const b = parseInt(prompt('Укажите число 2'));
    const x = b * (-1) / a;
    alert (`Икс равно : ${X}`)
}