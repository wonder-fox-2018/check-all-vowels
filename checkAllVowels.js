// function checkAllVowels(str) {
//     console.time()
//     var vowels = 'aiueo'
//     var numOfVowels = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if(str[i] === vowels[j] || str[i] === vowels[j].toUpperCase()) numOfVowels++
//         }
//     }
//     console.timeEnd()
 
//     return numOfVowels === str.length
// }

function checkAllVowels(str) {
    console.time()
    var consonants = 'bcdfghjklmnpqrstvwxyz'
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
            if(str[i] === consonants[j] || str[i] === consonants[j].toUpperCase()) {
                console.timeEnd()
                return false
            }
        }
    }
    console.timeEnd()
    return true
}

// TEST CASES
console.log(checkAllVowels('AAAAAaaaeiioae'))
console.log(checkAllVowels('kjhDSIJHjHgsi'))
console.log(checkAllVowels('hai'))
console.log(checkAllVowels('hAllO'))
console.log(checkAllVowels('AiiOUAe'))
