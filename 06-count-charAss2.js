function countChar(str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "A" || char == "a") {
            count = count + 1;
        }
    }
    console.log(`Given string is: "${str}" ,and Total number of character 'A' and 'a' is: ${count}`);
}
countChar("I AM Learning JavaScript, The Language of internet");
countChar("My favourite movie is LAggAn");
