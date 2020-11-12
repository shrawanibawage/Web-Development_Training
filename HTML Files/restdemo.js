function sumNum(a,b){
    console.log(a+b);
}

sumNum();
sumNum(10,20);

function sumNums(a,b,...args){
    var sum = 0;
    for (let i in args){
        sum+=i;
    }
    console.log(sum);
    console.log("a",a);
    console.log("b",b);
    console.log(args);
}
sumNums(10,20);
sumNums(10,20,60);
sumNums(50,40,60,48,75);
