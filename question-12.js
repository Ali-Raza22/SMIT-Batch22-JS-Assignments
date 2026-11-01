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
