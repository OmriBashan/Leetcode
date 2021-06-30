/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var palindrome = x.toString().split('').reverse().join('');
    
    if (x != palindrome)
        return false
    else
        return true
    
};