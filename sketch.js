
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1
var drops =[];

function preload()
{
	
	emptyGlass=loadImage("empty glass.jpg");
	filledGlass=loadImage("filled glass.jpg");
	gameEnded=loadImage("game ended button.png");
	gameStarted=loadImage("game started button.png");
	Ready=loadImage("ready button.png");

	splash=loadImage("splash.jpg");
	
	water=loadImage("water(smile).jpg");
	car=loadImage("car.jpg");
	garden=loadImage("garden.jpg");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Objects Here.
tap1=new tap(150,100);
tap2=new tap(250,100);
tap3=new tap(350,100);
tap4=new tap(450,100);
tap5=new tap(550,100);


ground1=new ground(400,390,800,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tap1.display();
  tap2.display();
  tap3.display();
  tap4.display();
  tap5.display();
  ground1.display();

  

  var rand=Math.ceil(random(1,5));
  if(rand===1){
	  drops.push(new drop(tap1.x,100));
  }
  else if(rand===2){
	drops.push(new drop(tap2.x,100));
}
else if(rand===3){
	drops.push(new drop(tap3.x,100));
}
else if(rand===4){
	drops.push(new drop(tap4.x,100));
}
else {
	drops.push(new drop(tap5.x,100));
}

for(var i=0;i<drops.length-1;i++){
	drops[i].display();
}
d1=dist(drops[i].x,drops[i].y,ground.x,ground.y)
if(d1<50){
	drops.pop(drops[i]);
	
}
console.log(rand);
  drawSprites();
 
}



