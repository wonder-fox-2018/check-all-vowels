function checkVowel(data) {
    if(data.length === 0) {
        return true;
    }
    
    var kamus = 'aiueoAIUEO';

    var tmp = false;
    for(var i = 0; i < kamus.length; i++) {
        if(data[0] === kamus[i]) {
            tmp = true;
        }
    }
    if(tmp === false) {
        return false
    }
    return checkVowel(data.substr(0, data.length - 1));
}

console.log(checkVowel('aiueo')); // true
console.log(checkVowel('zainal')); // false
console.log(checkVowel('kttzc')); // false