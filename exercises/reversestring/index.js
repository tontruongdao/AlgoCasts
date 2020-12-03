// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    
    return joinArray
}

module.exports = reverse;
