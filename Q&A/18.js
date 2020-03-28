const value = 'Value is' + !!Number(['0']) ? 'tgh' : 'undefined';
console.log(value);


//tgh


/*
解析：+ 优先级大于 ？
所以原题等价于 'Value is false' ? 'tgh' : 'undefined'
而不是 'Value is' + (false ? 'tgh' : 'undefined')
*/
