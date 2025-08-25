const fruits = ["Banana","Orange","Apple","Mango","Water melon"]
console.log(`Original array element:- ${fruits}`);

console.log(`1 First element in array is : ${fruits[0]}`);
console.log(`Last element in array is : ${fruits[fruits.length-1]}`);
fruits.unshift("Papaya");
console.log(`2 Papaya adding Before Banana:- ${fruits}`);
console.log(`3 Removing Mango from array :- ${fruits.splice(4,1)}`);
fruits.push("Pineapple");
console.log(`4 Add element Pineapple at Last: ${fruits}`);
fruits.splice(4,0,"Dragon Fruit")
console.log(`5 add element before water melon: ${fruits}`);
console.log(`6 replace Orange with kiwi: ${fruits[2]="Kiwi"}`);
console.log(`7 Element stating from index 1 to 4 is : ${fruits.slice(1,4)}`);
console.log(`8 only last three element is : ${fruits.slice(fruits.length-3)}`);










