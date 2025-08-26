let professor = {
    firstName: "Elon",
    lastName : "Musk",
    age: 25,
    isMarried: true,
    contact:9638527414,
    designation: "HR",
   
    degrees: {
        engineering: "CSC",
        PHD: "ADV Computing",
        MBA: "HR",
        
    },
     certificates: ["HRP", "IFE", " SCJP", "OCJP"],
};
console.log(professor);
console.table(professor);



console.log(`5. add new property : ${professor.totalExperience = "14 years"}`);


professor.age = 35;
console.log(`6. Age modify : ${professor.age}`);


professor.certificates.splice(2,0,"Oracle");
console.log(`7. Oracle added at index 2 : ${professor.certificates}`);

console.log(`8. last element is : ${professor.certificates[professor.certificates.length-1]}`);




for (const element of professor.certificates) {
    console.log(`9. using for of loop : ${element}`);
    
}












