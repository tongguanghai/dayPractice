console.log([typeof  null, null instanceof Object]);


//[ 'object', false ]

/*
解析：typeof 返回一个表示类型的字符串.
    typeof 的结果列表
        Undefined   "undefined"
        Null        "object"
        Boolean     "boolean"
        Number      "number"
        String      "string"
        Symbol      "symbol"
        Function   "function"
        Object      "object"

instanceof 运算符用来检测构造函数的 prototype 属性是否存在于某个实例对象的原型链上.
    instanceof:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
*/
