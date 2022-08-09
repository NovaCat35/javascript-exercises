const removeFromArray = function(givenArray, ...theArgs) {
    let oldArray = Array.from(arguments[0]);
    let restParaArray = theArgs;
    let newArray = [];

    nextElement:
    for(let i = 0; i < oldArray.length; i++) {
        for(let k = 0; k < restParaArray.length; k++) {
            if (oldArray[i] === restParaArray[k]) {
                continue nextElement;
            }
        }
        newArray.push(oldArray[i]);
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;


//SOLUTION: https://github.com/TheOdinProject/javascript-exercises/blob/solutions/removeFromArray/removeFromArray.js
// const removeFromArray = function (...args) {
//     const array = args[0];
//     const newArray = [];

//     array.forEach((item) => {
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     return newArray;
//   };

//OR

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }