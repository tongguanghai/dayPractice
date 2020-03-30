var arr = [0,1];
arr[5] = 5;
newArr = arr.filter(
    function (x) {
        return x === undefined;
    }
);
console.log(newArr.length);


//0


/*
解析：filter 为数组中的每个元素调用一次 callback函数，并利用所有使得
callback返回 true 或等价于 true 的值的元素创建一个新数组。callback只会
在已经复制的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
那些没有通过callback测试的元素会被跳过，不会被包含在新数组中。
也就是说从 2-4 都是没有初始化的’坑‘！这些索引并不存在于数组中。
在array的函数调用的时候是会跳过这些’坑‘的。
*/
