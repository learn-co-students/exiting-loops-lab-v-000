function breakOut(array, changeValue, skipValue){
	for (let i = 0, l = array.length; i < l; i++){
		if (array[i] == skipValue) {
			break
		} else {array[i] = changeValue}
	}
	return array
}

function keepGoing(array, changeValue, skipValue){
	var i;
	for (i = 0; i < array.length; i++){
		if (array[i] === skipValue){
			continue} else {array[i] = changeValue;}
	}
	return array
}

function findBy(array, findFn){
	var i;
	for (i = 0; i < array.length; i++){
		if (findFn(array[i])){
			return array[i];
		}
	}
		return null
	}
