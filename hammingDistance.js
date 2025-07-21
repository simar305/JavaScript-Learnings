//distance between 2 strings
// hello  hallw   o/p -> 2

function hammingDistance(x, y) {
    if (x.length !== y.length) return -1;
    let count = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) count++;
    }
    return count;
}

console.log(hammingDistance("hello", "hallwx"));
