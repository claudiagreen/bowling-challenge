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

Game.prototype.rollBall = function(pins) {
    this.framez[this.currentFrame].push(pins);
   if (pins === 10 || this.framez[this.currentFrame].length === 2) {
     this.pins = 10
     this.nextFrame();
   }
   else {
    this.rollBallAgain();
    this.pins = this.pins - pins;
   }
  };

  Game.prototype.rollBallAgain = function() {
    if (this.roll >= 2) {
      this.nextFrame();
    }
    else {
      return this.roll += 1;
    }
  };

  Game.prototype.totalFrameScore = function(frame){
    var total = 0;
    for (var i = 0; i < this.framez[frame].length; i++) {
      total += this.framez[frame][i];
    }
    return total;
  };
