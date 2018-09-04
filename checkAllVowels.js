function checkVowels(string){
    var arr = string.split('')
    var vowelChars = 'aiueoAIUEO'
    var result = false

    arr.forEach(char => {
        for (let i = 0; i < vowelChars.length; i++) {
            const vowelChar = vowelChars[i];
            if(char == vowelChar) result = true
        }
    })

    return result
}

console.log(checkVowels('adavokal'))
console.log(checkVowels('gdvkl'))


//--- try 2
function cekvokal(string){
    var hurufvokal = 'aiueoAIUEO'
    for (let i = 0; i < string.length; i++)     
        if(hurufvokal.indexOf(string[i]) != -1) 
            return true
    
    return false
}
console.log(cekvokal('mkaml'))
console.log(checkVowels('gdvkl'))
