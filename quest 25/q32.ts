let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let new_users: string[] = ["Eve", "Frank", "Grace", "Bob", "Henry"];

for (let new_username of new_users) {
  let usernameTaken: boolean = current_users.some((current_username) => current_username.toLowerCase() === new_username.toLowerCase());

  if (usernameTaken) {
    console.log(`Sorry, the username '${new_username}' is not available. Please enter a new username.`);
  } else {
    console.log(`Great! The username '${new_username}' is available.`);
  }
}
