"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.greeting = void 0;
exports.greeting = 'hello world';
function greet() {
    console.log('exported');
    ownMsg();
}
exports.greet = greet;
function ownMsg() {
    console.log('not exported');
}
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.getinfo = function () {
            console.log(_this.itemName + " \n             is of price " + _this.price);
        };
    }
    return Product;
}());
exports.Product = Product;
