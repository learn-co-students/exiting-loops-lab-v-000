function breakOut(array, value, stopvalue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= stopvalue) {
      break;
    } else {
      array[i] = value;
    }
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) { continue; }
    array[i] = changeValue;
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++ ) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null;
}
