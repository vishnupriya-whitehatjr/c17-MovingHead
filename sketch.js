var robot, robotimg;
function preload()
{
  robotimg=loadImage("robot.png");
}

function setup() 
{
  createCanvas(400, 400);
  robot = createSprite(280,250,10,10);
  robot.addImage(robotimg);
  //trex.scale = 0.5;
}

function draw() 
{
  background("white");
  robot.x = World.mouseX;
  if(mouseIsOver(robot) && mouseWentDown("leftButton"))
  {
    robot.scale = 0.5;
  }  
  if(mouseIsOver(robot) && mouseWentUp("rightButton"))
  {
    robot.scale = 1;
  }  
  drawSprites();
  line(0,380,400,380);

}