// changes every element in `array` to `changeValue` until it reachs `stopValue`:

function breakOut(array, changeValue, stopValue) {
	let l = array.length;
	for (var i = 0; i < l; i++) {
		if (array[i] === stopValue) {
			break;
		} else {
			array[i] = changeValue;
		}
	}
	return array;
}

function keepGoing(array, changeValue, skipValue) {
	let l = array.length;
	for (var i = 0; i < l; i++) {
		if (array[i] === skipValue) {
			continue;
		} else {
			array[i] = changeValue;
		}
	}
	return array;
}

function findBy(array, findFn) {
	for (let i = 0, l = array.length; i < l; i++) {
		if (findFn(array[i])) {
			return array[i];
		}
	}
	return null
}





/////////////////////
//   find(collections, (n => n > 3 && typeof n === 'string'))
// 	 find(collections, (n => n === '6' && typeof n === 'string'))
////////////////////

const collections = [1, [2, [4, [5, [6]], 3]]]

function find(array, criteriaFn) {
	let current = array
	let next = []

	while (current) {
		if (criteriaFn(current)) {
			console.log('if true', criteriaFn(current), 'it is of type: ', typeof current)
			return current

		}
		console.log('if false', criteriaFn(current), 'it is of type: ', typeof current)
		if (Array.isArray(current)) {

			for (let i = 0; i < current.length; i++) {
				next.push(current[i])
				console.log(next)
			}

		}

		current = next.shift()

	}

	return null

}










