function checkAllVowels(str) {
    var kamus = 'aiueo';
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < kamus.length; i++) {
       //console.log(kamus[i])
       for (var j = 0; j < str.length; j++) {
           //console.log(str[j])
           if (str[j] === kamus[i]) {
              //console.log(str[j], kamus[i])
              count++;
           }
       }
    }
    if (count === str.length) {
        return true
    } else {
        return false
    }
}

console.log(checkAllVowels('hello'))
console.log(checkAllVowels('mdchj'))
console.log(checkAllVowels('aaiiiuuoooeeeuu'))