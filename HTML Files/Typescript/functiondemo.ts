function addNumbers(...nums:number[]){
    var sum = 0;
    for(var i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10,20,30);
addNumbers(10,20,30,40,50);

function userDetails(name:string,city:string='Bengaluru'){
    console.log('name '+name);
    console.log('city '+city);
}
userDetails('Raju');
userDetails('Raju','Ooty');

var greet = function(msg:string){
    return msg;
}
console.log(greet('Have a great day'));

greet = (msg:string)=>{
    return 'welcome '+msg;
}
console.log(greet('Hello'));