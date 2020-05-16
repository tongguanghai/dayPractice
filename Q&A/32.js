var a = 10;
var foo = {
    a: 20,
    bar: function () {
        var a = 30;
        return this.a;
    }
}
console.log(foo.bar());
console.log((foo.bar)());
console.log((foo.bar = foo.bar)());
console.log((foo.bar, foo.bar)());


// 20 20 10 10

/*
解析:
第一问foo.bar()
foo调用，this指向foo，此时的this 指的是foo,输出20

第二问(foo.bar)()
给表达式加了括号，而括号的作用是改变表达式的
运算顺序，而在这里加与不加括号并无影响;相当于foo.bar()，输出20

第三问 (foo.bar=foo.bar)()
等号运算，相当于重新给foo.bar定义，即
foo.bar = function () {
    var a=10;
    return this.a;
}
就是普通的复制,一个匿名函数赋值给个全局变量
所以这个时候foo.bar是在window作用域下而不是foo = {}这一块级作用域，所以这里的this指代的是window，输出10

第四问(foo . bar，foo. bar)()
1.逗号运算符，
2.逗号表达式，求解过程是:先计算表达式1的值，再计算表达式2的值，.... 直计算到表达式n的直。最后整个逗号表达式的值是表达式n的值。
逗号运算符的返回值是最后个表达式的值。
3.其实这里主要还是经过逗号运算符后，就是纯粹的函数了，不是对象方法的引用，所以这里this指向的是window,输出10
4.第三问，第四问，一个是等号运算，一个是逗号运算，可以这么理解，
经过赋值，运算符运算后，都是纯粹的函数，不是对象方法的引用。所以函数指向的this都是windows的。

知识点:
    this绑定的四条规则

    1.默认绑定
    独立函数调用时，this 指向全局对象(window)，如果使用严格模式，
    那么全局对象无法使用默认绑定，this绑定至undefined。

    2. 隐式绑定
    函数this是指向调用者(隐式指向)
    function foo() {
        console.log( this.a);
        }
    var obj={
        a: 2
        foo: foo
        };
    obj.foo(); // 2

    obj1.obj2.foo(); // foo中的this与obj2绑定
.问题:隐式丢失
描述:隐式丢失指的是函数中的this丢失绑定对象，即它会应用第1条的默认绑定规则，从而将this 绑定到全局对象或者undefined上，
取决于是否在严格模式下运行。

以下情况会发生隐式丢失
1.绑定至上下文对象的函数被赋值给一
个新的函数，然后调用这个新的函数.
2.传入回调函数时

    3. 显式绑定
    显式绑定的核心是JavaScript内置的call(.)和apply(.)方法，call 和apply bind的this第一个参数(显示指向)

    4. new绑定
    构造函数的this是new之后的新对象(构造器)
*/

