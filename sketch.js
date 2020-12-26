var Play=1
var End=0
var gameState=Play;
var monkey , monkey_running
var bananaImage,obstacleImage
var FoodGroup, obstacleGroup
var score=0
var path,jungle,jungleimg;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 jungleimg=loadImage("jungle.jpg");
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(40,450,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  
  path=createSprite(30,480,940,10)
  path.velocityX=-2;
  path.x = path.width/2;
  
  jungle=createSprite(0,0,500,500)
  jungle.addImage("jungle",jungleimg)
  jungle.scale=1.5
  jungle.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
   jungle.velocityX=-2;
  jungle.x = jungle.width/2;
  
  
  obstacleG=new Group();
  bananaG=new Group();
  
}


function draw() {
background(225);
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score, 400,50);

   stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  
  
  
  if(gameState===Play){
    
    if(keyDown("space")&& monkey.y >= 280) {
      monkey.velocityY = -12;
   }
  monkey.velocityY = monkey.velocityY + 0.8
    
     Spawnobstacles();
  Spawnbanana();
    
    if(monkey.isTouching(obstacleG)){
      gameState=End;
    }
  }
   if(gameState===End){
    monkey.velocityY = monkey.velocityY + 0.8;
     jungle.velocityX=0;
    bananaG.velocityX=0;
    obstacleG.velocityX=0;
   }
  
  if (path.x < 0){
      path.x = path.width/2;
  }
  path.visible=false;
  
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
  }
  
  
   
  
  
  
  monkey.collide(path);
  
 
 drawSprites();
text("survivalTime: "+ survivalTime, 100,50);
}
function Spawnbanana(){
if (frameCount % 60 === 0) {
    var banana = createSprite(500,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    
    
  }
  
}
function Spawnobstacles(){
if (frameCount % 200 === 0) {
    var obstacles = createSprite(Math.round(random(400,500)),450,20,10);
    obstacles.addImage( "obstsacle",obstaceImage);
    obstacles.scale = 0.2 ;
    obstacles.velocityX = -4;
    
    obstacles.lifetime = 200;
                           
    obstacleG.add(obstacles)
    
  }
  
}
  







