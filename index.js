'use strict';
function app(){
    var sum=0;
    for(var i=0; i<arguments.length;i++)
    {
         sum=sum+arguments[i];
    }
    return sum
   
}

var total= app(3,5,8,10);
console.log(total);
