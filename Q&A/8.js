var foo = {
    bar:function () {
        return this.baz;
    },
    baz:1
};
console.log(typeof (f = foo.bar)());

//undefined

/*
解析： 将 foo.bar 赋值给 f，相当于 f()，故其 this 指向 window
*/

console.log(typeof (f = foo.bar.bind(foo))());//改变this指向