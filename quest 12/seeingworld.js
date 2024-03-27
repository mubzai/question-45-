var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Karachi", "Lahore", "Peshawar", "Multan", "Faisalabad"];
// Print original order
console.log("Original Order:", placesToVisit);
// Print alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Show that array is still in its original order
console.log("Original Order After Sorting:", placesToVisit);
// Print reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
// Print the list
console.log("Updated Dinner Invitation (List):");
console.log(placesToVisit);
