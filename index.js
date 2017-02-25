function breakOut(array, changeValue, stopValue) {
	for (let i = 0, l = array.length; i < l; i++) {
		if (array[i] === stopValue) {
			break
		}

		array[i] = changeValue
	}

	return array
}

function keepGoing(array, changeValue, skipValue) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] === skipValue) {
			continue
		}

		array[i] = changeValue
	}

	return array
}

function findBy(array, findFn) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (findFn(array[i])) {
			return array[i]
		}
	}

	return null
}