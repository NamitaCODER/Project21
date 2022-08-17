
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	 
}

function setup() {
	createCanvas(1000, 900);

	engine = Engine.create();
	world = engine.world;

	ball.mouseClicked(hforce)
	ball.mouseClicked(vforce)

	//Create the Bodies Here.
	ground = new Ground(500,890,1000,20)
	right = new Ground(490,,20,10)
	
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	  }

	ball=Bodies.circle(200,100,10,ball_options);


	World.add(world,ball);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  groundObj.display();

  groundObj = new ground(width/2,670,width,20)
  leftSide = new ground(1100,600,20,120)

   function keyPressed(){
	if (keyCode === UP_ARROW){
		function hforce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		  }
		  
		  function vforce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		  }
	}

  }
  
  drawSprites();
 
}



