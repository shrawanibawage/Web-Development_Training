var std = {
    name:'Ram',
    empId:20,
    hobbies:['music','sports'],
    address:{
        city:'ban',state:'KAR'
    }
}
var jsonstring = JSON.stringify(std);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj); 