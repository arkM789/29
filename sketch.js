 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stand;
var poligone_Img;
var ball;
var slingShort;


function preload()
{

poligone_Img=loadImage("polygon.png")

}

function setup() {
	createCanvas(1300, 600);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	//bh5=new bh(200,10,40)
     ground3=new Ground  (500,630,1700,20)

	 stand=new Ground(500,400,300,10);
	box5=new box(70,400,30,20)

	Engine.run(engine);

	//console.log(bh5)




	ball=Bodies.circle(50,200,20)

	World.add(world,ball)

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  drawSprites();
 
  //bh5.display();
  ground3.display();
  stand.display()
  box5.display()
  
}



