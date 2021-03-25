const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var roofObject, rope1, rope2, rope3, rope4, rope5;

function preload()
{

}

function setup() {
        createCanvas(800, 600);

        engine = Engine.create();
        world = engine.world;

        ball1 = new Ball(400,400);
        ball2 = new Ball(450,400);
        ball3 = new Ball(500,400);
        ball4 = new Ball(350,400);
        ball5 = new Ball(300,400);
  roofObject = new Roof(400,200,550,30);
  rope1 = new Rope(ball1.body, roofObject.body,50,0);
  rope2 = new Rope(ball2.body, roofObject.body,50,0);
  rope3 = new Rope(ball3.body, roofObject.body,100, 0);
  rope4 = new Rope(ball4.body, roofObject.body, -50, 0);
  rope5 = new Rope(ball5.body, roofObject.body, -100, 0);

        Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("sandybrown");

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  stroke("brown");
  fill("black");
  textSize(40);
  text("Press left Key to start",240,100);

  drawSprites();
 }
 function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball3.body,
ball5.body.position,{x:40,y:-40});
      }
}

