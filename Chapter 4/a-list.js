function arrayToList(array) {
    if(array.length === 0) return null;
    return {
        value: array[0],
        rest: arrayToList(array.slice(1, array.length))
    }
}

function listToArray(list) {
    let array = [];
    let pointer = list;
    while(pointer != null) {
        array.push(pointer.value);
        pointer = pointer.rest;
    }
    return array
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, index) {
    if (list === null) return undefined;
    else if(index === 0) return list.value;
    else return nth(list.rest, index - 1)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20