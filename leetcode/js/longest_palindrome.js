/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let fstart = 0;
    let fend = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        let start = i;
        let end = i;

        while (start >= 0 && end < len && s[start] == s[end]) {
            if ((end - start + 1) > (fend - fstart)) {
                fstart = start;
                fend = end;
            }
            start--;
            end++;
        }

        start = i;
        end = i + 1;
        while (start >= 0 && end < len && s[start] == s[end]) {
            if ((end - start + 1) > (fend - fstart)) {
                fstart = start;
                fend = end;
            }
            start--;
            end++;
        }
    }

    return s.slice(fstart, fend + 1);
}