console.log([2, 1, 0].reduce(Math.pow));
console.log([].reduce(Math.pow));

/*
A. 2 报错
B. 2 NaN
C. 1 报错
D. 1 NaN
*/


//C


/*
解析：arr.reduce(callback[, initialValue])
reduce 接受两个参数，一个回调，一个初始值
回调函数接受四个参数 previousValue, currentValue, currentIndex, array
需要注意的是 If the array is empty and no initialValue was provided, TypeError would be thrown.
所以第二个会报异常. 第一个表达式等价于 Math.pow(2, 1) => 2; Math.pow(2, 0) =>1
*/
