var hypnoticBall, database;
var position;

var canvas;
var gamestate = 0;
var playerCount;
var form, player, game, allplayers;

var car1, car2, car3, car4;
var car1img, car2img, car3img, car4img, trackimg;
var cars = [];
function preload() {
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  trackimg = loadImage("images/track.jpg");
}

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
  if (gamestate === 2) {
    clear();
    game.end();
  }
}