var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)


/*{ '2': 1,
    '3': 2,
    length: 4,
    splice: [Function: splice],
    push: [Function: push]
}
*/


/*
解析：
涉及知识点：
1.类数组（ArrayLike）：
一组数据，由数组来存，但是如果要对这组数据进行扩展，会影响到数组原型，
ArrayLike的出现则提供了一个中间数据桥梁，ArrayLike有数组的特性， 但是对ArrayLike的扩展并不会影响到原生的数组。

2.push方法：
push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，
可应用在类似数组的对象上。push 方法根据 length 属性来决定从哪里开始插入给定的值。
如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。
当 length 不存在时，将会创建它。 唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

3.对象转数组的方式：
Array.from()、splice()、concat()等

这个obj中定义了两个key值，分别为splice和push分别对应数组原型中的splice和push方法，因此这个obj可以调用数组中的push和splice方法，
调用对象的push方法：push(1)，因为此时obj中定义length为2，所以从数组中的第二项开始插入，也就是数组的第三项（下表为2的那一项），
因为数组是从第0项开始的，这时已经定义了下标为2和3这两项，所以它会替换第三项也就是下标为2的值，
第一次执行push完，此时key为2的属性值为1，同理：第二次执行push方法，key为3的属性值为2。此时的输出结果就是：
Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]，因为只是定义了2和3两项，没有定义0和1这两项，所以前面会是empty。
*/


// 如果将这道题改为：
var obj = {
    '2': 3,
    '3': 4,
    'length': 0,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)


/*
此时的打印结果就是：
{
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    length: 2,
    splice: [Function: splice],
    push: [Function: push]
}
*/


/*
原理：此时length长度设置为0，push方法从第0项开始插入，所以填充了第0项的empty
至于为什么对象添加了splice属性后并没有调用就会变成类数组对象这个问题，
这是控制台中 DevTools 猜测类数组的一个方式：
https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/event_listeners/EventListenersUtils.js#L330
*/
