var jakeImg, pathImg, path, jake, left_boundary, right_boundary;
function preload(){
 
  jakeImg=loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  path.velocityY=5;
  jake.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  
}
  jake.collide(left_boundary);
  jake.collide(right_boundary);
  edges=createEdgeSprites();
  jake.collide(edges[3]);
drawSprites();
}

