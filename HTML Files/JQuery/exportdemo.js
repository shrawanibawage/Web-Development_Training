var Person = require('./persondetails');

var person = new Person('Ram','Bengaluru');
person.printDetails();
person.greetMessage('Have a good day ');
console.log(person.mobile);