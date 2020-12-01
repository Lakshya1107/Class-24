var dustbin1, dustbin2, dustbin3;
var ground, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1400, 800);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground = new Ground(width/2, 790, width, 20);

	paper = new Paper(150, height-100, 15);

	dustbin1 = new Dustbin(1180, 770, 200, 20);
	dustbin2 = new Dustbin(1080, 730, 20, 100);
	dustbin3 = new Dustbin(1280, 730, 20, 100);
}


function draw() {
    rectMode(CENTER);

    background(0);
  
	drawSprites();
	
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:40, y:-65});
	}

	ground.display();
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}



