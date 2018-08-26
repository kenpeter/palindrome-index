'use strict';


function getPalindromeIndex(str){
    //crux: compare start and end
    //if start is different with end, check palindrome with removal of both
    //continue till start meets end

	// start index
    var start = 0;

	// end index
    var end = str.length - 1;

	// tmp
    var tmp = '';
   
	// is pal, do nothing 
    if(isPalindrome(str)){
        return -1;
    }
   
	// not yet pal 
    while(start !== end){
		// start end not same	
        if(str[start] !== str[end]){
			// we dry replace, then check
            tmp = replaceAt(str, start,'');
			// start, then return
            if(isPalindrome(tmp)){
                return start;
            }
            
			// end, then return
            tmp = replaceAt(str,end,'');
            if(isPalindrome(tmp)){
                return end;
            }         
        }        
       
		// good 
        start++;
        end--;
    }
    
    return -1;    
}

// floor, run down e.g. 3.5 -> 3
function isPalindrome(str){
	// end index
	var end = str.length - 1;
	// mid index
	var mid = Math.floor(str.length / 2);

	// even, all good
	// old left mid 	
	for(var i = 0; i < mid; i++){
		if(str[i] !== str[end - i]){
			return false;
		}
	}
	return true;
}

// give a str, at index, replace with char
// char most empty
function replaceAt(str,i,char){
    return str.substring(0,i) + char + str.substring(i+1);
}

let input = 'abczzkdba';
let out = getPalindromeIndex(input);
console.log(out);

