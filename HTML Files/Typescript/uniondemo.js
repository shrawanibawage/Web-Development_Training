var printVal = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome ' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score is ' + val);
    }
};
printVal('Kumaran');
printVal(10);
var printValues = function (val) {
    if (Array.isArray(val)) {
        console.log('print Array ' + val);
    }
    if (typeof (val) == 'object') {
        console.log(val);
    }
};
printValues(['Raj', 'Ram']);
printValues({ name: 'kumu' });
