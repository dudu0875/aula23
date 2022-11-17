var rotator1,block1,block2,particle1;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

var plane_opitions={
isStatic:true
}


Engine.update(engine);
	//Crie os Corpos aqui.


rotator1 = Bodies.rectangle(250,200,150,20,rotator_opitions);
World.add(world,rotator1);
	
block1 = Bodies.rectangle(50,20,150,20,block_opitions);
World.add(world,block1);

block2 = Bodies.rectangle(50,10,150,20,block_opitions);
World.add(world,block2);


var particle_opitions = {
	restitution:0.4,
	friction:0.02
}
particle1 = Bodies.rectangle(210,10,10,particle_opitions);
World.add(world,particle1);


Engine.run(engine);

matter.Body.rotate(rotator1)
Push();
 Translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=0.2;




}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



