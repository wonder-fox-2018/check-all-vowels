function checkAlVowels(str) {
    var vowels = 'aiueo';
    var result = ''

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<vowels.length; j++) {
            if (vowels[j] === str[i]) {
                result += str[i];
            }
        } 
    }
    return result === str
}

console.log(checkAlVowels('aioeiiii')); // true
console.log(checkAlVowels('dasjebcfs')); // false
console.log(checkAlVowels('ieuiouee')); // true