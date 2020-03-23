const person = {name: 'tgh'};
function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));

//tgh is 5
// [Function: bound sayHi]


/*
解析：call 和 bind 都更改了函数的 this 指向，
但是，使用 call 函数会立即执行，返回值是函数的执行结果，
bind 函数不会立即执行，返回值是更改了 this 指向的函数。
*/