// Author: [Aaraiz Khan]
// Date: [14-02-2024]

// Printing person's name with and without stripping whitespace.

let personnamewithwhitespace: string = " \tAaraiz \n";

// print the name with white spaces

console.log(`person name with white space: ${personnamewithwhitespace}`);

let strippedname: string = personnamewithwhitespace.trim();
console.log(`strippedname: ${strippedname}`);

