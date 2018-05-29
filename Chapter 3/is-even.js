console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function isEven(n) {
    if(n === 1 || n === -1) return false;
    if(n >= 0) {
        if(n - 2 === 0) return true;
        else if (n - 2 === 1) return false;
        else return isEven(n - 2)
    } else {
        if(n + 2 === 0) return true;
        else if (n + 2 === -1) return false;
        else return isEven(n + 2)
    }
}