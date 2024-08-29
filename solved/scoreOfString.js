// You are given a string s. 
//The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
    for (let i = 0; i < s.length - 1; i++) {
        sum += Math.abs(s.charAt(i).charCodeAt(0) - s.charAt(i + 1).charCodeAt(0))
    }
    return sum
};