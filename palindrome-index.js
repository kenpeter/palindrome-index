'use strict';


function palindrome_index(s) {
	s = s.split('');
  	for (let i = 0; i < s.length / 2; i++) {
    	if (s[i] !== s[s.length - i - 1]) {
		let arr = s.slice(i + 1, s.length - i);

		// test
		console.log('---');
		console.log(i);
		console.log(arr);

      	return arr.join('') === arr.reverse().join('') ? i : s.length - i - 1;
    }
  }
  return -1;

}

let input = 'abczzkdba';
let out = palindrome_index(input);
console.log(out);

