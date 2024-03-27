let usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David", "Eve"];

for (let username of usernames) {
  if (username.toLowerCase() === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
