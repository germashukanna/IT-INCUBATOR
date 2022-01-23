// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    if(sonYearsOld * 2 > dadYearsOld) return sonYearsOld * 2 - dadYearsOld;
    else return dadYearsOld - sonYearsOld * 2;
  }
    function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
  }