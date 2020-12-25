const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball;
var ground,groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();   // need clarification
	world = engine.world;		// need clarification

	//Create the Bodies Here.
	box1 = new Dusbin(720,630,20,100);
	box2 = new Dusbin(635,670,150,20);
	box3 = new Dusbin(550,630,20,100);
	ball = new Paper(30,600,15);
	//groundSprite = new Ground(400,420,800,20)
	ground = new Ground(400,690,800,20);
	
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);

  //groundSprite.x = ground.position.x
  //groundSprite.y = ground.position.y
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  drawSprites();
 keyPressed();
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5});
	 //  Matter.Body.setStatic(ball,false);
   }
}


