var x = 1;
if (function f() {}) {
    x += typeof f;
}
console.log(x);


//1undefined

/*
解析： 条件判断为假的情况有：0,false,'',null,undefined,未定义对象。
函数声明写在运算符中，其为 true，但放在运算符中的函数声明在执行阶段是找不到的。
另外，对未声明的变量执行 typeof 不会报错，会返回 undefined。
*/