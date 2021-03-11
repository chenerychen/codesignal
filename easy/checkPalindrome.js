/* 
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.

*/ 

function checkPalindrome(inputString) {
    if (inputString.length === 1) {
        return true
    } 
    
    for (var i = 0; i < inputString.length; i++) {
        var fC = inputString[i]; 
        if (fC !== inputString[inputString.length - 1 - i]) {
            return false 
        }   
    }
    return true
}
