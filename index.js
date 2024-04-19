let son = Math.floor(Math.random() * 100);

if ( son % 3 ===0) {
    console.log("Fizz");
} else {
    if (son % 5 === 0) {
    console.log("Buzz");
    } else {
    console.log(son);
    }
}