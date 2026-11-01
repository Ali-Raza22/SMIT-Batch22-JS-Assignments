                    // Section-A
// Question-01
var fullName = "Ali Raza"
var age = 18
var city= "Karachi"
var courseName = "Web and App development" 
var instituteName = "SMIT" 

console.log(`My name is ${fullName}.`);
console.log(`I'm ${age} years old.`);
console.log(`I live in ${city}.`);
console.log(`I'm learning ${courseName}.`);
console.log(`My institute is ${instituteName}.`);

// Question-02 

var language = "JavaScript"
let topic= "For Loop"
const batchNumber= 23

console.log(`My favorite programming language is ${language}`);
console.log(`I'm lerning  ${topic}`);
console.log(`My batch nomber is ${topic}`);

// Question-03

var name ="Ali Raza"
var Marks = 90
var pass= true
var noVelue;
var empty= null 

console.log(typeof name);
console.log(typeof Marks);
console.log(typeof pass);
console.log(typeof noVelue);
console.log(typeof empty);

//  Question-04

console.log(`var studentName; , 'Right'`);
console.log(`var 1ststudent; , start from number 'Wrong'`);
console.log(`var _totalMarks; , 'Right'`);
console.log(`var my-name; , Hyphen use is 'Wrong'`);
console.log(`var $price; , 'Right'`);
console.log(`var class; , JavaScript's reserved words use is 'Wrong'`);
console.log(`var userAge; , 'Right'`);
console.log(`var first name; , space don't allowed 'Wrong'`);
console.log(`var total_amount; , 'Right'`);
console.log(`var let; , JavaScript's reserved words use is 'Wrong'`);

                    // Section-B
// // Question-05
// var userInput1 = +prompt("First Number")
// var userInput2 = +prompt("Second Number")

// console.log(`Addition: ${userInput1 + userInput2}`);
// console.log(`Subtraction: ${userInput1 - userInput2}`);
// console.log(`Multiplication: ${userInput1 * userInput2}`);
// console.log(`Division: ${userInput1 / userInput2}`);
// console.log(`Modulus: ${userInput1 % userInput2}`);

// // Question-06
// var product1= +prompt("Product 01")
// var product2= +prompt("Product 02")
// var product3= +prompt("Product 03")
// var totalBill=product1+product2+product3
// var discount= totalBill / 10

// console.log(`Total Bill: Rs. ${totalBill}`);
// console.log(`Discount: Rs. ${discount}`);
// console.log(`Total Bill: Rs. ${totalBill -discount}`);

// Question-07
var A = 10 +  5*2 // first Multiplication 5*2=10 then 10 +10=20
var B = (10+5) *2 // bracket solve and open (10+5)=15 then 15*2=30
var C = 20/2 + 3*4 -5 // first divide solve 20/2=10 then multiply solve 3*4=12 after that 10+12=22 then subtraction 22-5=17
var D = 5+2 * (8-3) / 5 // first bracket solve and open (8-3)=5 then divided by 5 5/5=1 then 5+2=7 7 * 1 =7
var E = 30%4 + 6*2 // first solve Modulus 30%4=2 then Multiplication 6*2=12 2 +12=14

console.log(E);

                    // Section-C
// Question-08
// var firstName= prompt("Enter your first name")
// var lastName= prompt("Enter your last name")
// var city= prompt("Enter your city")
// var fullName=firstName + " " + lastName
// console.log(`Wellcome ${fullName}.`);
// console.log(`You are from ${city}.`);

// // Question-09
// var birthYear= +prompt("Enter your birth year")
// var approximate=2026 - birthYear
// console.log(approximate);

// // Question-10
// var english = +prompt("Enter your English marks 0 to 100")
// var math = +prompt("Enter your Math marks 0 to 100")
// var science = +prompt("Enter your Science marks 0 to 100")
// var comuter = +prompt("Enter your Comuter marks 0 to 100")
// var urdu = +prompt("Enter your Urdu marks 0 to 100")
// var obtained = english+math+science+comuter+urdu
// var percentage= obtained/500 *100
// console.log(`Obtained Marks: ${obtained}`);
// console.log(`Total Marks: 500`);
// console.log(`Percentage: ${percentage} %`);

                    // Section-D
// Question-11
// var pkr = +prompt("Enter PKR:")
// var pkrToDoller = pkr/280
// console.log(`Equivalent USD: $${pkrToDoller}`);

// Question-12
var basicSalary = +prompt("Enter your Basic Salary")
var houseAllowance = basicSalary/5
var medicalAllowance = basicSalary/10
var grossSalary = basicSalary + houseAllowance + medicalAllowance 
var tax = basicSalary * 5 / 100
var netSalary = grossSalary - tax

// OutPut
console.log(`Basic Salary: Rs.${basicSalary}`);
console.log(`House Allowance: Rs.${houseAllowance}`);
console.log(`Medical Allowance: Rs.${medicalAllowance}`);
console.log(`Gross Salary: Rs.${grossSalary}`);
console.log(`Tax Deduction: Rs.${tax}`);
console.log(`Net Salary: Rs.${netSalary}`);





