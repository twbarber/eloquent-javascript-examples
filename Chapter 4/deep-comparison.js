function deepEqual(a, b) {
    if(a === b) return true;
    if(Object.keys(a).length !== Object.keys(b).length) return false;
    for(let e of Object.keys(a)) {
        if(typeof a[e] === "object" && a[e] != null) {
            if(!Object.keys(b).includes(e) || !deepEqual(a[e], b[e])) return false;
        } else if (a[e] !== b[e]) return false;
    }
    return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true