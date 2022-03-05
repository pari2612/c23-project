

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Create namespace for Body
var engine ,world,ball,ground;

function setup() {
  createCanvas(400,400);
    engine= Engine.create();
    world= engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0
  };
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,400,400,10,ground_options);
  World.add(world,ground);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,10);
  //write a rectangle function to display ground.
 


  
  
}

