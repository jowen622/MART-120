function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);
  textSize(22);
  fill(0, 0, 0);
  text("A weird portrait.. yikes", 90, 20);
  
  
  
  //hair
  fill(150,75,0);
  ellipse(200,280,200,400);
  
  
  //head
  fill(255, 204, 153);
  ellipse(200,200,200,230);
  
  //hair
  fill(150,75,0);
  ellipse(200,120,150,70);
  
  //body
  fill(0,204,0);
  square(55, 315, 300);
  
  textSize(18);
  fill(0, 0, 0);
  text("Julia Owen", 260, 400);
  
  //mouth
  line(180,270,220,270)
  line(160, 260, 180, 270)
  line(240, 260, 220, 270)
  
  //ears
  fill(255, 204, 153);
  square(70,185,30);
  square(300,185,30);
  
  //nose
  fill(255, 204, 153);
  triangle(180, 230, 200, 205, 220, 230);
  point(190, 225);
  
  //right eye
  fill(255, 255, 255)
  circle(250, 190, 40); 
  fill(0, 0, 200)
  circle(250, 190, 20);
  
  //left eye
  fill (255, 255, 255)
  circle(150, 190, 40);
  fill(0,0,200)
  circle(150, 190, 20);
}