let rollNumbers = [11, 22, 33, 44, 55, 66, 77];
console.log(rollNumbers);

console.log("======== Length Of the Array ===========");
console.log(`Length of array is: ${rollNumbers.length}`);

console.log("======== Accessing Array Elements using Index =============");
const elementAtIndex2 = rollNumbers[2];
console.log(elementAtIndex2);
console.log(`0th Index element is: ${rollNumbers[0]}`);
console.log(`Last Element of the array: ${rollNumbers[rollNumbers.length-1]}`);

console.log("======== Updating Array Elements using Index =============");
rollNumbers[3] = 99;



console.log("======== indexOf() =============");
let rollNum = [11, 22, 33, 44, 55, 44, 44];
const indexOf44 = rollNum.indexOf(44);
console.log(`Index of element 44 is: ${indexOf44}`);

console.log(`Index of element 101 is: ${rollNum.indexOf(101)} `);


console.log("======== Traversing array element using traditional for loop =============");
for (let index = 0; index < rollNum.length; index++) {
    const element = rollNum[index];
    console.log(element);
}



console.log("======== Traversing array element in reverse order =============");
let array = [11, 22, 33, 44, 55, 44, 48];
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element); 
}


console.log("======== Log the even elements from the array =============");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2==0) {
        console.log(element);
    }
}


console.log("======== sum the array elements =============");
let arrayNum = [2, 1, 4, 5, 9, 6];
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    sum = sum + element;
}
console.log(sum);

console.log("======== Adding or Inserting elements in the beginning use of .unshift()=============");
let arrayNumber = [2, 1, 4, 5, 9, 6];
console.log(`Before adding or inserting elements `);
console.log(arrayNumber);
console.log(`After adding or inserting elements `);
arrayNumber.unshift(300, 400, 999);
console.log(arrayNumber);


console.log("======== Adding or Inserting elements at the end of the array use push()=============");
let arrayNumberr = [2, 1, 4, 5, 9, 6];
console.log(`Before adding or inserting elements `);
console.log(arrayNumberr);
console.log(`After adding or inserting elements `);
arrayNumberr.push(44, 22, 22);
console.log(arrayNumberr);

console.log("======== Removing or Deleting elements from the end of the array use pop() =============");
let arrayNums = [2, 1, 4, 5, 9, 6];
console.log(`Before Removing or Deleting elements `);
console.log(arrayNums);
console.log(`After Removing or Deleting elements `);
arrayNums.pop();
console.log(arrayNums);

console.log("======== Removing or Deleting the first element use shift()=============");
let arrayNumms = [2, 1, 4, 5, 9, 6];
console.log(`Before Removing or Deleting the first element `);
console.log(arrayNumms);
console.log(`After Removing or Deleting the first element `);
arrayNumms.shift();
console.log(arrayNumms);




