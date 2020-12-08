var hypnoticBall, database;
var position;

var canvas;
var gamestate = 0;
var playerCount;
var form, player, game;

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
}
