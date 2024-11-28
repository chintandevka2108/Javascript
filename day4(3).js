// Prompt the user for distance and time
let distance = parseFloat(prompt("Enter the distance travelled in meters:"));
let time = parseFloat(prompt("Enter the time taken in seconds:"));
// Calculate speed
if (distance > 0 && time > 0) {
  let speed = distance / time;
  // Display speed
  alert("The speed is " + speed.toFixed(2) + " m/s");
} else {
  alert("Please enter valid positive numbers for distance and time.");
}