function breakOut(array, changeValue, stopValue){
  array.forEach(val=> {
      if (val === stopValue) {
        break;
      }
      val = changeValue;
     }
   return array
}
