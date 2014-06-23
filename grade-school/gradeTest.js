var School = function(){
  this.gradeObject = {}
}

School.prototype.roster = function(){

  return this.gradeObject;
};

School.prototype.add = function(name, grade){
    if (this.gradeObject[grade]===undefined){
      this.gradeObject[grade] = [name]
    } else {
      this.gradeObject[grade].push(name)
      this.gradeObject[grade] = this.gradeObject[grade].sort()
    }
}

School.prototype.grade = function(level){
   if(this.gradeObject[level] === undefined){
    return []
  } else {
    return this.gradeObject[level].sort();
  }
};




