function factorialOfWordCount(str){
   if (typeof str !== "string" ) {
        console.log(`Given ${str} is Invalid Input,'Unhappy Scenarios`);
        return null;
        }
        let word=str.split(" ");
        let numberOfWord= word.length;

let fact=1;
for (let index = numberOfWord; index>=1; index--) {
   fact = fact*index;
}
console.log(`Total number of words in String is: ${numberOfWord} and Factorial is: ${fact}`);
   return fact;
}

factorialOfWordCount("Revision is the mother of success");
factorialOfWordCount(NaN);
factorialOfWordCount("We never fail, we always learn, mind it");
factorialOfWordCount(null);
factorialOfWordCount("");
factorialOfWordCount("Aditya Dnyaneshwar Nigade");
factorialOfWordCount(undefined);