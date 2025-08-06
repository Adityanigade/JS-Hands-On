console.log("=============Task1===============");
function squareOfWordLenght(str){
       var str = str.length;
       console.log(`Lenght of Strings: ${str}`);
    
       console.log(`Square of String  lenght: ${str*str}`);
       
}
squareOfWordLenght("JavaScript");
squareOfWordLenght("Google Chrome");
squareOfWordLenght("Web Developer Smart");


console.log("=============Task 2===============");

var stringOp=function (){
str="i am MERN Stact Developer";
var lenght = str.length;
var noOfWord= str.split(" ");
console.log(`Lenght of String is: ${lenght} and after divide by total number of words in string: ${lenght/noOfWord.length} `);

console.log(`Lenght of String is: ${lenght} and after multiple by total number of words in string: ${lenght*noOfWord.length} `);




}
stringOp();