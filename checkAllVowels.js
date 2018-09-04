function checkAllVowels(str) {
    var vowels = 'aiueo'
    var numOfVowels = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j] || str[i] === vowels[j].toUpperCase()) numOfVowels++
        }
    }
    return numOfVowels === str.length
}

// TEST CASES
console.log(checkAllVowels('AAAAAaaaeiioae'))
console.log(checkAllVowels('kjhDSIJHjHgsi'))
console.log(checkAllVowels('hai'))
console.log(checkAllVowels('hAllO'))
console.log(checkAllVowels('AiiOUAe'))
