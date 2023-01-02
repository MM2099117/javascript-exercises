const convertToCelsius = function(temperature) {

  var CTemp;
  var workingNumber;
  var roundedCTemp;

  CTemp = temperature - 32;
  workingNumber = CTemp/1.8;
  roundedCTemp = workingNumber.toFixed(1);
  roundedCTemp = parseFloat(roundedCTemp);
  return roundedCTemp;


};

const convertToFahrenheit = function(temperature) {

  var FTemp;
  var workingNumber;
  var roundedFTemp;

  FTemp = temperature * 1.8;
  workingNumber = FTemp + 32;
  roundedFTemp = workingNumber.toFixed(1);
  roundedFTemp = parseFloat(roundedFTemp);
  return roundedFTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
