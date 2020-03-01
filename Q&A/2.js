
(function () {
    var a = b = 5;
})();

console.log(b);
console.log(a);

//5 ReferenceError:a is not defined

//解析： 在这个立即执行函数表达式（IIFE）中包括两个赋值操作，其中‘a'使用’var'关键字进行声明，
// 因此其属于函数内部的局部变量（仅存在于函数中），相反，‘b'被分配到全局命名空间。


//拓展
(function () {
    'use strict'
    var a = b = 5;
})();

console.log(b);

// 另一个需要注意的是，这里没有在函数内部使用[严格模式]
// (http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/)(`use strict`;)。
// 如果启用了严格模式，代码会在输出b时报错`Uncaught ReferenceError: b is not defined`,
// 需要记住的是，严格模式要求你显式的引用全局作用域。