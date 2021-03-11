/*

Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output

*/


function arrayMaximalAdjacentDifference(inputArray) {
    let dif = -Infinity; 
    
    for (let i = 0; i < inputArray.length-1; i++) {
        if ((dif <= inputArray[i] - inputArray[i+1]) && inputArray[i] >= inputArray[i+1]) {
            dif = inputArray[i] - inputArray[i+1]
        } else if ((dif <= inputArray[i+1] - inputArray[i]) && inputArray[i+1] >= inputArray[i]) {
            dif = inputArray[i+1] - inputArray[i]
        }
    }
    return dif 
}
