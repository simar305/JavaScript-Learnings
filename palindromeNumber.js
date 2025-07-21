function isPalindromeNumber(x) {
    const reversed = x.toString().split("").reverse().join("");
    return x === Number(reversed);
}

const result = isPalindromeNumber(121);
console.log(result); // true
