function breakOut(array, changeValue, stopValue) {

  for(var i =0; i<array.length; i++) {
    if (changeValue != stopValue) {
        array[i] = changeValue;
    }
    break;
  }
  return array[i];
}

function keepGoing(array, changeValue, skipValue) {
  for(var i =0; i<array.length; i++) {

    if (changeValue != skipValue) {
      array[i] = changeValue;
    }
    continue;
  }
  return array[i];
}

function findBy(array, findFn) {
for(var i =0; i<array.length; i++) {
if (findFn(array[i])) {
  return array[i];
}
return null;
}
}
