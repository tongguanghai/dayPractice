async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');


/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/


/*
解析：
知识点：
考察的是js中事件循环和回调队列。注意以下几点
1.Promise 优先于 setTimeout 宏任务。所以，setTimeout 回调会在最后执行。
2.Promise 一旦被定义，就会立即执行
3.Promise 的 reject 和 resolve 是异步执行的回调，所以，resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 前调用。
4.await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象

迷惑点：

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

//相当于
function async1() {
    return new Promise((resolve, reject) => {
        console.log('async1 start');
        async2().then((result) => {
            console.log('async1 end');
        })
        resolve()
    })
}

function async2() {
    return new Promise((resolve) => {
        console.log('async2');
        resolve()
    })
}

执行流程分析：

1.首先，事件循环从宏任务（macrotask）队列开始，这个时候，宏任务队列中，只有一个script（整体代码）任务；
从宏任务队列中取一个任务出来执行。
a.首先执行 console.log('script start')，输出 'script start'。
b.遇到 setTimeout 把 console.log('setTimeout') 放到macrotask队列中。
c.执行 async1()，输出 'async1 start' 和 'async2'，把 console.log('async1 end') 放到micro队列中。
d.执行到 promise，输出 'promise1'，把 console.log('promise2') 放到micro队列中。
e.执行 console.log('script end')，输出 'script end'

2.macrotask执行完会执行microtask，把microtask quene里面的microtask全部拿出来一次性执行完，所以
会输出 'async1 end' 和 'promise2'

3.开始新一轮事件循环，去除一个macrotask执行，所以会输出 'setTimeout'。
*/
