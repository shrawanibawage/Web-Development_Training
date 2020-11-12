var Student = function(name,city){
    this.name =name;
    this.city = city;
    this.getDetails = function(){
        console.log(this.name,this.city);
    }
}
student = new Student('Raju','Bangalore');
console.log(student.name,student.city);
student.getDetails();
 
Student.prototype.age=20;
Student.prototype.greet = function(message){
    console.log(message,this.name);
}
console.log(student.age);
student.greet('Welcome');
 
student1 = new Student('Ram','Ooty');
student.age = 20;
student1.greet('Great Day');
console.log(student1.name,student1.city,student1.age);