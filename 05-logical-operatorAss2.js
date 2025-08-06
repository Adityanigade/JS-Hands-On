console.log("++++++++++++++++++++++++Step 1+++++++++++++++++++++++++");

function maleMarriageEligibility(gender, age, boyName){
var result = age>=21 ? `Hey ${boyName} you are eligible for marriage`
            : `Hey ${boyName} you are not eligible for marriage`;
        return result;
}
var returnval= maleMarriageEligibility("Male", 25, "Billgates" );
console.log(`boy1 : ${returnval}`);

var returnval= maleMarriageEligibility("Male", 17, "Stew Jobs" );
console.log(`boy2 : ${returnval}`);

console.log("++++++++++++++++++++++++Step 2+++++++++++++++++++++++++");


function femaleMarriageEligibility(gender, age, girlName){
    var res= age>=18 ? `Hey ${girlName} You are eligible for marriage`
    : `Hey ${girlName} you are not eligible for marriage`;
    return res;
    
}
var returnval = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(`Girl1 : ${returnval}`);

var returnval =  femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`Girl2 : ${returnval}`);

  
