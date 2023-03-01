const mod = function(num1, num2) {
    return ((num1 % num2) + num2) % num2;
}

const caesar = function(string, numberToShift) {
    const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
                            "y", "z"]

    const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
                            "Y", "Z"]

    let shiftedIndex;
    let cypherString = "";

    for (char of string) {
        if (lowerCaseAlphabet.includes(char)) {
            shiftedIndex = mod((lowerCaseAlphabet.indexOf(char) + numberToShift), lowerCaseAlphabet.length);
            cypherString += lowerCaseAlphabet[shiftedIndex];
        } else if (upperCaseAlphabet.includes(char)) {
            shiftedIndex = mod((upperCaseAlphabet.indexOf(char) + numberToShift), upperCaseAlphabet.length);
            cypherString += upperCaseAlphabet[shiftedIndex];
        } else {
            cypherString += char;
        }
    }
    return cypherString;
};
// Do not edit below this line
module.exports = caesar;
