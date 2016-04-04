describe ('Game', function() {

  var game

  beforeEach(function(){
      game = new Game();
    });

    it('game begins at frame 1', function () {
      expect(game.currentFrame).toEqual(1);
    });

    it("ends the game after 10 frames", function() {
        game.currentFrame = 10;
        expect( function() {game.nextFrame(); } ).toThrow(new Error("Game over"));
    });

    // it('can move to next frame', function() {
    //   game.nextFrame();
    //   expect(game.currentFrame).toEqual(2);
    // });

    it('moves to next frame after two rolls (when first roll is not a strike)', function() {
      game.rollBall(1);
      game.rollBall(1);
      expect(game.currentFrame).toEqual(2);
    });

    it('can move to the next roll of the frame', function () {
     game.rollBall(1);
     game.rollBall(1);
     expect(game.roll).toEqual(2);
    });

    it('stores a score in the correct framez hash for each roll', function() {
     game.rollBall(3);
     game.rollBall(4);
     expect(game.framez[1]).toEqual([3, 4]);
    });

    it('returns total score for a frame', function() {
      game.rollBall(2);
      game.rollBall(7);
      expect(game.totalFrameScore(1)).toEqual(9);
    });

    // describe ("strike logic", function() {
      it('moves to next frame after a strike', function() {
        game.rollBall(10);
        expect(game.currentFrame).toEqual(2);
      });

    // };

});
