
const car = {
    Mark: 'Ferrari',
    Manufacturer: 'Italy',
    Model: 'Roma',
    'Year Edition': 2019,
    'Max Speed': 320,
    'Averege Speed': 80,
    'Max Fuel Tank': '3855',
    'Averege Fuel Consumption': '9.7l /100 km'
}

let carUl = '<div>' + '<ul>';
for (let key in car) {
    carUl += '<li><b>' +key+':'+ '</b> ' +car[key]+'</li>'
} 
carUl += '</ul>' + '</div>';

document.getElementById('carView').innerHTML = '<h6>Car:</h6>' + carUl ;

let driver = {
    Name: 'Alex',
    Age: 18,
    Gender: 'Male',
    'Driver Licens': true,
    'Birth Year': 2003
}

function addDriver() {
    car.driver = driver;
    let driverUl = '<div>' + '<ul>';
    for(let key in car.driver) {
        driverUl += '<li><b>'+key+ ': '+ '</b>' +car.driver[key]+'</li>';
    }
    driverUl += '</ul>' + '</div>';
    document.getElementById('driverView').innerHTML = '<h6>Driver:</h6>' + driverUl;
}



let fuelTank = {
    Fuel: 0
}

car.fuelTank = fuelTank;

function needRefueling () {
    let lowTank = confirm('Do you need refueling?');
    if (lowTank == true) {
        car.fuelTank = {Fuel: 3855}
    } else {
        alert('Your tank is low!');
    }
    refueling();
}
function refueling() {
    let fuelUl = '<div>' + '<ul>';
    for(let key in car.fuelTank) {
        fuelUl += '<li><b>'+key+ ': '+ '</b>' +car.fuelTank[key]+'</li>';
    }
    fuelUl += '</ul>' + '</div>';
    document.getElementById('fuelView').innerHTML = '<h6>Cars fuel tank:</h6>' + fuelUl;
}

function userRoad () {
    let userRoad = parseInt(prompt('How many km need you drive?'));
    let averegeSpeed = 80;
    let requiredTime = userRoad / averegeSpeed;
    let breakTime = (requiredTime / 4);
        breakTime.toFixed(1);
    let allTimeInWay = (requiredTime + breakTime).toFixed(1);

    if (getTrueDriver() == false) {
        return;
    } else {
        alert('Welcome!')
    }

    document.getElementById('userRoadResult').innerHTML = '<div>' +`
    <h6>Your way:</h6>` + '<ul>' +
    '<li>' + `All way with break times: ${allTimeInWay};` + '</li>' +
    '<li>' + `Way without break times: ${requiredTime};` + '</li>' +
    '<li>' + `Break times: ${breakTime};` + '</li>' +
    '<li>' + `Your distance way: ${userRoad}km;` + '</li>' +
    '<li>' + `And your averege speed; ${averegeSpeed}km/hour;` +  '</li>' + '<li>' + 'I wish you nice way on the road!' + '</li>' + '</ul>' + '</div>';
}

function getTrueDriver() {
    let driverName = prompt('Write your driver and we check your driver license!');
    if (driverName != 'Alex') {
        alert('You make mistake with driver name. This driver cant use this car! Please try again!');
        return false;
    }
}


function checkFuelInRoad() {
    // ?
}

