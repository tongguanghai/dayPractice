function user(obj) {
    obj.name = 'tgh'
    obj = new Object()
    obj.name = '666'
}
let person = new Object();
user(person);
console.log(person.name);


// tgh

/*
解析：
对象作为参数，传递进去的是这个对象的地址，obj.name是给person这个对象赋值;
obj = new Object(),把obj指向另一个对象，obj.name现在是给这个新对象赋值，
不影响person这个变量指向的对象；两个obj指向的对象的引用地址不同。

ECMAScript中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
不过需要注意的是，基本类型的传递如同基本类型变量的复制一样，传递方式是按值传递，这意味着在函数体内修改参数的值，不会影响到函数外部。
而引用类型的值传递，如同引用类型变量的复制一样，传递方式是按引用传递，也就是传入函数的是原始值的地址，因此在函数内部修改参数，将会影响到原始值。
*/
