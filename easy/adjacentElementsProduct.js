/* 
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

*/ 

function adjacentElementsProduct(inputArray) {
    var arr = []; 
    
    for (var i = 0; i < inputArray.length - 1; i++) {
        arr.push(inputArray[i] * inputArray[i+1])
    }
   
  var sorted = arr.sort((a,b) => a - b)
   return sorted[sorted.length - 1]
}
