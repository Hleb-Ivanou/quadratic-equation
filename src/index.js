module.exports = function solveEquation(equation) {
  var arr = [];
  var newArr = [];
  var str = '';
  var re = /(\*x\^2)|(\*x)/;
  var d = 0;
  var x1 = 0;
  var x2 = 0;
  str = equation.replace(/\s/g, '');
  arr = str.split(re);
  newArr = arr.filter(function(element){
     return Number(element);
  });
  var a = parseInt(newArr[0], 10);
  var b = parseInt(newArr[1], 10);
  var c = parseInt(newArr[2], 10);

  d = Math.sqrt( Math.pow(b, 2) - 4 * a * c );
  x1 =  (- b - d) / (2 * a);
  x2 =  (- b + d) / (2 * a);
  return [Math.round(x1), Math.round(x2)].sort(function(a, b) {return a - b})
}


// solveEquation('2 * x^2 - 10 * x + 12')
