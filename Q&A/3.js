var fullname = 'a';
var obj = {
    fullname: 'b',
    prop: {
        fullname: 'c',
        getFullname: function () {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());


// c a


/*
解析：原因在于 'this' 指向的是函数的执行环境，'this' 取决于其被谁调用了，而不是被谁定义了。
对第一个 'console.log()' 语句而言，'getFullname()' 是作为 'obj.pro' 对象的一个方法被调用的，
因此此时的执行环境应该是这个对象。另一方面，但 'getFullname()' 被分配给 'test' 变量时，
此时的执行环境变成全局对象('window')，原因是 'test' 是在全局作用域中定义的。因此，
此时的 'this' 指向的是全局作用域的 'fullname' 变量，即 a。
*/
