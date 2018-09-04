function cekVokal(cek){
    for (var i=0; i<cek.length; i++){
        console.log(cek[i])
        if (cek[i]==='a'){}
        else if (cek[i]==='i'){}
        else if (cek[i]==='u'){}
        else if (cek[i]==='e'){}
        else if (cek[i]==='o'){}
        else {
            return false
        }
    }
    return true
}

console.log(cekVokal('aiueo'))
console.log(cekVokal('aiueol'))