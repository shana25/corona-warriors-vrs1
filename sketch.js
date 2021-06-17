var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game,flag=0;
var player1,player2;
var players;
var coronas;
var drops;
var coronaGroup;
var c1_img, c2_img,c3_img, c4deadly_img;
var player_img;
var hospital_img;


function preload(){
  back_img = loadImage("images/bg2.jpg");
  player1_img = loadImage("images/doc1.png");
  player2_img = loadImage("images/doc2.png");
  c1_img = loadImage("images/c1.png");
  c2_img = loadImage("images/c2.png");
  c3_img = loadImage("images/c3.png");
  c4deadly_img = loadImage("images/c4deadly.png");
  hospital_img = loadImage("images/hopitalbg.jpg");
  coronaGroup = new Group();
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
