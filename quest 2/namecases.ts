// nameCases.ts

let personName: string = "John Doe";

// Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print in titlecase
const titleCaseName = personName
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(`Titlecase: ${titleCaseName}`);
