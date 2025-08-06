console.log("================Find Greater Number=================================");


function greaterNumber(n1, n2){

result = n1>n2 ? n1 : n2;

console.log(`Greater number btween ${n1} and ${n2} is: ${result}`);



}
 greaterNumber(10, -10);


greaterNumber(800, 899);



console.log("================Even or Odd Number=================================");

function isEvenOrOddNum(num){
var result = num%2==0 ? "Even" : "Odd";
return result;

}
var resultValue = isEvenOrOddNum(29);
console.log(`Given no 29 is: ${resultValue }`);

var resultValue = isEvenOrOddNum(36);
console.log(`Given no 36 is: ${resultValue }`);

var resultValue = isEvenOrOddNum(40);
console.log(`Given no 40 is: ${resultValue }`);

var resultValue = isEvenOrOddNum(0);
console.log(`Given no 0 is: ${resultValue }`);

var resultValue = isEvenOrOddNum(101);
console.log(`Given no 101 is: ${resultValue }`);




console.log("================Even or Odd Number=================================");

 function wordLenght(str){
       var str = str.length;
       var res = str%2==0 ? "Even":"Odd";
       return res;
}
var numb= wordLenght("Javascript");
console.log(`Javascript is : ${numb}`);

var numb= wordLenght("developer");
console.log(`developer is : ${numb}`);

var numb= wordLenght("Google");
console.log(`Google is : ${numb}`);















// > is used to to find greater number 
// < is used to find smaller number
// >= is used to find greater or equal value
// <= is used to find smaller or equal value
// ? 1 : 2 is used in give return value , when condition ckecked after that return one value bbetwwen this two value 
