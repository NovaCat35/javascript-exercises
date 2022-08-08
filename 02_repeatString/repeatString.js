const repeatString = function(str, number) {
    let repeatStr = "";

    if (number < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < number; i++) {
        repeatStr += str;
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
