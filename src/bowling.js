var Game = function () {
  this.currentFrame = 1;
  this.framez = {1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: []};
  this.pins = 10;
  this.roll = 1;
};

Game.prototype.nextFrame = function(){
  if (this.currentFrame === 10) {
    throw new Error("Game over")
  }
  else {
    this.currentFrame += 1
  }
};

Game.prototype.firstRoll = function(pins) {
    this.framez[this.currentFrame].push(pins);
   if (this.framez[this.currentFrame].length === 2) {
     this.pins = 10
     this.nextFrame();
   }
  //  else {
  //   this.nextRoll();
  //   this.pins = this.pins - pins;
  //  }
  };

  // Game.prototype.nextRoll = function() {
  //   if (this.roll >= 2) {
  //     this.nextFrame();
  //   }
  //   else {
  //     return this.roll += 1;
  //   }
  // };
