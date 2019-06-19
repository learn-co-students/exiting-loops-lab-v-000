function breakOut(array, changeValue, stopValue){
   return array.forEach(val=> {
      if (val === stopValue) {
        break;
      }
      val = changeValue;
     }
   )
}
