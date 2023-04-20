
// Test all the given values
let testCases = [
    {num1: 50, num2: 51, expected: "101 is greater than 100"},
    {num1: 99, num2: -2, expected: "97 is greater than 0"},
    {num1: 0, num2: 101, expected: "101 is greater than 100"},
    {num1: 500, num2: -500, expected: "0 is equal to 0"},
    {num1: -1000, num2: 0, expected: "-1000 is a negative number"},
    {num1: -5, num2: 0, expected: "-5 is a negative number"}
  ];
  
  // Loop through all the test cases
  for (let i = 0; i < testCases.length; i++) {
    // Initialize num1 and num2 with the input values
    let num1 = testCases[i].num1;
    let num2 = testCases[i].num2;
    
    // Calculate the sum of num1 and num2
    let sum = num1 + num2;
    
    // Check the sum using if/else if/else statements based on the number line criteria
    if (sum < -1000) {
      console.log(sum + " is less than -1000");
    } else if (sum < 0) {
      console.log(sum + " is a negative number");
    } else if (sum === 0) {
      console.log(sum + " is equal to 0");
    } else if (sum > 0 && sum <= 100) {
      console.log(sum + " is larger than 0");
    } else if (sum > 100) {
      console.log(sum + " is greater than 100");
    }
    
    // Check if the output matches the expected result for this test case
    if (sum + " " + testCases[i].expected === testCases[i].expected) {
      console.log("Test case " + (i + 1) + " passed");
   
  }
}