
		// Define test cases
let tests = [  ["cat", "cat", 6, "6"], 
["five", 5, "dog", "dawg"], 
[0, false, "horse", "horse"],
["eight", "eight", "ate", "ate"], 
[11, "eleven", "four", "for"],
["cake", "cake", "pie", "pie"]
];

// Loop through each test case
for (let i = 0; i < tests.length; i++) {
// Get the two pairs of values
let [param1A, param1B, param2A, param2B] = tests[i];

// Check if both pairs have matching values using strict equality operators
if (param1A == param1B && param2A == param2B) {
  console.log(true);
} else {
  console.log(false);
}
}
