function Foo() {
    Foo.a = function () {
        console.log(1);
    }
    this.a =function () {
        console.log(2);
    }
}
Foo.prototype.a = function () {
    console.log(3);
}
Foo.a = function () {
    console.log(4);
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();


//4  2  1


/*
解析：
1. Foo.a() 这个是调用 Foo 函数的静态方法 a，虽然 Foo 中有优先级更高的属性方法 a，
        但 Foo 此时没有被调用，所以此时输出 Foo 的静态方法 a 的结果：4
2. let obj = new Foo(); 使用了 new 方法调用了函数，返回了函数实例对象，
        此时 Foo 函数内部的属性方法初始化，原型方法建立。
3. obj.a(); 调用 obj 实例上的方法 a，该实例上目前有两个 a 方法：一个是内部属性方法，另一个是原型方法。
        当这两者重名时，前者的优先级更高，会覆盖后者，所以输出：2
4. Foo.a(); 根据第2步可知 Foo 函数内部的属性方法已初始化，覆盖了同名的静态方法，所以输出：1
*/
