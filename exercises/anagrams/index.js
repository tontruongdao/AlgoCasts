// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     const keys = Object.keys(charMap);
//     let sortedKeys = keys.sort();
//     let newObj = {}

//     sortedKeys.forEach(key => {
//       newObj[key] = charMap[key];
//     })

//     // console.log(newObj)

//     return newObj;

// }

// function anagrams(stringA, stringB) {

//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     console.log(aCharMap, bCharMap);

//     // console.log(Object.keys(aCharMap), Object.keys(bCharMap));

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         // console.log('hello world');
//         console.log(false);
//         return false;
//     } 
//     // console.log('hello world 2');
//     for (let char in aCharMap) {
//         // console.log(char);
//         if (aCharMap[char] !== bCharMap[char]) {
//             console.log(false);
//             return false;
//         }
//     }
//     console.log(true);
//     return true;
// }

// anagrams("laval", "valla"); // True
// anagrams('rail safety', 'fairy tales') // True
// anagrams('RAIL! SAFETY!', 'fairy tales') // True
// anagrams('Hi there', 'Bye there') // False


function cleanString(str) {
  return str.replace(/^\w/g,'').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;


// const fruits = {
//     "apple": 1,
//     "celery": 5,
//     "banana": 2
// }

// console.log(fruits);

// const sortedFruits = Object.entries(fruits).sort((a,b) => a[1]-b[1]);

// console.log(sortedFruits);

// const arrayToObject = (array) =>
//    array.reduce((obj, item) => {
//      obj[item[0]] = item[1]
//      return obj
//    }, {})
   
// const fruitsObject = arrayToObject(sortedFruits);
// console.log(fruitsObject);
