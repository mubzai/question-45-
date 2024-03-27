// nameCases.ts
var personName = "John Doe";
// Print in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Print in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Print in titlecase
var titleCaseName = personName
    .toLowerCase()
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log("Titlecase: ".concat(titleCaseName));
