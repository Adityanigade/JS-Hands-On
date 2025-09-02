const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumbers);

arrayNumbers.forEach((currentV, index, array) => {
    console.log(`Index: ${index} , Value : ${currentV}`);
});


arrayNumbers.forEach((currentVal) => {
    if (currentVal >= 0) {
        console.log(`Positive number : ${currentVal}`);
    }
});

const oddEle = [];
arrayNumbers.forEach((currentN) => {
    if (currentN <= 0) {
        oddEle.push(currentN);
    }
});
console.log("all negative number store in array ", oddEle);



arrayNumbers.forEach((currentVa, index, array) => {
    if (currentVa % 2 == 0) {
        console.log(`Even Number is: ${currentVa}`);
    }
});


var summ = 0;
arrayNumbers.forEach((element) => {
    summ = summ + element;
});
console.log(`Sum of all element is : ${summ}`);



arrayNumbers.forEach((currentNu, index) => {
    if (index % 2 == 0) {
        console.log(`Even indexed array element : ${currentNu}`);
    }
});


