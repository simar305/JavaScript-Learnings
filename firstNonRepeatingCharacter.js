// Write a function that takes a string and returns the first non-repeating character in the string. If all characters are repeating, return null.

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    console.log(charCount, 'count');

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

const test = firstNonRepeatingCharacter("abcbca");
console.log(test, 'test');
