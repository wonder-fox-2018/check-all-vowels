
function cekVokal(str) {
    var kamus = ['a','i','u','e','o']
    if (str.length === 0) {
        return true
    } else {
        var cek = false
        for (let i = 0; i < kamus.length; i++) {
            if (kamus[i] === str[0]) {
                cek = true
            }
        }
        if (cek === false) {
           return false 
        }
        return cekVokal(str.substr(0,str.length-1))  
    } 
}

console.log(cekVokal('aiueo')); //true
console.log(cekVokal('dany')); //false
console.log(cekVokal('ktxsqw')); //false

