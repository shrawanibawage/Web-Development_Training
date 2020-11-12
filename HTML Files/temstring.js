var name='Raju'
var city = 'Bangalore';
var msg='Have a good day.'+
        'welcome to jS';
//using backticks
var msg=`Have a good day.
          welcome to jS`;
          
var details = name+' is from '+city; 
console.log(details);
console.log(name,'is from',city)
console.log(msg);
{
        const a=20;
}
// console.log(a);


//template strings
var details = `${name} is from ${city}`; 
console.log(details);
console.log(`${name} is from ${city}`);
console.log(msg);

let price = 90;
let quantity =45;

console.log(`Total cost is, ${price*quantity}`);
console.log('Total cost is',(price*quantity));