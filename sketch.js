
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball,ground,box1,box2,box3;
var dustbin,dustbinImage,ballImage;

function preload()
{
	dustbinImage= loadImage("dustbingreen.png");
	ballImage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100, 200, 40, 40);


	box1 = new Box(770,645,15,80);
	
	box2 = new Box(670,645,15,80);
	box3 = new Box(715,680,100,15);

	dustbin = createSprite(720,609);
	dustbin.addImage("dustbin",dustbinImage);
    dustbin.scale=0.5

	ground = new Ground(100,689,10000,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-90})


}



}



