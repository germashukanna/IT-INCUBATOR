//CSquare(n) Sum
function squareSum(numbers){
    var total = 0;
    
      for(var i = 0; i < numbers.length; i++) {
        total += numbers[i] * numbers[i]; 
      }
    
    return total;
    }
