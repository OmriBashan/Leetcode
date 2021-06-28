/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x.toString();
    var reversedNum = parseInt(num.split("").reverse().join(''))*Math.sign(num)
    if (reversedNum > 2147483647 || reversedNum < -2147483647)
        return 0;
    else
        return reversedNum
};