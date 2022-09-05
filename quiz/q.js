'use strict'
function name(){
    var name = 'masi';
    console.log(this.name);
}
function greet(){
    console.log("hello");
}
var arr = [{name:"n"},{name:"A"},{name:"Ab"}];
for(let i=0;i<arr.length;i++){
    setTimeout(name.call(arr[i]),0);
    setTimeout(greet(),0)
}