let Vehicle = class{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    set details(discount){
        this.brand = (this.brand).toUpperCase();
        this.price = this.price - discount;
    }
    get details(){
        return this.brand+" "+this.price;
    }
}
vehicle = new Vehicle('Honda',45000);
console.log(vehicle);
vehicle.details=1500;
console.log(vehicle.details);