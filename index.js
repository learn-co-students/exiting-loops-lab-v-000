function breakOut(array, change, stopValue){
  for(var i=0; i< array.length; i++){
    if(array[i]==stopValue){
      break
    }
    array[i] = change;
  }
  return array;
}

function keepGoing(array, change, skip){
  for(var i=0; i< array.length; i++){
    if(array[i]==skip){
      continue
    }
    array[i] = change;
  }
  return array;
}

function findBy(array, findFn){
  for(var i=0; i< array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;
}
