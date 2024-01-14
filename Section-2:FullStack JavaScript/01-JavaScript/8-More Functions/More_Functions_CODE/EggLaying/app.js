/* name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2 

Create a variable named hen and set it to a new object.

The object should contain the name and eggCount properties set to values according to the instructions.

It should also have a method named layAnEgg which should increment eggCount (you can use this.eggCount++ to do this) and it should also return 'EGG'.

*/
// SOLUTION #1:

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};
/* 
SOLUTION #2:

// A bit more verbose:
const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount += 1;
    return 'EGG';
  }
};
 */