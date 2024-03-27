let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
let usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David", "Eve"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username.toLowerCase() === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
