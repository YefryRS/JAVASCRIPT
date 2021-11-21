 /* El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe. */
 
 function sum(num1,num2) {
     return num1 + num2
 }

 function calc (num1,num2,callback) {
     return callback(num1,num2)
 }

 console.log(calc(2,2,sum));