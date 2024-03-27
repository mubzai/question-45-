var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest = ["Muzammil", "Mubashir", "Saim"];
var message = "You are being invited for dinner on 17-Feb-2024.";
// Original INVITATIONS TO GUESTS
console.log("INVITATION FOR DINNER AT AARAIZ KHAN'S HOUSE");
console.log("1. Dear ".concat(guest[0], ", ").concat(message));
console.log("2. Dear ".concat(guest[1], ", ").concat(message));
console.log("3. Dear ".concat(guest[2], ", ").concat(message));
// UPDATED INVITEES LIST:
// One guest can't make it
var guestWhoCantMakeIt = guest[1];
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
var updatedInvitees = __spreadArray(["Shaheer"], guest.slice(1), true);
// Print the updated invitation messages
console.log("Updated Dinner Invitation:");
console.log("Dear ".concat(updatedInvitees[0], ", ").concat(message, "."));
console.log("Dear ".concat(updatedInvitees[1], ", ").concat(message, "."));
console.log("Dear ".concat(updatedInvitees[2], ", ").concat(message, "."));
// More space available, invite three more guests
console.log("Good news! We found a bigger dinner table.");
// Add new guests
updatedInvitees.unshift("Ibrahim");
updatedInvitees.splice(Math.floor(updatedInvitees.length / 2), 0, "Rameez");
updatedInvitees.push("Yahya");
// Print new invitation messages
console.log("\nAdditional Dinner Invitation:");
updatedInvitees.forEach(function (guest) { console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us for a delightful evening.")); });
// message about inviting only two people
console.log("Apologies, the new dinner table won't arrive in time, and we can invite only two people for dinner.");
// Remove guests until only two names remain
while (updatedInvitees.length > 2) {
    var removedGuest = updatedInvitees.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
;
// Print messages to the two remaining guests
updatedInvitees.forEach(function (guest) { console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us for a delightful evening.")); });
// Remove the last two names, leaving an empty list.
updatedInvitees.pop();
updatedInvitees.pop();
// Print the empty list
console.log("\nUpdated Dinner Invitation (Empty List):");
console.log(updatedInvitees);
