const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wreckingBall
var building
var background


function preload(){
  building = building.Img
  wreckingBall = wreckingBall.Img
  background = background.Img

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  if (buildingIstouched){
    
  }

  }



function draw() 
{
  background(51);
  Engine.update(engine);
  
}

