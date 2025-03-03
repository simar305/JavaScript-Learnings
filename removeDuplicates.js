function removeDuplicates(arr) {
    let newArr = new Set();

    for (let i = 0; i < arr.length; i++) {
        newArr.add(arr[i]);
    }

    return Array.from(newArr)
}

console.log(removeDuplicates([1, 2, 4, 1, 4, 5, 1, 2])); // Output: [1, 2, 4, 5]
