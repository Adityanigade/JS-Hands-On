let add = (p1, p2)=>{
    console.log("Inside add function....");
    console.log(`Addition is: ${p1+p2}`);
}
add(10, 20);

console.log("======= Arrow function with return value ==========");
let square = (n1)=>{
    let result = n1*n1;
    return result;
}
let returnValue = square(5);
console.log(`Square of 5 is: ${returnValue}`);


let array= [2,3,4,5,6];

console.log("====== WAP to print odd numbers =========");
array.forEach( (currentValue)=>{
    if (currentValue%2!=0) {
        console.log(currentValue);
    }
});


console.log("====== WAP to print Add numbers =========");
var addi=0;
array.forEach((element)=>{
    addi=addi+element
});
console.log(addi);


console.log("===== Traverse the Map =========");
const students = new Map();
students.set(11, "Elon");
students.set(22, "Bill");
students.set(33, "Jeff");
students.set(44, "Larry");
students.set(55, "Stew");
students.set(66, "Mark");
students.forEach((value, key)=>{
    console.log(`KEY: ${key}, VALUE: ${value}`);
    
});


    



