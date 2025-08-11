function factorialOfNumber(num){
    if (num===null|| num===undefined|| num===NaN) {
        console.log(`Given ${num} is: Invalid Input, 'Unhappy scenarios'`)
        return null;
        
    }
var fact=1;
for (let index = num; index>=1; index--) {
   fact=fact*index;
    
}

console.log(`Factorial of ${num} is: ${fact}`);

    return fact;
}
factorialOfNumber(5);
factorialOfNumber(3);
factorialOfNumber(null);
factorialOfNumber(8);
factorialOfNumber(undefined);
factorialOfNumber(9);
factorialOfNumber(0);
factorialOfNumber(7);
factorialOfNumber(10);