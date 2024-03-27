let guest: string[] = ["Muzammil", "Mubashir", "Saim"];
let message: string = "You are being invited for dinner on 17-Feb-2024.";

// Original INVITATIONS TO GUESTS

console.log("INVITATION FOR DINNER AT AARAIZ KHAN'S HOUSE");

console.log(`1. Dear ${guest[0]}, ${message}`);

console.log(`2. Dear ${guest[1]}, ${message}`); 

console.log(`3. Dear ${guest[2]}, ${message}`);

// UPDATED INVITEES LIST:

// One guest can't make it
let guestWhoCantMakeIt: string = guest[1];
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
let updatedInvitees: string[] = ["Shaheer", ...guest.slice(1)]; 

// Print the updated invitation messages
console.log("Updated Dinner Invitation:");
console.log(`Dear ${updatedInvitees[0]}, ${message}.`);
console.log(`Dear ${updatedInvitees[1]}, ${message}.`);
console.log(`Dear ${updatedInvitees[2]}, ${message}.`);

// More space available, invite three more guests

console.log("Good news! We found a bigger dinner table.");

// Add new guests

updatedInvitees.unshift("Ibrahim"); 
updatedInvitees.splice(Math.floor(updatedInvitees.length / 2), 0, "Rameez"); 
updatedInvitees.push("Yahya"); 

// Print new invitation messages

console.log("\nAdditional Dinner Invitation:");

updatedInvitees.forEach(guest => {console.log(`Dear ${guest}, you are invited to dinner. Please join us for a delightful evening.`);});

// message about inviting only two people
console.log("Apologies, the new dinner table won't arrive in time, and we can invite only two people for dinner.");

// Remove guests until only two names remain

while (updatedInvitees.length > 2) {const removedGuest = updatedInvitees.pop();console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);};
// Print messages to the two remaining guests

updatedInvitees.forEach(guest => {console.log(`Dear ${guest}, you are still invited to dinner. Please join us for a delightful evening.`);});

// Remove the last two names, leaving an empty list.

updatedInvitees.pop();
updatedInvitees.pop();

// Print the empty list

console.log("\nUpdated Dinner Invitation (Empty List):");
console.log(updatedInvitees);