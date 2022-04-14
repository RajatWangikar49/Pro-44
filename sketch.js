const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

var engine, world;
var aliens;

function setup(){

  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  aliens = new alien(width/2, 10, 20, 20);

}

function draw(){

  background("black");

  Engine.update(engine);

  Matter.Body.setVelocity(aliens.body, {x : 0, y : 3});

  aliens.display();

}