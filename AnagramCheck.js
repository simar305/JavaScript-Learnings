// anagram => nagaram => true
// rat => car => false

// function anagram(x, y) {
//     if (x.length !== y.length) return false;

//     const sortedx = x.split("").sort();
//     const sortedy = y.split("").sort();

//     for (let i = 0; i < x.length; i++) {
//         if (sortedx[i] !== sortedy[i]) return false;
//     }
//     return true;
// }

function anagram(x, y) {
    if (x.length !== y.length) return false;

    const data1 = {};
    const data2 = {};

    for (let i = 0; i < x.length; i++) {
        data1[x[i]] = (data1[x[i]] || 0) + 1;
        data2[y[i]] = (data2[y[i]] || 0) + 1;
    }

    for (const key in data1) {
        if (data1[key] !== data2[key]) return false;
    }
    return true;
}

console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car"));         // false
