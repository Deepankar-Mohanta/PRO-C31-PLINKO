const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionheight=300;
var ground;

function setup() {
  
  var canvas=createCanvas(480, 800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(width/2, 790, width, 20);

  for(var i=0; i<=width; i=i+80 ){
    divisions.push(new Division(i, height-divisionheight/2, 20, divisionheight))
  }

  for(var i=15; i<=width; i=i+50){
    plinkos.push(new plinko(i, 75, 20))
  }

  for(var i=40; i<=width; i=i+50){
    plinkos.push(new plinko(i, 175, 20))
  }

  for(var i=15; i<=width; i=i+50){
    plinkos.push(new plinko(i, 275, 20))
  }

  for(var i=40; i<=width; i=i+50){
    plinkos.push(new plinko(i, 375, 20))
  }


  


}

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);

  if (frameCount%60===0){
    particles.push(new  particle(random(200,280),10,10));
  }

  for(var a=0; a<divisions.length; a++){
    divisions[a].display();
  }

  for(var b=0; b<plinkos.length; b++){
    plinkos[b].display();
  }

  for(var c=0; c<particles.length; c++){
    particles[c].display();
  }

  ground.display();


}
 