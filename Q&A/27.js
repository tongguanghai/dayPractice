var a1 = {}, b1 = '123', c1 = 123;
a1[b1] = 'b';
a1[c1] = 'c';
console.log(a1[b1]);
var a2 = {}, b2 = Symbol('123'), c2 = Symbol('123');
a2[b2] = 'b';
a2[c2] = 'c';
console.log(a2[b2]);
var a3 = {}, b3 = {key: '123'}, c3 = {key: '456'};
a3[b3] = 'b';
a3[c3] = 'c';
console.log(a3[b3]);


//c  b  c


/*
知识点：
1.对象的键名只能是 字符串 和 Symbol 类型
2.其他类型的键名会被转化成字符串类型
3.对象转字符串默认会调用 toString 方法

解析：
在 a1 中，a1[b1] = 'b' ; a1[c1] = 'c' ; c1 的键名会被转换成字符串 '123' 覆盖掉 b1 ,所以结果为 'c'
在 a2 中，b2，c2 都是 Symbol 类型，不需要转换，任何一个 Symbol 类型的值都是不相等的，所以不会覆盖，结果为 'b'
在 a3 中 , b3，c3 都是 object 类型，作为键名会调用 toString 方法转换为字符串 [object Object]，c3 覆盖 b3 的值，结果为 'c'

扩展：
除了上面的 Symbol，如果不想被覆盖值，可以使用 ES6 提供的 Map，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，
是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

例如：

var a = new Map(),b = 123 , c = '123';
a.set(b,'b);
a.set(c,'c');
a.get(b); //'b'
a.get(c); // 'c'

var map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123

Object 和 Map 类似的是都允许你按键存取一个值，删除键，检测一个键是否绑定了值。
因此过去我们一直把 Object 当作是 Map 使用，不过 Map 和 Object 还是又重要区别的：
1.Object 键只能是字符串或者 Symbol 类型，但 Map 的键可以是任意值，包括函数、对象、基本数据类型。
2.Map 中的键值是有序的，而添加到对象中的键不是，因此，当对他们进行遍历时，Map 对象是按插入的顺序返回键值
*/

