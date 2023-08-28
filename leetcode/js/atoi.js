/**
 * @param {string} s
 * @return {number}
 */
var myAtoi1 = function(s) {
    let result = 0;
    let sign = 1;

    for (var i = 0; i < s.length; i++) {
        let char = s[i];

        if (char != ' ' &&
            char != '-' && 
            char != '+' && 
            isNaN(parseInt(char))) {

            return result;
        }
        
        if (char == '-' ||
            char == '+' ||
            !isNaN(parseInt(char))) {
            
            if (char == '-') {
                sign = -1;
                i++;
            } else if (char == '+') {
                i++;
            }

            break;
        }
    }

    while (i < s.length && !isNaN(parseInt(s[i]))) {

        if (sign * (result * 10 + parseInt(s[i])) >= (0x7FFFFFFF)) {
            return (0x7FFFFFFF);
        }
        
        if (sign * (result * 10 + parseInt(s[i])) <= -(0x80000000)) {
            return -(0x80000000);
        }

        result = result * 10 + parseInt(s[i]);
        i++;
    }

    return result * sign;
};

var myAtoi2 = function(s) {
    let result = 0;
    let sign = 1;

    for (var i = 0; i < s.length; i++) {
        let char = s[i];
         
        if (char != ' ' &&
            isNaN(parseInt(char))) {

            return result;
        }

        if (char == '-') {
            sign = -1;
            i++;
            break;
        }

        if (char == '+') {
            i++;
            break;
        }

        if (!isNaN(parseInt(char))) {
            break;
        }
    }

    while (i < s.length && !isNaN(parseInt(s[i]))) {
        
        if (sign * (result * 10 + parseInt(s[i])) >= (0x7FFFFFFF)) {
            return (0x7FFFFFFF);
        }
        
        if (sign * (result * 10 + parseInt(s[i])) <= -(0x80000000)) {
            return -(0x80000000);
        }

        result = result * 10 + parseInt(s[i]);
        i++;
    }

    return result * sign;
};

var myAtoi = myAtoi1;

// test here
console.log(myAtoi("    -41"));
