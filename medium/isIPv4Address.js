/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.


*/ 

// let a = ".254.255.0"

// let b = a.split(".")

// b

function isIPv4Address(inputString) {
    
    let testing = inputString.split(".")
    
    if (testing.length !== 4 || testing.includes("")) {
        return false
    }
    
    for (let i = 0; i < testing.length; i++) {
        let num = testing[i]; 
        
        if (parseInt(num) > 255 ||  parseInt(num).toString() !== num) {
            return false; 
            if (num.length > 2 && num[0] == '0') {
                return false 
            }
        }
    }
    
    return true
 
}
