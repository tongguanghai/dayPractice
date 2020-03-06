var company = {
    address: 'shanghai'
};
var tgh = Object.create(company);
delete tgh.address
console.log(tgh.address);


//shanghai



/*
解析：这里的 tgh 通过 prototype 继承了 company 的 address。
tgh 自己并没有 address 属性。所以 delete 操作符的作用是无效的。

知识点：

**1.delete使用原则：delete 操作符用来删除一个对象的属性。**
**2.delete在删除一个不可配置的属性时在严格模式和非严格模式下的区别:**
（1）在严格模式中，如果属性是一个不可配置（non-configurable）属性，删除时会抛出异常;
（2）非严格模式下返回 false。
**3.delete能删除隐式声明的全局变量**：这个全局变量其实是global对象(window)的属性
**4.delete能删除的：**
（1）可配置对象的属性（2）隐式声明的全局变量 （3）用户定义的属性 （4）在ECMAScript 6中，
通过 const 或 let 声明指定的 "temporal dead zone" (TDZ) 对 delete 操作符也会起作用
**delete不能删除的：**
（1）显式声明的全局变量 （2）内置对象的内置属性 （3）一个对象从原型继承而来的属性
**5.delete删除数组元素：**
（1）当你删除一个数组元素时，数组的 length 属性并不会变小，数组元素变成undefined
（2）当用 delete 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。
（3）如果你想让一个数组元素的值变为 undefined 而不是删除它，可以使用 undefined 给其赋值而不是使用 delete 操作符。此时数组元素是在数组中的
**6.delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。**
*/
