/*
TODO Last Element Exercise
? Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

| lastElement([3,5,7]) //7
| lastElement([1]) //1
| lastElement([]) //null
*/

// define lastElement below:
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

console.log(lastElement([3, 5, 7]))
console.log(lastElement([1]))
console.log(lastElement([]))


/*
SOLUTION #1:

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
}
SOLUTION #2:

function lastElement(arr) {
  if (!arr.length) {
    return null;
  }
  return arr[arr.length - 1];
}
 
// Or we can write it like this:
function lastElement(arr) {
  if (!arr.length) return null;
  return arr[arr.length - 1];
}
SOLUTION #3:

function lastElement(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return null;
}
 
// Or we can write it like this:
function lastElement(arr) {
  if (arr.length > 0) return arr[arr.length - 1];
  return null;
}
SOLUTION #4:

// Using the JavaScript ternary operator syntax
function lastElement(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : null;
}
 
// Another approach:
// arr.length will be 'truthy' if it's not 0, so we can write this:
function lastElement(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}

*/