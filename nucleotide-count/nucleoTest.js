DNA = function (dnaAdd){

  this.nucleotideCounts = (function(){
    var tides = { A : 0, T : 0, C : 0, G : 0 };
    dnaSplit = dnaAdd.split("")
    for (var i = 0; i < dnaSplit.length; i++){
      for(type in tides){
        if (dnaSplit[i] === type){
          tides[type] +=1;
        }
      }
    }
    return tides;
  })();



  this.count = function(DNAtype){
    if (this.nucleotideCounts[DNAtype] === undefined && "ATCGU".indexOf(DNAtype) !== -1){
      return 0;
    } else if(this.nucleotideCounts[DNAtype] === undefined && "ATCGU".indexOf(DNAtype) === -1){
      throw new Error("Invalid Nucleotide");
    }
    else {
      for (type in this.nucleotideCounts){
        if (type === DNAtype){
          return this.nucleotideCounts[type];
        }
      }
    };
  }
};

























// DNA = function(strand){
//   this.startTides = function(){
//     var tides = { A: 0, T: 0, C: 0, G: 0}
//     return tides;
//   }

//   this.beginDNA = strand
//   strandBreak = this.beginDNA.split("")
  // for (var i = 0; i < strandBreak.length; i++){
  //   for(type in this.nucleotideCounts){
  //     if (strandBreak[i] === type){
  //       this.nucleotideCounts[type] +=1;
  //     }
  //   }
  // }
// };


// DNA.prototype.nucleotideCounts = function(string){
//   if(string===undefined){
//     console.log(this.startTides)
//     return this.startTides()
//   }
// }();

// DNA.prototype.count = function(DNAtype){
//   if (this.nucleotideCounts[DNAtype] === undefined){
//     return 0;
//   }
//   for (type in this.nucleotideCounts){
//     if (type === DNAtype){
//       return this.nucleotideCounts[type]
//     }
//   }
//   console.log(this.nucleotideCounts)
// }



