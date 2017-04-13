function breakOut(array, changeValue, stopValue) {
  for (const [i, elem] of array.entries()) {
    if (elem === stopValue) break;
    array[i] = changeValue;
  }

  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (const [i, elem] of array.entries()) {
    if (elem === skipValue) continue;
    array[i] = changeValue;
  }

  return array;
}

function findBy(array, findFn) {
  for (const elem of array) {
    if (findFn(elem)) {
      return elem;
    }
  }
  
  return null;
}
