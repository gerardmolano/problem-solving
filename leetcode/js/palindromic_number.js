/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyX = x;
    let result = 0;
    
    if (x < 0) {
        return false;
    }

    while (x) {
        let digit = x % 10;

        /*
        // get a single digit
        x = x / 10;
        digit = x * 10 - Math.trunc(x) * 10;
        */

        result = result * 10 + digit;
        x = Math.trunc(x);
    }

    return result == copyX;
};

// test here
console.log(isPalindrome(-121));
