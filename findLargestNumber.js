//function that takes an array of numbers and returns the largest number in the array without using the built-in Math.max() method.

function findLargestNumber(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}

const test = findLargestNumber([1, 5, 9, 12, 67, 88, 99]);
console.log(test, 'test');
