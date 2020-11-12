//IIFE concept
(function wish(name){
    console.log('hello '+name)
})('Geetha');
var sum=function(n1,n2,n3){
    return n1+n2+n2;
}
console.log(sum(10,20,25));
function avgOfNum(x,y){
    var sum=function(){
        return x+y;
    }
    return sum()/2;
}
function avgofNums(x,y){
    return function(){
        return x+y;
    }()/2;
}
function avg(x,y){
    return function(){
        return x+y;
    };
}
var result=avgOfNum(10,20);
console.log(result);
console.log(avgofNums(10,20));
result= avg(10,20);
console.log(result());