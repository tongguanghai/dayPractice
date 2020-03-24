const person = {name: 'tgh'};
function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));

//tgh is 5
// [Function: bound sayHi]


/*
解析：使用两者，可以传递我们想要`this`关键字引用的对象。
但是，`.call`方法会立即执行！
.bind 方法会返回函数的拷贝值，但带有绑定的上下文！它不会立即执行。
*/