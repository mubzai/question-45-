var current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];
var new_users = ["Eve", "Frank", "Grace", "Bob", "Henry"];
var _loop_1 = function (new_username) {
    var usernameTaken = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
    if (usernameTaken) {
        console.log("Sorry, the username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Great! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
