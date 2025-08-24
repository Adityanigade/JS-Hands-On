const array = [20, 31, 40, 25, 23, 11, 29, 9, 6, 2, 11];


console.log(`1Total element available in array: ${array.length}`);


console.log(`2 first element : ${array[0]}`);
console.log(`2 Last element : ${array[array.length - 1]}`);


console.log(`3 third Last element : ${array[array.length - 3]}`);




let evenNum = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 0) {
    evenNum.push(array[index]);
  }
}
console.log(`4 Even no from array : ${evenNum}`);



let oddnum = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 1) {
    oddnum.push(array[index]);
  }

}
console.log(`5 Odd no from array : ${oddnum}`);




let sumOfEvenNum = 0;
let evenNum1 = [];
for (let index = 0; index < array.length; index++) {
  if (index % 2 == 0) {
    sumOfEvenNum = sumOfEvenNum + array[index];
  }

}

console.log(`6 the sum of even positioned array element : ${sumOfEvenNum}`);




let sumOfOddNum = 0;
let oddNum1 = [];
for (let index = 0; index < array.length; index++) {
  if (index % 2 == 1) {
    sumOfOddNum = sumOfOddNum + array[index];
  }

}

console.log(`7  sum of odd positioned array element : ${sumOfOddNum}`);



let sumOfElement = 0;
for (let index = 0; index < array.length; index++) {
  sumOfElement = array[index] + sumOfElement;
}
console.log(`8 Sum of all element from array : ${sumOfElement}`);



let multiple5 = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 5 == 0) {
    multiple5.push(array[index]);
  }

}
console.log(`9 Element that are multiple by 5 : ${multiple5}`);


console.log(`10  115 is available : ${array.includes(115)}`);


console.log(`11  23 is available  : ${array.includes(23)}`);


array.splice(3, 0, 55, 66);
console.log(`12 Inserting number 55 , 66 at index 3 : ${array}`);


array.splice(4, 3);
console.log(`13 Deleting 3 elements  from index 4 : ${array}`);
