function breakOut(array, changeValue, stopValue) {
  const l = array.length
  for (let i = 0; i < l; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  } return array
}

function keepGoing(array, changeValue, skipValue) {
  const l = array.length
  for (let i = 0; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  const l = array.length
  for (let i = 0; i < l; i++) {
    if (findFn(array[i])) {
    return array[i]
    }
    }
    return null
}
