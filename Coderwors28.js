//Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
    let x = nRows - row;
    let y = nCols - col + 1
    return x * y;
  }
  