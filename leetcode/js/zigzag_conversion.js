/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = "";

    if (numRows == 1) {
        return s;
    }

    let incr = (numRows - 1) * 2;
    for (let i = 0; i < numRows; i++) {

        for (let j = i; j < s.length; j += incr) {
            result += s[j];

            let mid = j + incr - 2 * i;
            if (i > 0 && i < numRows - 1 && mid < s.length) {
                result += s[mid];
            }
            
        }
    }
    return result;
};

// test here
console.log(convert('AB', 1));
