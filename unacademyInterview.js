//Question 1: forEach vs map

const arr = [3, 4, 5, 6];

const mapResult = arr.map((item) => {
    return item + 2;
})

// console.log(mapResult);

const forEachResult = arr.forEach((ar, i) => {
    arr[i] = ar + 3;
})

// console.log(forEachResult, arr);


//question 2-- null and undefined
// null is an actual value and undefined variable is not defined


console.log(typeof (undefined));

console.log(null == undefined);
console.log(null === undefined);

