function breakOut(array, change, stop) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stop) {
      break
    }
    array[i] = change
  }
  return array
}

function keepGoing(array, change, stop) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stop) {
      continue
    }
    array[i] = change
  }
  return array
}

function findBy(array, find) {
  for (var i = 0; i < array.length; i++) {
    if (find(array[i])) {
      return array[i]
    }
  }
}
