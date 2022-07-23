var fR, mR ;
function setup() {
  createCanvas(800,400);
  mR= createSprite(400,200,80,30);
  fR= createSprite(200,200,50,80);
  mR.shapeColor = "green";
  fR.shapeColor = "green";
}

function draw() {
 mR.x = World.mouseX; 
 mR.y = World.mouseY;
 if(mR.x - fR.x < mR.width/2 + fR.width/2 && fR.x - mR.x < fR.width/2 + mR.width/2 && mR.y - fR.y < mR.height/2 + fR.height/2 && fR.y - mR.y < mR.height/2 + fR.height/2   ){
  mR.shapeColor = "red";
  fR.shapeColor = "red";
 } else{
  mR.shapeColor = "green";
  fR.shapeColor = "green";
 }



 background(0,0,0);  
  drawSprites();
}