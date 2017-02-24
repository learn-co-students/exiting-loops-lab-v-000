 // changes every element in `array` to `changeValue` until it reachs `stopValue`:

function breakOut(array, changeValue, stopValue) {
  let l = array.length;
  for (var i = 0; i < l; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  let l = array.length;
  for (var i = 0; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
}








