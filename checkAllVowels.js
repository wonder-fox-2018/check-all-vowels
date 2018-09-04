function checkAllVowels(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== 'a' && str[i] !== 'i' && str[i] !== 'u' && str[i] !== 'e' && str[i] !== 'o') {
			return true;
		}
	}

	return false;
}

console.log(checkAllVowels('aiueox')); // TRUE
console.log(checkAllVowels('aiueo')); // FALSE
console.log(checkAllVowels('aiyueo')); // TRUE
console.log(checkAllVowels('aiu')); // FALSE
