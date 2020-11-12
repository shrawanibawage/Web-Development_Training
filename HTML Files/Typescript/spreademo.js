var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var myarr = [1, 2, 3, 4, 5, 6];
var new_arr = __spreadArrays(myarr, [7, 8, 9]);
for (var _i = 0, new_arr_1 = new_arr; _i < new_arr_1.length; _i++) {
    var i = new_arr_1[_i];
    console.log(i);
}
var student = { name: 'Kumaran', age: 20 };
var details = { mobile: 987890, city: 'Bangalore', state: 'KAR' };
var newstudent = __assign(__assign({}, student), details);
var newemployee = __assign(__assign(__assign({}, student), details), { salary: 1000 });
console.log(newemployee);
for (var j in newstudent) {
    console.log(j, newstudent[j]);
}
