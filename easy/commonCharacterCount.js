/* 

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

*/ 

function commonCharacterCount(s1, s2) {
    let count = 0;
    s2 = s2.split(""); 
    
    for (var i = 0; i < s1.length; i++) {
        let char1 = s1[i]; 
        
        if (s2.indexOf(char1) !== -1) {
            count++; 
            s2.splice(s2.indexOf(char1), 1)
        }
    }
    
    return count; 
}

