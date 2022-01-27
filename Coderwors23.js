//Sum of Array Averages
const sumAverage = (arr) => {
    let result;
    return Math.floor(arr.reduce((a,b)=>a+b.reduce((c,d)=>c+d)/b.length,0));
    return result;
  }