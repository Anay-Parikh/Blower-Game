const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var btn;
var ball

var rect1, rect2

var engine, world

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  fill("lightgray")
  rect1 = new Rects(500, 200, 100, 100);
  rect2 = new Rects(375, 240, 150, 20);

  ball = Bodies.circle(500, 130, 30);
  World.add(world, ball);

  btn = createButton("Click to Blow");
  btn.position(450, 270);
  btn.mouseClicked(blow);

}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 60);

  rect1.display();
  rect2.display();
}

function blow() {
  Body.applyForce(ball, {x: 0, y: 0}, {x: 0.01, y: 0.02});
}