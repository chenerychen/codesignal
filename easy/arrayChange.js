/* 
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

*/ 

function arrayChange(inputArray) {
    let sum = 0; 
    let arr = []; 
    
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] < inputArray[i+1]) {
            let nextNumber = inputArray[i+1]
            
            sum += inputArray[i+1] - nextNumber;
            
            
        } else {
            let nextNum = inputArray[i] + 1; 
            // arr.push(inputArray[i]); 
            // arr.push(nextNum); 
            sum += nextNum - inputArray[i+1];
            inputArray[i+1] = nextNum; 
            
        }
      
    }
    
   return sum; 
    
}
