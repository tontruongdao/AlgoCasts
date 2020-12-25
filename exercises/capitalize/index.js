// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ################# Solution #1 ######################

// function capitalize(str) {
//     const words = [];

//     for (let word of str.spli(' ')) {
//         words.push(word[0].toUpperCase() + word.splice(1).toLowerCase());
//     }

//     return words.join(' ');
// }


// ################ Solution # 2 ######################

function capitalize(str) {
    let results = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            results += str[i].toUpperCase();
        } else {
            results += str[i];
        }
    }

    return results;
}

// ################# My solution ######################

// function capitalize(str) {

//     const strArray = str.split(" ");

//     const tempArray = [];

//     strArray.forEach((word) => {
        
//         const firstComponent = word[0].toUpperCase();
//         const secondComponent = word.slice(1).toLowerCase();
        
//         const newWord = firstComponent + secondComponent;
//         tempArray.push(newWord);
        
//         // console.log(tempArray);
//     });

//     return tempArray.join(" ");
//     // console.log(newString);
// }

// capitalize("hello world");

module.exports = capitalize;
