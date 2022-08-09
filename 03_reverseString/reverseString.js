const reverseString = function(str) {
    const strToArray = str.split('');
    let reverseStr = ""

    for(let i = str.length-1; i >= 0 ; i--) {
        reverseStr += strToArray[i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;


// -- SOLUTIONS --
// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };
   
// module.exports = reverseString;