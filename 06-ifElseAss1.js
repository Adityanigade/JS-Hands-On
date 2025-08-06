console.log("++++++++++++++ Task 1EVEN and ODD ++++++++++++++++++++");

var check= function(num){
    if (num%2==0) {
        console.log(`${num} Is EVEN`);
        
    } else {
        console.log(`${num} Is ODD`);
    }
}
check(45);
check(70);
check(67);
check(40);
check(25);

console.log("+++++++++++++++++++++ task 2 Eligible or Not+++++++++++++++++++++++++");


var eligible = function(age){
    if (age>=18) {
        console.log(`${age} You are eligible for voiting`);
        
    } else {
        console.log(`${age} You are not eligible voting`); 
    }
}
eligible(18);
eligible(20);
eligible(25);
eligible(15);
eligible(35);
eligible(17);
eligible(17.6);

console.log("++++++++++++++++++++++Task 3++++++++++++++++++++++");

  


var morechar =function(str){
    if (str.length > 10) {
        console.log("String containing more than 10 character");
        
    } else {
        console.log("String not containing more than 10 character")
    }
}

morechar("JavaScript-ES6");

console.log("+++++++++++++++++Task 4++++++++++++++++++");


var starwith= function(str){

    if (str.startsWith("Java")) {
        console.log(`${str} String  Starts with java` );
        
    } else {
        console.log(`${str} String not Starts with java `);
    }
}
starwith("JavaScript Language: ");
starwith(" Programming language: ");

