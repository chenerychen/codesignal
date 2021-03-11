/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

*/
function palindromeRearranging(inputString) {
    
    if (inputString.length === 1 || inputString === inputString.split("").reverse().join("")) {
        return true; 
    } 
    
   

    let hash = {}; 
    let count = 0; 
    
    for (var i = 0; i < inputString.length; i++) {
        //  let count = 0; 
        if (hash[inputString[i]] === undefined) {
            hash[inputString[i]] = 1; 
            // console.log(hash)
        } else {
            hash[inputString[i]] += 1
        }
    }
   

    for (let i in hash) {
        if (hash[i] % 2 === 0 && inputString.length > 3 && i !== 0) {
            count += 1 
        } else if (hash[i] % 2 === 0 && inputString.length <= 3 ) {
            count += 2 
        }
    
    } 
    return count >= 2
}
