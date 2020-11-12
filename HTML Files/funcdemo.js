function showFinalCost(item){
    return function calculate(costPerUnit){
            if(item>100){
                return costPerUnit*item*0.8;
            }else{
                return costPerUnit*item;
            }
    }
}

var total = showFinalCost(120);
console.log(total(5));
var fun = (a,b=10)=>console.log(a+b);
fun();
fun(500);
fun(30,20);