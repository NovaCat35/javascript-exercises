const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '');

    while(string.length > 1) {
        if(string[0] === string[string.length-1]){
            string = string.slice(1,string.length-1);
            continue;
        }
        return false;
    }
    return true;

    // ~~ SOLUTION ~~
    // return (
    //     string
    //       .split("")
    //       .reverse()
    //       .join("") == string
    // );
};

// Do not edit below this line
module.exports = palindromes;
