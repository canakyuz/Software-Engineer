/*
TODO Days Of The Week Exercise
? Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

* Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

| returnDay(1) // "Monday"
| returnDay(7) // "Sunday"
| returnDay(4) // "Thursday"
| returnDay(0) // null
*/

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num - 1];
    }
}


/*
SOLUTION #1:

function returnDay(num) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num - 1];
  }
}
SOLUTION #2:

function returnDay(num) {
  const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num];
  }
}
SOLUTION #3:

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[num - 1];
}
SOLUTION #4:

function returnDay(num) {
  if (num >= 1 && num <= 7) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[num - 1];
  }
  return null;
}
SOLUTION #5:

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };
  return days[num];
}
SOLUTION #6:

function returnDay(num) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const day = days[num - 1];
  // Using the JavaScript ternary operator syntax
  return day ? day : null;
}
SOLUTION #7:

// A long approach:
function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else if (num === 1) {
    return ('Monday');
  } else if (num === 2) {
    return ('Tuesday');
  } else if (num === 3) {
    return ('Wednesday');
  } else if (num === 4) {
    return ('Thursday');
  } else if (num === 5) {
    return ('Friday');
  } else if (num === 6) {
    return ('Saturday');
  } else if (num === 7) {
    return ('Sunday');
  }
}
SOLUTION #8:

// A long approach with a switch statement
function returnDay(num) {
  if (num >= 1 || num <= 7) {
    switch (num) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return null;
    }
  }
}
*/