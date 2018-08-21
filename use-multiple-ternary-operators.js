function checkSign(num) {
    return num >= 0 ? "positive" : (num <= 0) ? "negative" : "zero"; 
  }
  
  checkSign(10);

  /*
    last question
    Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.

    function checkSign(num) {
    return num >= 0 ? "positive" : (num <= 0) ? "negative" : "zero"; 
    }

    checkSign(10);

    Note:
    checkSign should use multiple conditional operators
    Passed
    checkSign(10) should return "positive". Note that capitalization matters
    Passed
    checkSign(-12) should return "negative". Note that capitalization matters
    checkSign(0) should return "zero". Note that capitalization matters

*/