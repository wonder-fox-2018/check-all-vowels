function checkAllVocal(str) {
  let vocal = ['a','i','u','e','o','A','I','U','E','O'], i;
  let totalVocal = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j]) {
        totalVocal++
        break;
      }
      
    }
  }
  if (totalVocal === str.length) {
    return true
  } else {
    return false
  }
}

console.log(checkAllVocal('Agung'));//false
console.log(checkAllVocal('Aiu'));//true
console.log(checkAllVocal('ooou'));//true

