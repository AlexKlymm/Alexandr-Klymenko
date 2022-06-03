"use strict";

var car = {
  Mark: 'Ferrari',
  Manufacturer: 'Italy',
  Model: 'Roma',
  'Year Edition': 2019,
  'Max Speed': 320,
  'Averege Speed': 80,
  'Max Fuel Tank': '3855',
  'Averege Fuel Consumption': '9.7l /100 km'
};
var carUl = '<div>' + '<ul>';

for (var key in car) {
  carUl += '<li><b>' + key + ':' + '</b> ' + car[key] + '</li>';
}

carUl += '</ul>' + '</div>';
document.getElementById('carView').innerHTML = '<h6>Car:</h6>' + carUl;
var driver = {
  Name: 'Alex',
  Age: 18,
  Gender: 'Male',
  'Driver Licens': true,
  'Birth Year': 2003
};

function addDriver() {
  car.driver = driver;
  var driverUl = '<div>' + '<ul>';

  for (var _key in car.driver) {
    driverUl += '<li><b>' + _key + ': ' + '</b>' + car.driver[_key] + '</li>';
  }

  driverUl += '</ul>' + '</div>';
  document.getElementById('driverView').innerHTML = '<h6>Driver:</h6>' + driverUl;
}

var fuelTank = {
  Fuel: 0
};
car.fuelTank = fuelTank;

function needRefueling() {
  var lowTank = confirm('Do you need refueling?');

  if (lowTank == true) {
    car.fuelTank = {
      Fuel: 3855
    };
  } else {
    alert('Your tank is low!');
  }

  refueling();
}

function refueling() {
  var fuelUl = '<div>' + '<ul>';

  for (var _key2 in car.fuelTank) {
    fuelUl += '<li><b>' + _key2 + ': ' + '</b>' + car.fuelTank[_key2] + '</li>';
  }

  fuelUl += '</ul>' + '</div>';
  document.getElementById('fuelView').innerHTML = '<h6>Cars fuel tank:</h6>' + fuelUl;
}

function userRoad() {
  var userRoad = parseInt(prompt('How many km need you drive?'));
  var averegeSpeed = 80;
  var requiredTime = userRoad / averegeSpeed;
  var breakTime = requiredTime / 4;
  breakTime.toFixed(1);
  var allTimeInWay = (requiredTime + breakTime).toFixed(1);

  if (getTrueDriver() == false) {
    return;
  } else {
    alert('Welcome!');
  }

  document.getElementById('userRoadResult').innerHTML = '<div>' + "\n    <h6>Your way:</h6>" + '<ul>' + '<li>' + "All way with break times: ".concat(allTimeInWay, ";") + '</li>' + '<li>' + "Way without break times: ".concat(requiredTime, ";") + '</li>' + '<li>' + "Break times: ".concat(breakTime, ";") + '</li>' + '<li>' + "Your distance way: ".concat(userRoad, "km;") + '</li>' + '<li>' + "And your averege speed; ".concat(averegeSpeed, "km/hour;") + '</li>' + '<li>' + 'I wish you nice way on the road!' + '</li>' + '</ul>' + '</div>';
}

function getTrueDriver() {
  var driverName = prompt('Write your driver and we check your driver license!');

  if (driverName != 'Alex') {
    alert('You make mistake with driver name. This driver cant use this car! Please try again!');
    return false;
  }
}

function checkFuelInRoad() {// ?
}