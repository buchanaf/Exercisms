var SpaceAge = function(num){
  this.seconds = num;
}

SpaceAge.prototype.onEarth = function(){
  return Math.round((this.seconds/31557600)*100)/100
}

SpaceAge.prototype.onMercury = function(){
  return Math.round((this.seconds/(31557600*.2408467)*100))/100
}

SpaceAge.prototype.onVenus = function(){
  return Math.round((this.seconds/(31557600*0.61519726))*100)/100
}

SpaceAge.prototype.onMars = function(){
  return Math.round((this.seconds/(31557600*1.8808158))*100)/100
}

SpaceAge.prototype.onJupiter = function(){
  return Math.round((this.seconds/(31557600*11.862615))*100)/100
}

SpaceAge.prototype.onSaturn = function(){
  return Math.round((this.seconds/(31557600*29.447498))*100)/100
}

SpaceAge.prototype.onUranus = function(){
  return Math.round((this.seconds/(31557600*84.016846))*100)/100
}

SpaceAge.prototype.onNeptune = function(){
  return Math.round((this.seconds/(31557600*164.79132))*100)/100
}