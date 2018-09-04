function checkVowel(str) {
    var consonants = 'bcdfghjklmnpqrstvwxyz';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
            if (str[i].toLowerCase() === consonants[j]) {
                return false;
            }
        }
    }

    return true;
}

console.log(checkVowel('aiueeeoooiu')); //true
console.log(checkVowel('dauieciioooo')); //false
console.log(checkVowel('false')); //false
console.log(checkVowel('aiuCeo')); //false