describe ('Game', function() {

  var game

  beforeEach(function(){
      game = new Game();
    });

    it('game begins at frame 1', function () {
      expect(game.currentFrame).toEqual(1);
    });

    it('can move to next frame', function() {
      game.nextFrame();
      expect(game.currentFrame).toEqual(2);
    });

    it('moves to next frame after two rolls (when first roll is not a strike)', function() {
      game.firstRoll(1);
      game.firstRoll(1);
      expect(game.currentFrame).toEqual(2);
    });

    it("ends the game after 10 frames", function() {
        game.currentFrame = 10;
        expect( function() {game.nextFrame(); } ).toThrow(new Error("Game over"));
    });

});
