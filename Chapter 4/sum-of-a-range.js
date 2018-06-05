function range(start, end, step = 1) {
    let values = [];
    if (start < end && step > 0) {
        let x = start;
        while (x <= end) {
            values.push(x);
            x += step;
        }
    } else if (end < start && step < 0) {
        let x = start;
        while (x >= end) {
            values.push(x);
            x += step;
        }
    }
    return values
}

function sum(numbers) {
    let x = 0;
    for (let n of numbers) {
        x += n;
    }
    return x;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55