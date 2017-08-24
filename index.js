function breakOut(arr, cng, stop) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === stop) {
      break;
    } else {
      arr[i] = cng;
    }
  }
  return arr;
}

function keepGoing(arr, cng, skip) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === skip) {
      continue;
    } else {
      arr[i] = cng;
    }
  }
  return arr;
}

// function findBy(arr, findFn) {
//   let val = null;
//   let i; 
//   for (i=0; i < arr.length; i++) {
//     if (arr[i] === findFn()) {
//       val = findFn();
//       break;
//     } else {
//       continue;
//     }
//   }
//   return findFn();
// }

function findBy(arr, checkVl) {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (checkVl(arr[i])) {
      return arr[i]
    }
  }

  return null
}




