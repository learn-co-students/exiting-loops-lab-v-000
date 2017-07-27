function breakOut(array, changeValue, stopValue) {
    for(let index in array) {
        if(array[index] == stopValue) {
            break;
        } else {
        array[index] = changeValue;
        }
    }
    return array;
};

function keepGoing(array, changeValue, skipValue) {
    for(var index in array) {
        if (array[index] == skipValue) {
            continue
        } else {
            array[index] = changeValue
        }
    }
    return array;
};

function findBy(array, findFn) {
    for(var index in array) {
        if(findFn(array[index])) {
            return array[index];
        }
    }
};

