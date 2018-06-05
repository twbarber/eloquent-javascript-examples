function reverseArray(array) {
    let reversed = [];
    for(let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i])
    }
    return reversed
}

function reverseArrayInPlace(array) {
    const lastIndex = array.length - 1;
    for(let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[lastIndex - i];
        array[lastIndex - i] = temp
     }
    return array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]