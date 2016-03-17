/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
 

function _sumFibs( maxFibValue ) {
  var firstNum = 0;
  var secondNum = 1;
  var a;
  var fibArray = [];

  for (var i = 0; maxFibValue > secondNum; i++) {
    a = firstNum;
    firstNum = secondNum;
    secondNum += a;
    if (secondNum <= maxFibValue && secondNum % 2 === 0) {
      fibArray.push(secondNum);
    }
  }
  console.log(fibArray);
  return addEvens(fibArray);
}

function addEvens(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
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