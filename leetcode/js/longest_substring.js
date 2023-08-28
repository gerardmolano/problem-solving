/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const chars = {};
    let len = 0;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        let charpos  = chars?.[s[i]] || 0;

        j = Math.max(j, charpos);
        len = Math.max(len, i - j + 1);
        chars[s[i]] = i + 1;
    }

    return len;
};
