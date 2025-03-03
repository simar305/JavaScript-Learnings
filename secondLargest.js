//Write a function that takes an array of numbers and returns the second largest number in the array.

function secondLargest(arr) {
    let temp = 0;
    for (let i = 0; i < arr.size; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}

const test = secondLargest([4, 5, 1, 2, 3, 9, 8]);
console.log(test, "test");
