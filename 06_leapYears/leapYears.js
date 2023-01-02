const leapYears = function(year) {

    //Task: Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

    //rules: leap year is divisible by 4
    //not divisible by 100
    //divisble by 400

    if(year % 4 == 0  && year % 100 != 0){
        return true;
    }
    else if(year % 400 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
