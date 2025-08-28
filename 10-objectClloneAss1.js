let bankSbi = {
    bankName: "Sbi",
    AccType: "current",
    accno: 963852741123,
    Manager: "Elon"
};
console.log("Object 1. Bank SBI Details:", bankSbi);


let bankLocation = {
    street: "Gursale",
    city: "Malshiras",
    pin: 413109
};
console.log("Object 2. Bank Location:", bankLocation);
 const step= Object.assign(bankSbi,bankLocation);
 console.log("Clone Obj1 And Obj2",step);
 


let rateOfInterest = {
homeLoanInterest: "10%",
personalLoanInterest: "7%",
duelInterest: "15%"
};

console.log("Object 3. Rate of Interest:", rateOfInterest);


let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log("Merged SBI Details:",sbiDetails);

console.table(sbiDetails);




for (let key in sbiDetails) {

    const value = sbiDetails[key];

    console.log(`${key}:${value}`);



}