//------------------------------------------------------------
var breakOut = (array, changeValue, stopValue) =>{
  for (var i = 0; i < array.length; ++i){


      if (array[i] != stopValue){
      array[i] = changeValue
      }
      else if (array[i] === stopValue){
      return array
      }

  }
}

//------------------------------------------------------------
var keepGoing =(array, changeValue, skipValue) => {
  for (var i = 0; i<array.length; ++i){

    if (array[i]!= skipValue){
      array[i] = changeValue
    }
    else if (array[i]===skipValue){
      continue
    }

  }
return array
}

//------------------------------------------------------------
var findBy = (array, findFn) => {
  debugger;
  for (var i = 0; i < array.length; ++i){
    if(findFn(array[i])){return array[i]}
  }
  return null
}
