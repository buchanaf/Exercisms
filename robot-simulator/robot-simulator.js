var Robot = function(){

  this.place = function(obj){
    this.orient(obj.direction);
    this.at(obj.x, obj.y);

  }

  this.evaluate = function(inst){
    var commands = this.instructions(inst);
    for(var i = 0; i<commands.length;i++){
      if(commands[i] === 'turnLeft'){
        this.turnLeft();
      } else if(commands[i] === 'turnRight'){
        this.turnRight();
      } else if(commands[i] === 'advance'){
        console.log(this.advance)
        this.advance();
      }
    }
  }

  this.advance = function(){
    if(this.bearing === 'north'){
      this.coordinates[1] += 1;
    } else if (this.bearing === 'south'){
      this.coordinates[1] -= 1;
    } else if (this.bearing === 'east'){
      this.coordinates[0] += 1;
    } else if (this.bearing === 'west'){
      this.coordinates[0] -= 1;
    }
  }

  this.instructions = function(inst){

    var list = inst.split('');
    console.log(list);
    var resultsArr = [];
    var instructionObject = {
      "L": 'turnLeft',
      "R": 'turnRight',
      "A": 'advance',
    }
    list.forEach(function(item){
      resultsArr.push(instructionObject[item])
    });

    return resultsArr;
  }

  this.at = function(coords){
    var args = arguments;
    this.coordinates = [];
    this.coordinates.push(args[0]);
    this.coordinates.push(args[1]);
  }

  this.orient = function(direction){
    this.bearing = direction
  }

  this.turnRight = function(){
    var rightObject = {
      'west':'north',
      'north':'east',
      'east':'south',
      'south':'west'
    }

    this.bearing = rightObject[this.bearing]

    }

  this.turnLeft = function(){
    var leftObject = {
      'west':'south',
      'north':'west',
      'east':'north',
      'south':'east'
    }

    this.bearing = leftObject[this.bearing]

    }

}

