// Array of names
var names = ["Alice", "Bob", "Charlie"];
// Intentional error:
console.log(names[3]);
// Correction
if (names.length > 3) {
    console.log(names[3]);
}
else {
    console.log("Index 3 is out of bounds.");
}
