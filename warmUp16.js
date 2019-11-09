// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.



function instances(str) {
	
	var a = 0 ;
	var b = 0 ;
	var l = 0;
	var n = 0;
	var o = 0;

for(var i = 0; i < str.length; i++) {
	
	if(str[i] === "a") {
			a ++
	} else if(str[i] === "b") {
			b ++
	} else if(str[i] === "l") {
			l ++
	} else if(str[i] === "n") {
			n ++
	} else if(str[i] === "o") {
			o ++
	}
}

	l = Math.floor(l / 2);
	o = Math.floor(o / 2);
    
    return Math.min(a, b, l, n, o )
}