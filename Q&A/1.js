var a = [0];
if(a){
    console.log(a == true);
}else{
    console.log(a);
}


//false

//解析： 当a出现在if的条件中时，被转成布尔值，而 Boolean([0]) 为 true，
//所以就进行下一步判断 a == true，在进行比较时，[0]被转成了 0，所以 0 == true 为 false。


//拓展
var a = [1];
if(a){
    console.log(a == true);
}else{
    console.log(a);
}