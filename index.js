

function checkAllVowels(str){
    let vowels = 'aiueo'
    let countVowels = 0

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(str[i] === vowels[j]){
                countVowels += 1
            }
        }
    }
    if(countVowels === str.length){
        return true
    }
    return false
    
}

console.log(checkAllVowels('fransiskus'))
console.log(checkAllVowels('aaaiiiuuueee'))