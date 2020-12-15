// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    const charMap = {};
    let max= 0;
    let maxChar= "";

    // This is used to iterate throught an array to create an object with an assigned value to the key.
    for (let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    // Looping throught the object to find out the maximum character
    // "in" is used instead of "of" beacause this is an object and not a string/array
    for (let char in charMap) {
        if (charMap[char] > max ) {
            max = charMap[char];
            maxChar = char;
        }

    }

    return maxChar;
}

module.exports = maxChar;
