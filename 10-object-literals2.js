console.log("======== Traverse the object ==========");
let emp = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}
for (const key in emp) {
    const value = emp[key]; 
    console.log(`Key: ${key}, Value: ${value}`);
}


console.log("====== Check is the property available or not ?=======");
console.log("age" in emp);
console.log("city" in emp);

console.log("========= Object freezing ==============");
const stud = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}
// stud = {

// }
// console.log(stud);
Object.freeze(stud);

stud.age = 100;
console.log(stud);




console.log("========== Object.assign() ===========");
console.log("======== 1. Cloning an object =======");

const personStew = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}

const clonedObject = Object.assign({}, personStew );
console.log(clonedObject);

console.log("======== 2. Merge the object =======");
const address = {
    city: "Pune",
    country: "India",
    pin: "411057"
}
// Object.assign(personStew, address);
// console.log(personStew);

// Object.assign(address, personStew);
// console.log(address);

const mergedObject = Object.assign({}, personStew, address);
console.log(mergedObject);

