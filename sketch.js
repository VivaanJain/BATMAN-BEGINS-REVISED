
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var drops = [];
var lightning;
var bat1


function preload() {

lightning1=loadImage("1.png");
lightning2=loadImage("2.png");
lightning3=loadImage("3.png");
lightning4=loadImage("4.png");
}

function setup() {
     createCanvas(600, 600);

     engine = Engine.create();
     world = engine.world;
bat=new Umbrella (25,50)

}

function draw() {
     background(0)

     Engine.update(engine);
    
    bat.display();
     



     drops.push(new Raindrop(random(20, 500), random(20, 20)))




     for (var i = 0; i< drops.length; i++) {

          drops[i].display();
  

spawnLightning()
     
}
function spawnLightning(){
    if(frameCount % 100 === 0) {
var lightning=createSprite(100,50,10,80);

var rand = Math.round(random(1,4));
console.log(rand);
switch(rand) {

    case 1: lightning.addImage(lightning1);
    break;
case 2: lightning.addImage(lightning2);
    break;
case 3: lightning.addImage(lightning3);
    break;
case 4: lightning.addImage(lightning4);
break;
default: break;
}
drawSprites()
}

}
}

