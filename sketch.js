
function setup() {
  createCanvas(500,500);
  background(51);
  box = createSprite(250,250,100,100);
  box.shapeColor = "white"

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if (keyDown(RIGHT_ARROW))
  {
    background("red");
  }

  drawSprites();
}

