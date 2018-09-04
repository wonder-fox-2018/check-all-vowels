function checkvowels(huruf){

  var hrfvocal = ['a','i','u','e','o'];
  var tmp = ""
  for (var i = 0; i < huruf.length; i++) {
    for (var j = 0; j < hrfvocal.length; j++) {
      // console.log(hrfvocal[j]+" "+ huruf[i])
      if (hrfvocal[j] === huruf[i]) {
        tmp += hrfvocal[j]
      }
    }
  }
  if (tmp.length === huruf.length) {
    return true
  }
  return false
}

console.log(checkvowels('test'));//FALSE
console.log(checkvowels('aiuaaaeoa'));//TRUE
console.log(checkvowels('ajin')); //FALSE
console.log(checkvowels('berat coy')); //FALSE
console.log(checkvowels('aiueo')); //TRUE
