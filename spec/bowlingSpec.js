describe ('Game', function() {

  var game

  beforeEach(function(){
      game = new Game();
    });

  it('starts each frame with 10 pins', function () {
    expect(game.pins).toEqual(10);
  });


});
