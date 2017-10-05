/* 
1. Declare function named breakOut(array, changeValue, stopValue)
2. Iterates through array and changes every element to changeValue until the loop reaches stopValue. 
3. Then we break out of the loop and return the array.
*/
function breakOut(array, changeValue, stopValue) {
  for (var i in array) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

/* 
1. Declare a function named keepGoing(array, changeValue, skipValue)
2. Iterates through array and changes every element to changeValue except those that match skipValue.
3. Then return the array.
*/
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

/* 
1. Declare a function named findBy(array, findFn) which looks for a value in array based on the return value of findFn. 
2. Return null if the value isn't found.
*/
function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
