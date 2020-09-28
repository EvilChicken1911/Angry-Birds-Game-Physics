const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2, log1, log2, log3, log4, bird1;

function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1500,950,70,70);
    box2 = new Box(1300,950,70,70);
    box3 = new Box(1500,875,70,70);
    box4 = new Box(1300,875,70,70);
    box5 = new Box(1400,775,70,70);
    ground = new Ground(1000,height,2000,20)
    pig1 = new Pig(1400,950);
    pig2 = new Pig(1400,875);
    log1 = new Log(1400,930,275, PI);
    log2 = new Log(1400,850,275, PI);
    log3 = new Log(1350,750,150,-PI/4);
    log4 = new Log(1450,750,150,PI/4);
    bird1 = new Bird(250,950)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}