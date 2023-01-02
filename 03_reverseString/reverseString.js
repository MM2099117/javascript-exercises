const reverseString = function(string) {

    //declare final string
    let finalString = '';

    //start at -1 from the end, the last character in the string
    //while i is greater than or equal to 0, or otherwise, until it gets back to the starting position
    //increment backwards
    for(let i = string.length -1; i >= 0; i--)
    {
        //new string = new string + character we just extracted, working backwards through the array
        finalString += string[i];

    }
    
    return finalString;

    

};

// Do not edit below this line
module.exports = reverseString;
