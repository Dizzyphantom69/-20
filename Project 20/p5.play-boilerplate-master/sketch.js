var car,wall;
var weight,speed;



function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,20,20);
  
  
  wall = createSprite(800,300,40,400);
  wall.shapeColor= "black";
  
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation = ((0.5*weight*speed*speed)/22500);
if(deformation>180){
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(255,0,0)
}
  }



  drawSprites();


  }

  
  
  
  
