Struggling with:
Using Objects for Lookups
Not PassedTesting Objects for Properties
Record Collection


                                                    Accessing Object Properties with Variables
                                                    // Setup
                                                    var testObj = {
                                                      12: "Namath",
                                                      16: "Montana",
                                                      19: "Unitas"
                                                    };

                                                    // Only change code below this line;

                                                    var playerNumber = [16];       // Change this Line
                                                    var player = testObj[playerNumber];  // Change this Line



            Counting Cards
            var count = 0;

            function cc(card) {
              // Only change code below this line
              if (typeof card === 'number'){
                if (card >= 2 && card <= 6){
                  count++;
                } else if (card === 10) {
                  count--;
                }
              }
              if (typeof card === "string"){
                if (card === "J"|| card === "Q"|| card ==="K"||card === "A"){
                  count--;
                }
              }
              
              if (count > 0) {
                return count.toString() + " Bet";
              } else {
                return count.toString() + " Hold";
              }
              // Only change code above this line
            }

            // Add/remove calls to test your function.
            // Note: Only the last will display
            cc(2); cc(3); cc(7); cc('K'); cc('A');

                                                                Using Objects for Lookups
                                                                // Setup
                                                                function phoneticLookup(val) {
                                                                  var result = "";

                                                                  // Only change code below this line
                                                                  var lookup = {
                                                                    "alpha": "Adams",
                                                                    "bravo": "Boston",
                                                                    "charlie": "Chicago",
                                                                    "delta": "Denver",
                                                                    "echo": "Easy",
                                                                    "foxtrot": "Frank"
                                                                  }
                                                                  
                                                                  result = lookup[val]
                                                                  // Only change code above this line
                                                                  return result;
                                                                }

                                                                // Change this value to test
                                                                phoneticLookup("charlie");
                                                                

                    //last question
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

