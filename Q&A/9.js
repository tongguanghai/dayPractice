const num = {
        a: 10,
        add() {
            return this.a + 2;
        },
        reduce: () = > this.a - 2,
    };
console.log(num.add());
console.log(num.reduce());


//12
// NaN


/*
解析：注意，add 是普通函数，而 reduce 是箭头函数。
对于箭头函数，'this' 关键字指向是它所在上下文（定
义时的位置）的环境，与普通函数不同！这意味着当我们
调用 reduce 时，它不是指向 num 对象，而是指其定义时
的环境（window）。没有值 a 属性，返回'undefined'。
*/
