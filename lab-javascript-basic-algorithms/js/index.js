// Iteration 1: Names and Input
let hacker1 = "Ashraf";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Evgeny";
console.log(`The navigator's's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i] + " ";
}
// another way
reversedName = hacker2.split("").reverse().join("");

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let whoIsGreater = hacker2.localeCompare(hacker1);
switch (whoIsGreater) {
  case 1:
    console.log("The driver's name goes first.");
    break;

  case -1:
    console.log("Yo, the navigator goes first definitely.");
    break;

  default:
    console.log("What?! You both have the same name?");
}

// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, massa quis consectetur efficitur, odio ex malesuada ante, et tincidunt metus odio eu arcu. Integer a lorem quis diam varius eleifend id id justo. Donec dictum blandit augue. Nullam vulputate libero sit amet augue dignissim, eget molestie ipsum commodo. Vivamus id purus at odio efficitur fermentum ac ut nulla. Duis feugiat a lorem at ultrices. Pellentesque quis sagittis quam. Aenean felis tellus, sollicitudin in nibh vel, efficitur maximus diam. Sed molestie interdum pellentesque. Quisque at augue imperdiet, pellentesque velit sit amet, hendrerit erat. Nam luctus odio quis nibh viverra fringilla. In porta tincidunt diam, sed ultrices ex venenatis ut. Donec fermentum quam ac nunc pharetra, in convallis enim vehicula. Nam et nisl nibh. Proin sed justo a sapien rhoncus imperdiet at eu est.
Aenean non rutrum leo. Cras aliquam, elit pharetra congue laoreet, justo sapien viverra erat, vitae condimentum neque risus sit amet est. Ut accumsan efficitur tellus nec convallis. Aliquam pellentesque dignissim pretium. Pellentesque tempus enim sit amet purus fringilla, vitae tristique ante volutpat. Praesent et pharetra justo, vitae sollicitudin sapien. Donec et vehicula quam, sit amet pretium orci. Donec efficitur mauris eget lacinia tempus.
Suspendisse ut elit rutrum, venenatis purus convallis, ornare quam. Aliquam non aliquam tellus. Aliquam eu finibus dolor. Nam vehicula, felis in ullamcorper pellentesque, justo elit rutrum ante, et euismod magna diam eget arcu. Ut felis ex, interdum tristique risus nec, pellentesque condimentum quam. Maecenas non orci est. Sed semper in lorem et laoreet. Cras bibendum quam vel diam luctus molestie. Vivamus tempus leo dui, id feugiat dolor laoreet vitae. Aliquam blandit elit sit amet urna varius viverra. Sed volutpat ultricies finibus. Cras blandit cursus mi, in vehicula est dapibus suscipit. Aenean pulvinar mi sit amet feugiat scelerisque. Morbi sit amet metus quis turpis mattis consequat sit amet ut enim.`;

console.log(lorem.length);
let result = lorem.split(" ").filter((word) => word === "et").length;
console.log(result);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
let phraseToCheck = "race car";

// let phraseToCheck = "A man, a plan, a canal, Panama!" ;

let trimmedPhrase = phraseToCheck
  .split(" ")
  .join("")
  .split(",")
  .join("")
  .split("!")
  .join("")
  .toLowerCase();
console.log(trimmedPhrase);

let reversed = trimmedPhrase.split("").reverse().join("");

console.log(reversed);

if (trimmedPhrase === reversed) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}