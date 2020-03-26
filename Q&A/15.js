function showCase(value) {
    switch (value){
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefind');
            break;
        default:
            console.log('Do not know!');
    }
}
showCase(new String('A'));


// Do not know!


/*
解析：switch 是严格比较，String 实例和字符串不一样。
var str1 = 'str';
var str2 = new String('str');
console.log(typeof str1);// "string"
console.log(typeof str2);// "object"
*/