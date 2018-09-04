function cekvokal(string){
    let hurufvokal = 'aiueoAIUEO'
    for (let i = 0; i < string.length; i++)     
        if(hurufvokal.indexOf(string[i]) == -1) 
            return false
    
    return true
}
console.log(cekvokal('mkamlaiueo'))
console.log(cekvokal('aiuuoe'))