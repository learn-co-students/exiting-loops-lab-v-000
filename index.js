function breakOut(array, changeValue, stopValue){
   return array.map(val=> {
      if (val === stopValue) {
        break
      }
      val = changeValue;
     }
   )
}
