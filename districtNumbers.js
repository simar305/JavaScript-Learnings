// 📝 Write a function that takes an array of integers and returns true if there are two distinct numbers in the array that add up to a given target sum, otherwise return false.

function hasPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && arr[i] !== arr[j])
                return true;
        }
    }
    return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8));
console.log(hasPairWithSum([1, 2, 4, 4], 8));
console.log(hasPairWithSum([5, 7, 1, 2, 8, 4, 3], 10));
console.log(hasPairWithSum([5], 10));
