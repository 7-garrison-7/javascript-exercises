const fibonacci = function(pos) {
    if (pos < 0) {
        return "OOPS";
    }
    console.log(`Position arg = ${pos}`);
    let array = [0, 1, 1];
    console.log(`Starting array = ${array}`);
    for (let i = 0; i < pos; i++) {
        console.log(`Array at -1 = ${array.at(-1)}`);
        console.log(`Array at -2 = ${array.at(-2)}`);
        console.log(`Sum = ${array.at(-1) + array.at(-2)}`)
        console.log("Pushing to array");
        array.push(array.at(-1) + array.at(-2));
        console.log(array);
    }
    console.log(array[pos]);
    return array[pos];
};

// Do not edit below this line
module.exports = fibonacci;
