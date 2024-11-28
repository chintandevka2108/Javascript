let maths, english, science, average;

maths = (prompt("Enter maths marks (out of 100):"));
english = (prompt("Enter english marks (out of 100):"));
science = (prompt("Enter science marks (out of 100):"));

if (
  maths >= 0 && maths <= 100 &&
  english >= 0 && english <= 100 &&
  science >= 0 && science <= 100
) {
  average = (maths + english + science) / 3;

  console.log("Average mark:", average.toFixed(2));
} else {
  console.log("Please enter valid marks between 0 and 100 for all subjects.");
}
