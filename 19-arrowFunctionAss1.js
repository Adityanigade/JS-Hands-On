let arrow = ()=>{
console.log("Good Morning, Today is Monday");

};
arrow(); 

let arrow1 = (v1,v2,v3=1)=> {
          console.log(`Multiplication is : ${v1*v2*v3}`);
          
};
arrow1(5,5,2);
arrow1(10,4);


let add = (...ele) => {
    let addition = 0;
    ele.forEach((element) => {
        addition = addition+element;
    });
    return addition;
};

let result1 = add(100, 100, 200, 349, 756);
console.log(`Addition of number = ${result1}`);



let add1 = (...ele) => {
    let addition = "";
    ele.forEach((element) => {
        addition = addition+element;
    });
    return addition;
};
let result2 = add1("I am"," Learning"," ES6"," Features"," in Depth");
console.log(`Addition of Words is : ${result2}`);


  

    

 
