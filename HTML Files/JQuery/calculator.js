exports.add=function(number1,number2){
    dontExportThis();return parseInt(number1,2)+parseIntr(number2,2);
}
exports.multiply=function(number1,number2){
    dontExportThis();
    return parseInt(number1,10)*parseInt(number2,10);
}
exports.message='Hello world';
function dontExportThis(){
    console.log("calculator");
}