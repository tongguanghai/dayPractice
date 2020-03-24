console.log(["1", "2", "3"].map(parseInt));;


//[ 1, NaN, NaN ]


/*
解析：Array.prototype.map()
array.map(callback[, thisArg])
callback函数的执行规则
参数：自动传入三个参数
currentValue（当前被传递的元素）；
index（当前被传递的元素的索引）；
array（调用map方法的数组）

parseInt方法接收两个参数
第三个参数["1", "2", "3"]将被忽略。parseInt方法将会通过以下方式被调用
parseInt("1", 0)
parseInt("2", 1)
parseInt("3", 2)

parseInt的第二个参数radix为0时，ECMAScript5将string作为十进制数字的字符串解析；
parseInt的第二个参数radix为1时，解析结果为NaN；
parseInt的第二个参数radix在2—36之间时，如果string参数的第一个字符（除空白以外），不属于radix指定进制下的字符，解析结果为NaN。
parseInt("3", 2)执行时，由于"3"不属于二进制字符，解析结果为NaN。
*/
