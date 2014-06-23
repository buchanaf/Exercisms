var dateSlicer = function(date){
  return date.toString().slice(16,21);
}

var at = function(timeH, timeM){
  var hour = timeH | 0;
  var minute = timeM | 0;
  var clockTime = new Date(0,0,0,hour,minute);

  clockTime = dateSlicer(clockTime);

  var clock = {};

  clock.plus = function(adder){
    clockTime = new Date(0,0,0,hour,minute + adder);
    clockTime = dateSlicer(clockTime);
    return clock;
  }

  clock.minus = function(minus){
    clockTime = new Date(0,0,0,hour,minute - minus);
    clockTime = dateSlicer(clockTime);
    return clock;
  }

  clock.equals = function(clock2){
    return clockTime === clock2.toString();;
  }

  clock.toString = function(){
    return clockTime;
  }

  return Object.create(clock);
}


