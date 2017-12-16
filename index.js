

function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break 
    }
    array[i] = changeValue 
  }
  return array 
}

//changes every element to changeValue except those that match skipValue
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

//looks for a value in array based on the return value of findFn. 
//Return null if the value isn't found. 
//Hint: Check the test file to know the signature of the findFn and 
//the type of its return value
function findBy(array, findFn) {
  var found = array.find(findFn);
  if (found) {
    return found
  } else {
    return null
  }
}








