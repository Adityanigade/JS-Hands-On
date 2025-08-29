function Bank(bankName, location, ifscCode,branchCode) {
  
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
}


const yesbank = new Bank("Yesbank","Pune",7412222633,741852);
console.log("Deatils of Yes",yesbank);

const sbiBank = new Bank("SBI Bank","Natepute",741852963,784595);
console.log("Details of SBI",sbiBank);

const mahBank = new Bank("Maharashtra Bank","Dharmpuri",741852963,74185);
console.log("Details of Maharashtra",mahBank);

const axisBank = new Bank("Axis Bank","Natepute",74185296352,963852);
console.log("Details Of Axis", axisBank);

Bank.prototype.OpenTime ="9 AM IST";
Bank.prototype.CloseTime = "6 pm IST";


console.log(`Open Time of SBI Bank is : ${sbiBank.OpenTime},  And its Closing Time Is : ${sbiBank.CloseTime}`);
console.log(`Open Time Of Axis Bank is : ${axisBank.OpenTime}, And Its Closing Time Is : ${axisBank.CloseTime}`);
console.log(`Name of Bank : ${yesbank.bankName}, ${yesbank.branchCode}, And Open Time Is : ${yesbank.OpenTime}`);





