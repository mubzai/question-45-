// Array of places to visit
let placesToVisit: string[] = ["Karachi", "Lahore", "Peshawar", "Multan", "Faisalabad"];

// Print original order
console.log("Original Order:", placesToVisit);

// Print alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that array is still in its original order
console.log("Original Order After Sorting:", placesToVisit);

// Print reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that array is still in its original order
console.log("Original Order After Reverse Sorting:", placesToVisit);

// Reverse order of the list and print
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse order of the list again and print
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sort array in alphabetical order and print
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort array in reverse alphabetical order and print
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);

// Print the list
console.log("Updated Dinner Invitation (List):");
console.log(placesToVisit);