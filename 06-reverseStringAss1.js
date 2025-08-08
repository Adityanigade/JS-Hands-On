function reverseString(str){
   
   var char = "";
for (let index = str.length-1; index >=0; index--) {
    if (str.charAt(index)== " ") {
        continue;
    }
   char = char + str.charAt(index);
}
console.log(`Given String is: "${str}" ,and Reverse String is: ${char}`);
}
reverseString("Hard work always pays back");
reverseString("Soon i will be Angular IT champ");





