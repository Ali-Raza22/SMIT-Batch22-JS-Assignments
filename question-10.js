    // Question-10
var english = +prompt("Enter your English marks 0 to 100")
var math = +prompt("Enter your Math marks 0 to 100")
var science = +prompt("Enter your Science marks 0 to 100")
var comuter = +prompt("Enter your Comuter marks 0 to 100")
var urdu = +prompt("Enter your Urdu marks 0 to 100")
var obtained = english+math+science+comuter+urdu
var percentage= obtained/500 *100
// OutPut
console.log(`Obtained Marks: ${obtained}`);
console.log(`Total Marks: 500`);
console.log(`Percentage: ${percentage} %`);
