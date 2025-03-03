function palindromeCheck(str) {
    console.log(str, 'str');
    const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(formattedString, 'formattedString');

    for (var i = 0; i < formattedString.length / 2; i++) {
        const j = (formattedString.length - 1) - i;
        if (formattedString[i] !== formattedString[j]) {
            return false;
        }
    }
    return true;
}

const test = palindromeCheck("Was it a car or a cat I saw?!");

console.log(test, 'test');
