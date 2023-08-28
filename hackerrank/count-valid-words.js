/**
 * at least least 3
 * alphanumeric (a-z, A-Z, 0-9)
 * at least has one vowels and consonants
 */
function countValidWords(s) {
    let words = s.split(' ');
    let validWordsCtr = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 3) {
            continue;
        }

        let hasVowel = words[i].split('').some(char => vowels.includes(char));
        let hasConsonant = words[i].split('').some(char => Number.isNaN(char * 1) && !vowels.includes(char));
            
        if (hasVowel && hasConsonant) {
            validWordsCtr++;
        }
    }
    
    return validWordsCtr;

}

console.log(countValidWords('This is an example of 234 aeiou bwqz 21312a'));
