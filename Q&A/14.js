function f() {
    const a = f.prototype,
        b = Object.getPrototypeOf(f)
    console.log(a === b);
}
f();


//false


/*
解析：f.prototype 是使用 new 创建的 f 实例的原型。
而 Object.getPrototypeOf 是 f 函数的原型。
a === Object.getPrototypeOf(new f()) //true
b === Function.prototype //true
*/