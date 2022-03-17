celsius = 0;
fahrenheit = 32

const ftoc = function(far, cel) {
   celResult = cel === (far - 32) / 1.8
   result = Math.round(celResult * 10) /10
   return result

};

const ctof = function(far, cel) {
  far = fahrenheit;
  cel = celsius;
  farResult = far === (cel * 1.8) + 32
  result = Math.round(farResult * 10) /10
  return result
   
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
