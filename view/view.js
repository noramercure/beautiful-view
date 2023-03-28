// Nora Mercure
// Nicholas Brown-Hernandez
// Web amd Fx: from theory to practice, 502-A22, sect. 03
//The Sunset

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("bakcground.jpeg")
  bird = loadImage("birds.png")
  night = loadImage("night.png")


}

function draw() {
  // background first
background(50);
  image(bg,0,0,windowWidth,windowHeight)
  image(bird, mouseX,150,60,60);
  fill(255,179,0)
  circle(width/1.5, mouseX, 90)
    fill(255,255,255)
  circle(width/1.5, mouseX, 90)
}  

function keyPressed(){
  if(key === 'n') {
    bg = night
  }
}

function mouseClicked(){
  fill(255,179,0)
  circle = circle
  fill(255,255,255)
  
}
