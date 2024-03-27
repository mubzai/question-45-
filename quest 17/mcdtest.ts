let fruit: string = "apple";
let number: number = 10;
let fruits: string[] = ["apple", "banana", "orange"];
let cars: string[] = ["subaru", "ford", "honda"];

console.log("Equality test with strings:");
console.log(fruit == "apple");
console.log(fruit != "orange");
console.log(fruit == "orange");
console.log(fruit != "apple");

console.log("Lowercase test:");
console.log(fruit.toLowerCase() == "apple");
console.log(fruit.toLowerCase() == "Apple");
console.log(fruit.toLowerCase() == "APPLE");
console.log(fruit.toLowerCase() == "banana");

console.log("Numerical tests:");
console.log(number == 10);
console.log(number != 5);
console.log(number > 5);
console.log(number < 20);
console.log(number >= 10);
console.log(number <= 10);
console.log(number == 15);
console.log(number != 10);
console.log(number > 20);
console.log(number < 5);
console.log(number >= 20);
console.log(number <= 5);

console.log("Tests using 'and' and 'or' operators:");
console.log(fruit == "apple" && number == 10);
console.log(fruit == "banana" && number == 10);
console.log(fruit == "apple" || number == 5);
console.log(fruit == "banana" || number == 5);

console.log("Test whether an item is in an array:");
console.log(fruits.indexOf(fruit) !== -1);

console.log("Test whether an item is not in an array:");
console.log(cars.indexOf("toyota") === -1);
console.log(cars.indexOf("subaru") === -1);
