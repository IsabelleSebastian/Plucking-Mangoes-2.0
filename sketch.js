
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObjectj, Rope;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(900,190,30);
	mango2=new mango(1040,180,30);
	mango3=new mango(960,240,30);
	mango4=new mango(990,75,30);
	mango5=new mango(1190,190,30);
	mango6=new mango(1100,130,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(235,415,20);
	
	Rope=new rope(stoneObj.body, {x: 240, y: 425});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  Rope.display();
  stoneObj.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){

    Rope.fly() //user-defined func (defined in rope class)    
}
