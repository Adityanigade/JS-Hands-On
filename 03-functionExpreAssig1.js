console.log("==============1=============");

var square = function (num) {

    var result = num * num;
    return result;
}
square();
console.log(`Square of 5 is: ${square(5)}`);
console.log(`Square of 5 is: ${square(6)}`);
console.log(`Square of 5 is: ${square(25)}`);
console.log(`Square of 5 is: ${square(100)}`);
console.log(`Square of 5 is: ${square(67.89)}`);
console.log(`Square of 5 is: ${square(59)}`);
console.log(`Square of 5 is: ${square(99)}`);

console.log("==============2=============");

console.log(`Type of function is: ${typeof square}`);

console.log("==============3=============");

var area = function (length, width) {
    return length * width;
}
console.log(`Area of rectangle is: ${area(499, 917)}`);

console.log("==============4=============");

var swapValues = function (name1, name2) {
    console.log(`Before swapping: ${name1} ${name2}`);
    temp = name1;
    name1 = name2;
    name2 = temp;
    console.log(`After swapping: ${name1} ${name2}`);
}
swapValues("Mahi", "Raina");

var swapValues = function (num1, num2) {
    console.log(`Before swapping: ${num1} ${num2}`);
    temp = num1;
    num1 = num2;
    num2 = temp
    console.log(`After swapping: ${num1} ${num2}`);
}
swapValues(55, 77);

console.log("==============5=============");

var string = function () {
    var str = "JS the most popular language of internet";

    console.log(`Total character in string : ${str.length}`);

    console.log(`Character at index 6 is: ${str.charAt(6)}`);

    console.log(`Character at index 11 is: ${str.charAt(11)}`);

    console.log(`Last character is: ${str.charAt(str.length - 1)}`);

    console.log(`First character is : ${str.charAt(0)}`);

    console.log(`Third last character is: ${str.charAt(str.length - 3)}`);

    var words = str.split(" ");
    var wNumber = words.length;
    console.log(`Total words in string is: ${wNumber}`);
    console.log(`Square of total number is: ${wNumber * wNumber}`);
}
string();




