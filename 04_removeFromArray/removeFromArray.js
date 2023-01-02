const removeFromArray = function(...args) {

    //take the arguments and change them from array-like into a real array (should also work with objects)
    const array = args[0];
    //create an array to hold the final result
    const finalArray = [];

    //clever method for doing a For loop through an array
    array.forEach((item) => {
        //if the loop finds the item in both the array its looping and the arguments being passed, it skips over.
        if(!args.includes(item)){
            //if it doesn't find a match, it adds the item to the new array, thus effectively removing it by making a new one without that item.
            finalArray.push(item);
            console.log(finalArray);
        }
    })
    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
