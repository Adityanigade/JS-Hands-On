function stringHandsOn(){
    var str="   Hey you are doing good, keep it up  ";
    console.log("==========1==========");
    
    console.log(`Given string is: ${str}`);

    console.log("==========2==========");

    console.log(`Length of given string is: ${str.length}`);

    console.log("==========3==========");


    var strtrim= str.trim();
    console.log(`Remove leading and trailing extra spaces: ${strtrim} `);
    console.log(`Lenght of string after trim: ${strtrim.length-1}`);

    console.log("==========4==========");

    var firstChar= strtrim.charAt(0);
    console.log(`First char after trim: ${firstChar}`);

    var lastChar = strtrim.charAt(33);
    console.log(`Last char after trim: ${lastChar}`);

    console.log("==========5==========");

    var totalWords= strtrim.split(" ");
    console.log(`Total words after trim: ${totalWords.length}`);

    console.log("==========6==========");

    var index = strtrim.indexOf("good");
    console.log(`The index of word good is: ${index}`);

    console.log("==========7==========");

    var subString= strtrim.slice(22);
    console.log(`The subString starting from index 22 is: ${subString}`);

    console.log("==========8==========");

      var strending= strtrim.endsWith("up");
     console.log(`String end with word up: ${strending}`);

     console.log("==========9==========");

      var srtStart = strtrim.startsWith("Hey");
     console.log(`String start with Hey: ${srtStart}`);

     

     
    
    
    

    

    

    
    
    
    
}
stringHandsOn()