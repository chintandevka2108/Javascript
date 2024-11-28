// /1. Develop a program that calculates the electricity bill based on units consumed. The rates are:///

// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 100) {
//         bill = units * 1; 
//     } else if (units <= 200) {
//         bill = (100 * 1) + ((units - 100) * 2); 
//     } else {
//         bill = (100 * 1) + (100 * 2) + ((units - 200) * 3); 
//     }

//     return bill;
// }

// let unitsConsumed = 250; // Replace with desired units
// let billAmount = calculateElectricityBill(unitsConsumed);
// console.log(`The electricity bill for ${unitsConsumed} units is $${billAmount}`);

// /2. Implement a program that calculates the smallest among four numbers entered by the user.

// function findSmallestNumber(a, b, c, d) {
//     return Math.min(a, b, c, d);
// }

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");

// if (num1 && num2 && num3 && num4) {
//     let smallest = findSmallestNumber(Number(num1), Number(num2), Number(num3), Number(num4));
//     alert(`The smallest number is ${smallest}`);
// } else {
//     alert("Invalid input! Please enter all four numbers.");
// }

// /3. Implement a program that calculates the largest among five numbers entered by the user.

// function findLargestNumber(a, b, c, d, e) {
//     return Math.max(a, b, c, d, e);
// }

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// if (num1 && num2 && num3 && num4 && num5) {
//     let largest = findLargestNumber(Number(num1), Number(num2), Number(num3), Number(num4), Number(num5));
//     alert(`The largest number is ${largest}`);
// } else {
//     alert("Invalid input! Please enter all five numbers.");
// }

// /4. Write a program to check if a number is positive, negative, or zero.


// function checkNumberType(number) {
//     if (number > 0) return "positive";
//     if (number < 0) return "negative";
//     return "zero";
// }

// let input = prompt("Enter a number:");

// if (input) {
//     let number = Number(input);
//     let result = checkNumberType(number);
//     alert(`The number is ${result}.`);
// } else {
//     alert("Invalid input! Please enter a number.");
// }


// /5. **Grading System:**
// function getGrade(score) {
//     if (score >= 90 && score <= 100) return "A";
//     if (score >= 80 && score < 90) return "B";
//     if (score >= 70 && score < 80) return "C";
//     if (score >= 60 && score < 70) return "D";
//     return "F";  // For scores 0-59
// }

// let input = prompt("Enter your score:");

// if (input) {
//     let score = Number(input);
//     if (score >= 0 && score <= 100) {
//         let grade = getGrade(score);
//         alert(`Your grade is ${grade}.`);
//     } else {
//         alert("Invalid score! Please enter a score between 0 and 100.");
//     }
// } else {
//     alert("Invalid input! Please enter a score.");
// }





