/* 
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

*/ 
function longestString(arr) {
    let lG = ""; 
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]; 
        
        if (word.length > lG.length) {
            lG = word 
        }
    }
    
    return lG; 
}

function allLongestStrings(inputArray) {
    let words = []; 
    let longestWord = longestString(inputArray)
    
    for (let i = 0; i < inputArray.length; i++) {
        let word = inputArray[i];
        
        if (word.length === longestWord.length) {
            words.push(word)
        }
    }
    
    return words; 
}
