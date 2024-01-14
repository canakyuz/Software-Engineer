// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

/* 
Function Expression Exercise
Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

square(4) //16
square(3) //9 */

const square = function (num) {
    return num * num;
}

/* SOLUTION #2:

const square = function (num) {
  return Math.pow(num, 2);
}
SOLUTION #3:

// note: the ** operator doesn't work on the Udemy coding exercise platform at the time of writing this
const square = function (num) {
  return num ** 2;
} */





