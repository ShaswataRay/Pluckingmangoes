
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1 = new Bob(500,500,50);
	bobObject2 = new Bob(600,500,50);
	bobObject3 = new Bob(700,500,50);
	bobObject4 = new Bob(800,500,50);
	bobObject5 = new Bob(900,500,50);

	roof = new Roof(700,100,600,30);

	rope1 = new Rope(roof.body,bobObject1.body, -200,0);
	rope2 = new Rope(roof.body,bobObject2.body, -100,0);
	rope3 = new Rope(roof.body,bobObject3.body, 0,0);
	rope4 = new Rope(roof.body,bobObject4.body, 100,0);
	rope5 = new Rope(roof.body,bobObject5.body, 200,0);

	Engine.run(engine);
  
}


function draw() {
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-600,y:-600});
    }

}

