//Sum of a Beach
function sumOfABeach(beach) {
    let reg = /sand|water|fish|sun/gi;
    let arr = beach.match(reg);
    return !arr ? 0 : arr.length;
  }