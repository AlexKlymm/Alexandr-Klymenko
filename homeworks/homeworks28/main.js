// const year = new Date().getFullYear();
// for(let i=year; i>(year - 60); i--) {
//     console.log(i);
// }

function task1 () {
    const num = parseInt(document.getElementById('task_1_number').value);
    let rez = '';
    let i = 0;
    while( i < num) {
        rez += '#';
        i++;
    }
    document.getElementById('task_1_result').innerText = rez;
}

function task2() {
    const num = parseInt(document.getElementById('task_2_number').value);
    let rez = '';
    let i = num;
    while( i >= 0) {
        rez += i+' ';
        i--;
    }
    document.getElementById('task_2_result').innerText = rez;
}

function task4() {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
    let rez = '';
    const minNum = num1<num2 ? num1 : num2;
    let i = 1;
    while (i <= minNum / 2) {
        if (num1%i==0 && num2%i==0) {
            rez += i+' ';
        }
        i++;
    }
    if(minNum == num1) {
        if(num2 % num1 == 0) {
            rez += num1;
        }
    } else {
        if(num1 % num2 == 0) {
            rez += num2;
        } 
    }
    document.getElementById('task_4_result').innerText = rez;
}

function numbersSum() {
    let num1 = parseInt(document.getElementById('sumNumber__Input--1').value);
    let num2 = parseInt(document.getElementById('sumNumber__Input--2').value);
    let rez = 0;
    if (num1 > num2) {
        num2--;
        while (num1 > num2) {
            num2++;
            rez += num2;
        }
    } else if (num1 < num2) {
        num1--
        while (num1 < num2) {
            num1++;
            rez += num1;
        }
    }

    document.getElementById('sumNumber__Result').innerText = rez;
}

function divideNumber() {
    let num1 = parseInt(document.getElementById('divideNumber__Input--1').value);
    let num2 = parseInt(document.getElementById('divideNumber__Input--2').value);
    let rez = '';

    document.getElementById('divideNumber__Result').innerText = rez;

}