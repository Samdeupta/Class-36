var database;
var gameState = 0;
var playerCount = 0;
var form,player,game;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game= new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");

  if(playerCount === 4){
    game.update();
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
  
  drawSprites();
  
}


