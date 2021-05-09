const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxFlakes = 10;
var flakes = [];
var engine, world;
var snowCreatedFrame = 0;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow3.jpg"); 
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  if(frameCount % 5000 === 0){
    for(var i=0; i<maxFlakes; i++){
        flakes.push(new snowFlake(random(0,1280), random(0,720)));
    }
  }
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);
  imageMode(CENTER)
  for(var i = 0; i<maxFlakes; i++){
    flakes[i].showFlake();
    flakes[i].updateY();
 } 
  drawSprites();
}