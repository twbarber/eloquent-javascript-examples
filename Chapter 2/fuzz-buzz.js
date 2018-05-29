const FIZZ = "Fizz";
const BUZZ = "Buzz";

fizzBuzz(100);
fizzBuzzClever(100);

function fizzBuzz(max) {
    for(let i = 1; i <= max; i +=1) {
        if(i % 15 === 0) console.log(FIZZ + BUZZ);
        else if(i % 3 === 0) console.log(FIZZ);
        else if(i % 5 === 0) console.log(BUZZ);
        else console.log(i);
    }
}

function fizzBuzzClever(max) {
    for(let i = 1; i <= max; i +=1) {
        let value = "";
        if(i % 3 === 0) value += FIZZ;
        if(i % 5 === 0) value += BUZZ;
        console.log(value || i);
    }
}