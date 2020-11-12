var MyStudent = /** @class */ (function () {
    function MyStudent(name, mobile, city, company, age) {
        var _this = this;
        if (company === void 0) { company = "ABc"; }
        this.name = name;
        this.mobile = mobile;
        this.city = city;
        this.company = company;
        this.age = age;
        this.printDetails = function () {
            var hobbies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                hobbies[_i] = arguments[_i];
            }
            console.log(_this.name + " is from " + _this.city);
            console.log("" + _this.name);
            console.log(hobbies);
        };
    }
    return MyStudent;
}());
var stud = new MyStudent('Raju', 1290, 'Bengaluru', 'ABC', 28);
stud.printDetails('Sports', 'Music');
var stud1 = new MyStudent('Raju', 1290, '', '', 23);
stud1.printDetails();
