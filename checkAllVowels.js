function checkVowel(kata) {
    let vowel = 'aiueo';
    for ( let i = 0; i < vowel.length; i++) {
        for (let j = 0; j < kata.length; j++) {
            if ( kata[j] === vowel[i]) {
                return true
            }
        }
        return false
    }
}

console.log(checkVowel('anoa'))      // TRUE
console.log(checkVowel('anggur'))    // TRUE
console.log(checkVowel('zebra'))     // TRUE
console.log(checkVowel('strywgyr'))  // FALSE