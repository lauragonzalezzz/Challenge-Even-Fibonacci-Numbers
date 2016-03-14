/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
 var fibArray = [];

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var firstNum = 0;
  var secondNum = 1;
  var a;

  for (var i = 0; maxFibValue > secondNum; i++) {
    a = firstNum;
    firstNum = secondNum;
    secondNum += a;
    if (secondNum <= maxFibValue && secondNum % 2 === 0) {
      fibArray.push(secondNum);
    }
  }
  addEvens(fibArray);
  return 'The sum of the all the even fib numbers up to ' + maxFibValue + ' is ' + sum;
}

function addEvens(arr) {
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};