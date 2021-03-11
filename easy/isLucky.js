/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    let strN = String(n), 
    middle = strN.length / 2, 
    firstHalf = 0,
    secondHalf = 0;
    
    for (var i = 0; i < middle; i++) {
        firstHalf += parseInt(strN[i]); 
        secondHalf += parseInt(strN[i+middle])
    }
    
    if (firstHalf === secondHalf) {
        return true; 
    } else {
        return false; 
    }
    
}
