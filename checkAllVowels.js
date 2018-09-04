function cekVowel(kalimat){
    var kamus='aiueo'
    for(var i=0;i<kalimat.length;i++){
        vowel=false
        for(var j=0;j<kamus.length;j++){
            if(kalimat[i]===kamus[j]){
                vowel=true;
            }
        }
        if(vowel===false){
            return false
        }
    }
    return true
}
console.log(cekVowel('aiueo'))
