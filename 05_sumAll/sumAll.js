const sumAll = function(num1, num2) {
  
    //Task: Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
    
    //sterilize input for integers only

    //loop between the numbers and add every number between them

    //return the final number
    var sum = 0;

    if(Number.isInteger(num1) && Number.isInteger(num2) && Math.sign(num1) == 1 && Math.sign(num2) == 1)
    {
        if(num1 < num2){
            for(i=num1; i <= num2; i++)
            {
                sum = sum+i;
            }
        }
        else
        {
            for(i=num2; i <= num1; i++)
            {
                sum = sum+i;
            }
        }
    }
    else
    {
        sum = 'ERROR';
        console.log(sum);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
