// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//1. ###############################################

// function reverse(str) {
//     const splitString = str.split("");
//     const reverseArray = splitString.reverse();
//     const joinArray = reverseArray.join("");
    
//     return joinArray
// }

//2. ##############################################

// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed
// }

//3. ###############################################

function reverse(str) {
    // "reduce" takes all element of an array, and reduces to a single element
    // It takes two argument, first one is an arrow function, and a starting initial value.
    // The arrow function takes two argument, the first one is the initial value that is iterated every time.
    // the second argument is the single item iterated to the initial value.
    return str.split("").reduce((reversed, character) => {
        return character + reversed;
    }, "")
}

module.exports = reverse;
