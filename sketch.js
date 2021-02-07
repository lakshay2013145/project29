const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var polygon,polygonImage

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas=createCanvas(900,400);
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(450,390,900,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Box(300,275,30,40);
    console.log(block1);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);

      //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
      //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  //bottom
  block17=new Box(700,180,30,40);
  block18=new Box(730,180,30,40);
  block19=new Box(760,180,30,40);
  block20=new Box(670,180,30,40);
  block21=new Box(640,180,30,40);
  //middle
  block22=new Box(700,140,30,40);
  block23=new Box(730,140,30,40);
  block24=new Box(670,140,30,40);
  //top
  block25=new Box(700,100,30,40);
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
    
}

function draw(){
Engine.update(engine);
background("black");
ground.display();
stand1.display();
stand2.display()

strokeWeight(2);
stroke(15);
fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block25.display();
fill("turquoise");
block13.display();
block14.display();
block15.display();
block22.display();
block23.display();
block24.display();
fill("grey");
block16.display();


fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }













