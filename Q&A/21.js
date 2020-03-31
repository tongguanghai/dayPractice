//下面代码中 a 在什么情况下会打印出 1 ？
var a = ?
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

//答案一
var  a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}

/*
如果原始类型和对象比较，对象会转为原始类型的值在进行比较。
对象转换为原始类型的值，先调用对象的 valueOf 方法，如果返回的还是对象，再接着调用 toString 方法
*/

//答案二

var a = [1,2,3];
a.join = a.shift;

/*
比较巧妙的方式，array也是对象，
对于数组对象，toString 方法返回一个字符串，
该字符串由数组中的每个元素的 toString() 方法返回值，
再经过调用 join() 方法连接（由逗号隔开）组成。
数组 toString 方法会调用本身的 join() 方法，
这里把自己的 join() 方法改写为 shift() 方法，
每次返回第一个元素，而且每次数组删除第一个值，正好可以使判断成立。
*/

//答案三

var i = 0;
with({
    get a(){
        return ++i;
    }
}){
    if(a==1 && a==2 && a==3){
        console.log(1);
    }
}

/*
with 也是被严重不建议使用的对象，这里也是利用他的特性再代码块中利用对象的 get 方法动态返回 i
*/

//答案四

var val = 0;
Object.defineProperty(window,'a',{
    get:function(){
        return ++val;
    }
})

/*
全局变量也相当于 window 上定义的一个属性，
这里用 defineProperty 定义了 a 和 get 也使其动态返回值，和 with 有一些类似。
*/

//答案五

let a = {
    [Symbol.toPrimitive]: ((i) => () => ++i) (0)
}

/*
ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。
我们之前再定义类的内部私有属性时，习惯使用 ___xxx，
这种命名方式避免别人定义相同的属性名覆盖原来的属性，
有了 Symbol 之后，我们完全可以用 Symbol 值来代替这种方法，而且完全不用担心被覆盖。
除了定义自己使用的 Symbol 值以外，
ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。
Symbol.toPrimitive 就是其中一个，它指向一个方法，表示该对象被转换为原始类型的值时，
会调用这个方法，返回该对象对应的原始类型的值，这里就是改变这个属性，把他的值改为一个 闭包 返回的函数。
*/

