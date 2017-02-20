// Logarithmic time example: O(log n)
// Recursively print the right half of a string
var right = function(str) {
  var length = str.length;

  // Helper function
  var printFromIndex = function(index) {

    // Recursive Case: Print right half
    if (index < length) {

      // Prints characters from index until the end of the array
      console.log(str.substring(index, length))

      // Recursive Call: call help on right half
      printFromIndex(Math.ceil((length + index) / 2))
    }

    // Base Case: Do Nothing
  };

  // Start
  printFromIndex(0);
};

// Execute
right("123456789§");
