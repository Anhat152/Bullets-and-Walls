var bullet,wall;
var speed,weight;
var thickness;
var deformation
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100,200,50,50);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(32,50);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor="grey";
}

function draw() {
  background(0); 
if( wall.position.x-bullet.position.x<bullet.width/2+wall.width/2){
bullet.velocityX=0;
deformation=0.5*speed*speed*weight/thickness*thickness*thickness;
if(deformation>10){
  bullet.shapeColor="red";
}
if(deformation<10){
  bullet.shapeColor="green";
}
}
  
  
  




  drawSprites();
  
}
