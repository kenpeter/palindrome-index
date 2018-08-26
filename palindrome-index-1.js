'use strict';


function getPalindromeIndex(str){
    //crux: compare start and end
    //if start is different with end, check palindrome with removal of both
    //continue till start meets end
    var start = 0;
    var end = str.length - 1;
    var tmp = '';
    
    if(isPalindrome(str)){
        return -1;
    }
    
    while(start !== end){
        if(str[start] !== str[end]){
            tmp = replaceAt(str,start,'');
            if(isPalindrome(tmp)){
                return start;
            }
            
            tmp = replaceAt(str,end,'');
            if(isPalindrome(tmp)){
                return end;
            }         
        }        
        
        start++;
        end--;
    }
    
    return -1;    
}

function isPalindrome(str){
	var end = str.length - 1;
	var mid = Math.floor(str.length / 2);
	
	for(var i = 0; i < mid; i++){
		if(str[i] !== str[end - i]){
			return false;
		}
	}
	return true;
}

function replaceAt(str,i,char){
    return str.substring(0,i) + char + str.substring(i+1);
}

let input = 'abczzkdba';
let out = getPalindromeIndex(input);
console.log(out);

