//Number of People in the Bus
var number = function(busStops){
    return busStops.reduce((accum, [a,b]) => accum + a - b, 0)
  }