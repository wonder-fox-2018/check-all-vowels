function vowels (str){
    var dictionary = 'aiueo'
    var check = []
    for ( var i = 0 ; i < str.length ; i ++){
        let current = str[i]
        for ( var j = 0 ; j < dictionary.length ; j ++){
            if(current === dictionary[j]){
                check.push(current)
            }
        }
    }
    
    if(str.length === check.length){
        return true
    }else{
        return false
    }
}

console.log(vowels('aiueo')) //true
console.log(vowels('sapisuper')) //false
console.log(vowels('aaaaaaiiiiiiuuuuuueeeooo')) //true
console.log(vowels('aiueoaiueoxxx')) //false