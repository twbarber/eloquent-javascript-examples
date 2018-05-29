console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countBsGeneric("BBC"));

function countBs(word) {
    let counter = 0;
    word.split('').forEach(function(e) {
        if(e.toUpperCase() === "b".toUpperCase()) counter += 1;
    });
    return counter
}

function countChar(word, char) {
    return word.split('').filter(e => e.toUpperCase() === char.toUpperCase()).length
}

function countBsGeneric(word) { return countChar(word, "b") }