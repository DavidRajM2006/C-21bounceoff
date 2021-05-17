var movingRect,fixedRect;
var gameOb1,gameOb2,gameOb3;
var ob4,ob5;

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(200,200,50,50);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="black";
  fixedRect.shapeColor="black";
  gameOb1=createSprite(100,200,100,50);
  gameOb2=createSprite(300,200,100,50);
  gameOb3=createSprite(500,200,100,50);
  ob4=createSprite(100,400,100,50);
  ob5=createSprite(600,400,100,50);
  ob4.velocityX=4;
  ob4.shapeColor="green";
  ob5.velocityX=-4;
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(gameOb1,movingRect)){
    movingRect.shapeColor="red";
    gameOb1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="black";
    gameOb1.shapeColor="black"; 
  }
  if(isTouching(gameOb2,movingRect)){
    movingRect.shapeColor="red";
    gameOb2.shapeColor="red";
  }
  else{
    gameOb2.shapeColor="black"; 
  }

  bounceOff(ob4,ob5);

  
console.log(fixedRect.x-movingRect.x)
  drawSprites();
}

