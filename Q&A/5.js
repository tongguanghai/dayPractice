var foo = function bar() {
    return 12;
};
console.log(typeof bar());


//ReferenceError: bar is not defined

/*
解析： 这种命名函数表达式函数只能在函数体内有效
*/
