
let values = ["I am a string", false, null, undefined, 0, ""];

for (let i = 0; i < values.length; i++) {
  if (values[i]) {
    console.log(true);
  } else if (values[i] === false) {
    console.log("The boolean value false is falsy");
  } else if (values[i] === null) {
    console.log("The null value is falsy");
  } else if (values[i] === undefined) {
    console.log("undefined is falsy");
  } else if (values[i] === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
  } else if (values[i] === "") {
    console.log("The empty string is falsy (the only falsy string)");
  }
}
