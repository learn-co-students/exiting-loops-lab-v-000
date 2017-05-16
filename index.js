function breakOut(array, changeValue, stopValue) {

  for(var i =0; i<array.length; i++) {
    var changeValue;
    if (changeValue != stopValue) {
      changeValue = array[i];
    }
    break;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i =0; i<array.length; i++) {
    var changeValue;

    if (changeValue != skipValue) {
      changeValue = array[i];
    }
    continue;
  }
  return array;
}

function findBy(array, findFn) {

}
