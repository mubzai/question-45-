function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "Hope Not Out"; }
    console.log("The shirt is size ".concat(size, " and has the message: \"").concat(message, "\"."));
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Never Give Up!");
