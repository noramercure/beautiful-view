// Nora Mercure
// Nicholas Brown-Hernandez
// Web amd Fx: from theory to practice, 502-A22, sect. 03
//The Sunset

let r = 255
let g = 179
let b = 0

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
	image(bird, mouseX,150,100,100);
	fill(r,g,b)
	circle(width/1.5, mouseX, 150)
}

function keyPressed(){
	if(key === 'n') {
		bg = night
	}
}

function mouseClicked(){
	r = 255
	g = 255
	b = 255
	
}



