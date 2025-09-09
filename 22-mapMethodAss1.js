const arrayNumbers=[20,11,40,25,30,11,9,31,60,2,19];
console.log(arrayNumbers);

const add = arrayNumbers.map((element)=> element+10);
console.log(`add 10 in element ${add}`);


const cube = arrayNumbers.map((element)=> element**3);
console.log(`cube of element ${cube}`);


const indexadd= arrayNumbers.map((element, index) => element+ index);
console.log(`index value add in corresponding elements: ${indexadd}`);