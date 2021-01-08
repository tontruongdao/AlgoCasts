// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// ########## Solution 2 ##########

function vowels(str) {
    // "g" makes sure we do not "stop" at the first match, i
    // 'i' makes our match insensitive
    
    const matches = str.match(/[aeiou]/gi);
    
    console.log(matches.length);
    return matches ? matches.length : 0;
}


// ########## Solution 1 ##########

// function vowels(str) {

//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     // for ( let char of str.toLowerCase() ) {
//     //     if (checker.includes(char)) {
//     //         count++;
//     //     }
//     // }
//     const arr = str.split('');

//     arr.forEach(char => {
//         if (checker.includes(char)){
//             count++;
//         };
//     })

//     console.log(count);
//     return count;
// }

vowels("hello")

module.exports = vowels;
