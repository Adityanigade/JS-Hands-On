var weekDay = function(dayNum){
 switch (dayNum) {
    case 1:
        console.log(`${dayNum} - Monday`); 
        break;
    case 2:
        console.log(`${dayNum} - Tuesday`); 
        break;
    case 3:
        console.log(`${dayNum} - Wed`); 
        break;
    case 4:
        console.log(`${dayNum} - Thur`); 
        break; 
    case 5:
        console.log(`${dayNum} - Friday`); 
        break;
    case 6:
        console.log(`${dayNum} - Sat`); 
        break;
    case 7:
        console.log(`${dayNum} - Sunday`); 
        break;   
    default:
        console.log(`${dayNum} - Invalid Input`); 
        break;
 }
 console.log(`== END of switch case=====`);
 
}
weekDay(5);
weekDay(9);































// break is jump statsement
// hook is when we not give break in switvch case then it run cases where break is present
// for loop - when condition is write then only run for loop ,when condition not write then it not run 