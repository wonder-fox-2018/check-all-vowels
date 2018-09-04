
function checkVowel(param)
{
    let vowel=["a","i","u","e","o"];
    for (var i = 0; i < param.length; i++) {
        for (var j = 0; j < vowel.length; j++) {
            if(param[i]==vowel[j]){
                break;
            }
        }
        if(j==vowel.length){
            return false;
        }
    }
    return true;
}

console.log(checkVowel("aueuui"));
console.log(checkVowel("aueuwui"));
