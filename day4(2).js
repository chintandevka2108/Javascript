let weight = (prompt("Enter your weight in kilograms:"));
let height =  (prompt("Enter your height in meters:"));

if (weight > 0 && height > 0) {
    let bmi = weight / (height ** 2);
    console.log(`Your BMI is ${bmi.toFixed(2)}`);
} else {
    console.log("Please enter valid positive numbers for weight and height.");
}
