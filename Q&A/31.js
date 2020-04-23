function fn() {
    getValue = function () {
        console.log(1);
    };
    return this;
}
fn.getValue = function () {
    console.log(2);
};
fn.prototype.getValue = function () {
    console.log(3);
};
var getValue = function () {
    console.log(4);
};
function getValue() {
    console.log(5);
}

getValue();
fn().getValue();
getValue();
new fn.getValue();
new fn().getValue();



//4  1  1  2  3


/*
解析：
考察知识点：
考察面试者的JavaScript的综合能力，变量定义提升、this指针指向、运算符优先级、原型、继承、
全局变量污染、对象属性及原型属性优先级等知识

第一问 getValue();
1.直接调用 getValue 函数，就是访问当前上文作用域内的叫 getName 的函数，所以关注点就是在4,5上；
2.两个坑；
    一是变量声明提升，JavaScript解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，
即使写代码的时候是写在最后面，也还是会被提升至最前面。
    二是函数表达式和函数声明的区别，函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，
该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。
3.所以第一问的答案就是4,5的函数声明被4的函数表达式覆盖了

第二问 fn().getValue();
1.fn().getValue()，先执行了 fn 函数，然后调用 fn 函数的返回值对象的 getValue 属性函数。
2.注意，fn 函数中的第一句  getValue = function () { console.log (1); };  是一句函数赋值语句，注意它没有var声明，
执行到这时，实际上，将外层作用域的 getValue 函数修改了；
3.之后，fn 函数返回 this，this 的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定 this 到底指向谁，
而此处的直接调用方式，this 指向 window 对象，所以此处相当于执行 window.getValue()，现在 getValue 已经被修改成
console.log(1)，所以输出 1

第三问 getValue()；
第二问中，执行完 fn 函数，getValue 函数已经被修改了，现在已经是console. log(1)，所以这里输出1

第四问 new fn.getValue();
1.这里是考察JS的运算符优先级问题，可以参考 MDN 的运算符优先级，
2.点的优先级是18，new 无参数列表优先级是17, 点的优先级高，所以这里相当于new (fn. getValue())
3.当点运算完后又因为有个括号()，此时就是变成 new 有参数列表，new 有参数列列表的优先级是18,所以直接执行new。
这是为什么遇到（）不先函数调用再new,因为函数调用的优先级是17,优先级低于new有参数列表的优先级
4.最终就是相当于将getValue函数 function () { console. log(2);};作为构造函数来执行，所以输出2

第五问 new fn().getValue();
1.与第四问的区别就是有括号无括号，这里带括号是 new 有参数列表，new 有参数列表的优先级是18， 点的优先级也是18，优先级相同按从左到右的顺序执行。
2.所以这里是先执行有参数列表，再执行点的优先级，最后再函数调用
3.这里涉及到一个知识点，fn 作为构造函数有返回值，在JS中构造函数可以有返回值也可以没有
    a.没有返回值，返回实例化的对象
    b.有返回值，检查其返回值是否为引用类型。
        非引用类型，如基本类型(String ,Number，Boolean，Null, Undefined)则与无返回值相同，实际返回其实例化对象。
        引用类型，实际返回值为这个弓|用类型
4.这里fn函数返回的是 this，this 在构造函数中本来就代表当前实例化对象，最终 fn 函数返回实例化对象。
最终调用，实例化对象的 getValue 函数，因为在 fn 构造函数中没有为实例化对象添加任何属性，当前对象的原型对象(prototype)中寻找getValue函数。所以输出3。
*/
