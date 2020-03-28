//变量a会被GC吗，为什么
function test() {
    var a = 1;
    return function () {
        eval("")
    }
}
test();


//不会


/*
解析：因为 eval 会欺骗词法作用域，例如
function test(){eval("var a = 1")}，
创建了一个 a 变量，不确定 eval 是否对 a 进行了引用，所有为了保险，不对其进行优化。
相对，try catch，with 也不会被回收，with 会创建新的作用域。
*/
