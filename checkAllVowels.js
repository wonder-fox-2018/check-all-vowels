function checkVowel(word){
    if (!word) return `Masukan minimal 1 huruf`
    let vocal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O' ]
    for (let i = 0; i < word.length; i++){
        let cek = false
        for(let j = 0; j < vocal.length; j++){
            if (word[i] === vocal[j]){
                cek = true
            }
        }
        if (cek === false) return false
    }
    return true
}

console.log(checkVowel('ajgjafdj'));
console.log(checkVowel('aeioeae'));