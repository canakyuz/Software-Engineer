const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2010
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


console.log(movies.some(movie => movie.year < 2015))


//! Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)
/*
allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false
 */

/*
Use the every method to check if every element in the array meets a certain condition.

Use the modulus operator % to check if a number is even.

Define a function named allEvens that accepts one parameter, an array of numbers.

Call the every method on the array and pass a function to it as an argument, which returns true if the element is even and false otherwise.

If every element in the array returns true, then the every method will return true and the whole allEvens function should return true as well in that case. Otherwise, the every method will return false which we should also return from the allEvents function.
*/

// * SOLUTION #1:

function allEvens(arr) {
  return arr.every(function (num) {
    return num % 2 === 0;
  });
}
// * SOLUTION #2:

const allEvens = function (arr) {
  return arr.every(num => num % 2 === 0);
}
// * SOLUTION #3:

// Concise full arrow function syntax approach:
const allEvens = arr => arr.every(num => num % 2 === 0);