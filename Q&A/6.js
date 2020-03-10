function f() {
    return f;
}

console.log(new f() instanceof f);

//false

/*
解析： a instanceof b 用于检测a是不是b的实例。如果题目f中没有 return f，则答案明显为 true；
而在本题中 new f() 其返回的结果为 f 的函数对象，其并不是 f 的一个实例。
*/
