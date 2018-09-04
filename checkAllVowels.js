function vocal (str){
    var voc = ['a','i','u','e','o','A','I','U','E','O']
    var count = 0
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < voc.length; j++){
            if(str[i] === voc[j]){
                count++
            }
        }
    }
    if(count === str.length){
        return true
    } else {
        return false
    }
}
console.log(vocal('aiueoea')); //true
console.log(vocal('arul')); // false
console.log(vocal('ARGHSiAXLOiART')); // false
console.log(vocal('AAAAiIIiiiAAaaaaOOOeeeoooEEEuuuUUUU')); //true