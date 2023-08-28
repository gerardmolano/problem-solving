/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;

    while (x) {
        let digit = x % 10;

        /*
        // get a single digit
        x = x / 10;
        digit = x * 10 - Math.trunc(x) * 10;
        */

        // guard to signed 32-bit integer
        if (result * 10 + digit > 0x7FFFFFFF ||
            result * 10 + digit < -(0x80000000)) {
            return 0;
        }

        result = result * 10 + digit;

        x = Math.trunc(x / 10);
    }

    return result;
};

// test here
console.log(reverse(210));
