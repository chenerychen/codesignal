/* 

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

*/ 

function reverseInParentheses(inputString) {
    let inputArray = inputString.split(""); 
    let result = []; 
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== ')') {
            result.push(inputArray[i]); 
        } else {
            let reversed = reverseSelectedString(result); 
            result = result.splice(0, result.lastIndexOf("("))
            result = result.concat(reversed); 
        }
    }
    
    return result.join(""); 
 }
 
 function reverseSelectedString(reverseArr) {
    let r = []; 
 
     for (let i = reverseArr.length; i >= 0; i--) {
         if (reverseArr[i] !== "(") {
             r.push(reverseArr[i]); 
         } else {
             break; 
         }
     }
     
     return r; 
 }
