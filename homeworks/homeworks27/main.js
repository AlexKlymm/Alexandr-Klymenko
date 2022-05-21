// let wakeUp = prompt("У котрій годині користно прокидатись зранку?");
// if (wakeUp >= 5 && wakeUp <= 9) {
//     alert("Це вірна відповідь!");
//     wakeUp++;
// } else {
//     alert("Це помилка!");
// }

// let congratz = wakeUp;
// if (congratz) {
//     alert(`Це ідеально! ${wakeUp}`);
// } else if (wakeUp != 6) {
//     alert("Лайно...");
// }


// let newYear = prompt("NY?");
// if (newYear = 31) {
//     newYear = 1;
// }

// let newNewYear = (newYear); 
// if (newNewYear) {
//     alert(`Hey! ${newNewYear}`);
// }



// let login = prompt('Write your login.', "");

// if (login === 'admin') {

//     let password = prompt('Write your password.', "");
    
//     if (password === 'TheMaster') {
//         alert('Welcome');
//     } else if (password == false) {
//         alert('Canceled');
//     } else if (password != 'TheMaster') {
//         alert('Wrong password');
//     }

// } else if (login == false){
//     alert('Canceled')
// } else if (login != 'admin') {
//     alert('I dont know you')
// }

// 

/*
const drobb = {
    // value1: {
    //     ch: 0,
    //     zn: 0
    // },
    // value2: {
    //     ch: 0,
    //     zn: 0
    // },
    result: {
        ch: 0,
        zn: 0
    },
    // setValue: function(key, ch, zn) {
    //     this.key[ch] = ch;
    //     this.key[zn] = zn;
    // }
    setValue: function(key, chisl, znam) {
        this.[key] = {
            ch: chisl,
            zn: znam
        }
    },
    multiply: function() {
        return {
            ch: this.value1.ch * this.value2.ch,
            zn: this.value1.zn * this.value2.zn
        }
    },
    divide: function() {
        const result = {
            ch: this.value1.ch * this.value2.zn,
            zn: this.value1.zn * this.value2.ch
        }
        return this.short(result);
    },
    short: function(rez) {
        if(rez.ch%rez.zn===0){
            return rez.ch / rez.zn;
        }
    }
}

drobb.setValue('value1', 1, 2);
drobb.setValue('value2', 3, 12);
// drobb.setValue('value3', 3, 25);
// drobb.setValue('value4', 4, 4);

const multp = drobb.multiply();
console.log(multp);

const div = drobb.divide();
console.log(div); */



/*
//Не повна умова
if (name !=''){

}


//Повна умова
if (name != ''){

} else {
alert('Enter your name!')
}


//Ланцюжкова умова
function numCheck (num) {
    if (num < 0) {
        alert('-');
    } else if (num > 0) {
        alert('+');
    } else if (num == 0) {
        alert('0');
    } else {
        alert('enter number');
    }
} 

function checkEmail(email) {
    if(email != ''){
        if(isValidEmail(email)){
            return true;
        } else {
            alert('email is not valid');
        }
    } else {
        alert('Enter your email');
    }
} */


function trueMath () {
    let num = 0.1 + 0.2;
    let result = num.toFixed(1);
    alert(result);
}

function strToNum () {
    let firstNum = '1';
    let secondNum = 2;
    let result = +firstNum + secondNum;
    alert(result);
}

function flashDriveMemory () {
    let flashDriveGB = parseInt(prompt('Напишіть будьласка, ємкість вашою флешки у гігабайтах?'));
    if (isNaN(flashDriveGB) || flashDriveGB == '') {
        alert('Введіть число!');
        return flashDriveMemory();
    }
    let userMemoryGB = flashDriveGB * 1024;
    let result = Math.round(userMemoryGB / 820);
    alert(`Ви можете встановити ${result} программ вагою 820 мб, тому що ваша флешка має ${flashDriveGB} гб`);
}

function schocoMarket() {
    let userMany = parseFloat(
      prompt("Введіть скільки ви маєте грошей у гаманці?")
    );
    let schoco = parseFloat(prompt("Введіть ціну шоколадки"));
    if (!schoco || !userMany) {
        alert("Введіть число!");
        schocoMarket();
    } else {
        let result = (userMany - schoco).toFixed(2);
        alert(`Ваша здача: ${result}`);
    }
  }

// function reverseNumber() {
//     let userNumber = parseInt(prompt('Напиши число та я його переверну!'));
//     let result = 0;
//         result * 10 + userNumber % 10;
//         result = Math.floor(userNumber / 10);
//     return result
//         alert(`${result}`)
// }

function depositSum () {
    let deposit = prompt('Скільки грошей хочете ви покласти у банк?');
    if (isNaN(deposit) || deposit == '') {
        alert('Введіть число!');
        return depositSum();
    }
    let percentPerYear = (deposit / 100) * 5;
    let result; 
    result = ((percentPerYear / 12) * 2).toFixed(2);
    alert(`${result} ваші проценти за два місяці`);
    return result;
}

function numCheck (num) {
    num = prompt('Введіть число.');
    if (num < 0) {
        alert('-');
    } else if (num > 0) {
        alert('+');
    } else if (num == 0) {
        alert('0');
    } else {
        alert('Введіть число.');
    }
} 

function ageCheck () {
    let userAge = prompt('Скільки тобі років?');
    if (isNaN(userAge) || userAge == '') {
        alert('Введіть число!');
        ageCheck();
    } else if (userAge) {
          
        if (userAge < 0) {
            alert('Ваш рік не може бути менший, аніж 0 років!');
        } else if (userAge > 120) {
            alert('Ваш рік не може перевищувати 120 років!');
        } else {
            alert('Ви пройшли вікову перевірку!');
        } 

    }
}

