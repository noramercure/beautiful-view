// Nora Mercure
// Nicholas Brown-Hernandez
// Web amd Fx: from theory to practice, 502-A22, sect. 03
//The Sunset



function setup() {
  createCanvas(windowWidth, windowHeight);
  back1 = loadImage("bakcground.jpeg")
  bird = loadImage("birds.png")
}

function draw() {
  // background first
background(back1);
  
  image(bird, mouseX,150,40,40);
fill(255,179,0)
  circle(width/1.5, mouseX, 80)
}
