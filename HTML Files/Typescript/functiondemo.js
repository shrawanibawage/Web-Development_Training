function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 40, 50);
function userDetails(name, city) {
    if (city === void 0) { city = 'Bengaluru'; }
    console.log('name ' + name);
    console.log('city ' + city);
}
userDetails('Raju');
userDetails('Raju', 'Ooty');
var greet = function (msg) {
    return msg;
};
console.log(greet('Have a great day'));
greet = function (msg) {
    return 'welcome ' + msg;
};
console.log(greet('Hello'));
