const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground, ball,box1, box2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(400,380,800,20)
  box1= new Box(180,100,50,50)
  box2= new Box(200,45,50,50)

  
}

function draw() {
  background('blue');  

Engine.update(engine);

  
  box1.display();
  box2.display();
  ground.display();
}