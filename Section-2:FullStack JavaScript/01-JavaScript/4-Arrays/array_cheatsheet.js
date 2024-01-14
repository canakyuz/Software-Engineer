// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
// TODO push(value) - adds value to the END of an array
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// TODO pop() - removes and returns last value in array
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// TODO unshift(val) - adds value to START of an array
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]


// TODO shift() - removes and returns first element in an array
const array2 = [1, 2, 3];

const firstElement = array2.shift();

console.log(array2);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

// TODO slice() - copies a portion on an array
const newAnimals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(newAnimals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(newAnimals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(newAnimals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(newAnimals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(newAnimals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(newAnimals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// TODO splice() - removes, replaces, or adds elements to an array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
