var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  //loadAnimation of the boy
 boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 pathImg = loadImage("path.png");
}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(200,200);
path.addImage("epicganer",pathImg);
path.velocityY=2;
 //create sprite for the path 
//add image for the path
//Make the track a moving background by giving velocity Y.
path.scale=1.2;
boy=createSprite(200,230,20,20);
boy.addAnimation("boyyouthought",boyImg)
//create a boy sprite
//add animation for the boy
boy.scale=0.5;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
//set visibility as false for left boundary

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
//set visibility as false for left boundary
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x=mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
