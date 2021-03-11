/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

*/ 
function addBorder(picture) {
    let res = [];
    let row = picture[0].length; 
    let height = picture.length; 
    
    res.unshift('*'.repeat(row+2)); 
    
    for (let i = 0; i < picture.length; i++) {
        let r = picture[i].split(""); 
        r.unshift("*"); 
        r.push("*"); 
        r.join(""); 
        res.push(r.join("")); 
    }
    
    res.push('*'.repeat(row+2))
    
    return res; 
    
    
}


