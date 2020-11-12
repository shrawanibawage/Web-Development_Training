"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var student = {
  name: 'Ram',
  age: 20,
  hobbies: ['dance', 'music'],
  greet: function greet() {
    console.log('Good Day');
  },
  address: {
    city: 'Banglore',
    state: 'KAR'
  }
};

for (var prop in student) {
  var stud = student[prop];

  if (stud instanceof Array) {
    for (var i in stud) {
      console.log('hobby: ' + stud[i]);
    }
  } else if (_typeof(stud) == 'object') {
    for (var _i in stud) {
      console.log(key + ':' + stud[key]);
    }
  } else if (typeof stud == 'function') {
    stud();
  } else console.log(stud);
}