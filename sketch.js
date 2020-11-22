
var monkey , monkey_running;
//var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var gorund;
var servivaltime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,510)

  ground=createSprite(300,450,5000,20);
  ground.velocityX=-4;
  ground.X=ground.width/2;
  console.log(ground.x);
  
  monkey=createSprite(200,400,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
   
  
  
}


function draw() {
background("white");
  
 if( keyDown("space")){
   monkey.velocityY=-12;
 }
 if(ground.x<0){ 
   ground.x=ground.width/2;
 }
monkey.collide(ground);
   
  drawSprites();
  text("servivaltime: "+ score, 500,50);
}
 function obstace(){
var obstace = createSprite(0,Math.round(random(20, 410)), 10, 10);
obstace=addImage(obstaceImage)
  obstacelifetime=150;
 }
function banana(){
var banana = createSprite(0,Math.round(random(20, 410)), 10, 10);
banana=addImage(bananaImage)
  bananaLifetime=150;
}
