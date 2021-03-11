/*

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.

*/ 

function centuryFromYear(year) {
    var stringYear = year.toString();
    
    if (year < 1000) {
        return Math.ceil(year / 100)
    } 
    
    for (var i = 0; i < stringYear.length; i++) {
        if (parseInt(stringYear[2]) > 0 || parseInt(stringYear[3]) > 0) {
            return (parseInt(stringYear.slice(0,2)) + 1)
        }
        else {
            return parseInt(stringYear.slice(0,2))
        } 
    }
    
}
