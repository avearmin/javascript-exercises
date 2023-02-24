const palindromes = function (string) {
    let cleanedString = string.split(/[\W+_+]/).join("")
    let reversedString = cleanedString.split("").reverse().join("");
    return cleanedString.toLowerCase() === reversedString.toLowerCase();
};
// Do not edit below this line
module.exports = palindromes;
