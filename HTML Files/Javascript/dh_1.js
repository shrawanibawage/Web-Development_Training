var student = {
    name:'Ram',
    age : 20,
    hobbies:['dance','music'],
    greet: function(){
    console.log("Good day");
    },
    address:{
    city:'Banglore',
    state:'KAR'
    }
    }
    
    for(const prop in student)
    {
    var stud=student[prop];
    console.log(stud);
    }
    console.log(student.name);
    console.log(student.address.city);
    student.greet();