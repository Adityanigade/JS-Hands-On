console.log("=======1: Function with no-arg ,no-returen type=======");

function myname(){
    console.log("Aditya");
    
}
myname();
console.log("=======2=======");
 
function game(){
    console.log("BGMI");

    
}
game();

console.log("=======3: Function with arg but no return type=======");

function personalDetails(firstName,lastName,collegeName){
console.log(`firstName: ${firstName}, lastName: ${lastName}, collegeName: ${collegeName}`);

}

personalDetails("Aditya","Nigade","Spcoet");


console.log("=======4: Function with arg and return type=======");

function addThreeValue(num1,num2,num3){
    console.log(`num1: ${num1}, num2; ${num2}, num3: ${num3} `);
    var result = num1+num2+num3;
    console.log(`Addition is: ${result} `);
    
}    
addThreeValue(10.23,600,40);

function addThreeValue2(word1,word2,word3){
    console.log(`word1: ${word1}, word2; ${word2}, word3: ${word3} `);
    var result = word1+word2+word3;
    console.log(`Addition is: ${result} `);
    
}    
addThreeValue2("Hello","Good","Morning");



