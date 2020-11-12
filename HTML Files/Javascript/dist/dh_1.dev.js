"use strict";

var student = {
  name: 'Ram',
  age: 20,
  hobbies: ['dance', 'music'],
  greet: function greet() {
    console.log("Good day");
  },
  address: {
    city: 'Banglore',
    state: 'KAR'
  }
};

for (var prop in student) {
  var stud = student[prop];
  console.log(stud);
}

console.log(student.name);
console.log(student.address.city);
student.greet();