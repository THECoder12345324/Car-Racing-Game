var hypnoticBall, database;
var position;

var canvas;
var gamestate = 0;
var playerCount;
var form, player, game, allplayers;

var car1, car2, car3, car4;
var cars = [];

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 80 ,displayHeight - 200);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if (playerCount === 4) {
    game.updateState(1);
  }
  if (gamestate === 1) {
    clear();
    game.play();
  }
}
