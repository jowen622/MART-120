//character
var characterX = 100;
var characterY = 100;

//keyboard
var w = 87;
var s = 83;
var d = 65;
var a = 68;

//first shape
var firstX = 90;
var firstY = 100;
var firstXspeed;
var firstYspeed;

//second shape
var secondX = 300;
var secondY = 60;
var secondXspeed;
var secondYspeed;
var directionX = 1;
var directionY = 1;


//mouse shape

var mouseCX;
var mouseCY;

function setup() {
    createCanvas(500, 600);
    firstXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)
    firstYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1)
    secondXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1)
    secondYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1)
}

function draw() {
    background(37, 62, 98);
    stroke(0);
    fill(0);
    //top border
    rect(0, 0, width, 10);
    //left border
    rect(0, 0, 10, height);
    //bottom border
    rect(0, height - 10, width, 10);
    //right border
    rect(width - 10, 0, 10, height - 50);

    //exit message
    textSize(14);
    text("Exit", width - 50, height - 50)

    //character
    fill(120, 29, 64)
    square(characterX, characterY, 25);

    //keyboard keys
    if (keyIsDown(w)) {
        characterY -= 8;
    }
    if (keyIsDown(s)) {
        characterY += 8;
    }
    if (keyIsDown(a)) {
        characterX += 8;
    }
    if (keyIsDown(d)) {
        characterX -= 8;
    }

    //first shape
    fill(130, 190, 17);
    circle(firstX, firstY, 35);

    firstX += firstXspeed;
    firstY += firstYspeed;

    if (firstX > width) {
        firstX = 0;
    }
    else if (firstX < 0) {
        firstX = width;
    }
    else if (firstY > height) {
        firstY = 0;
    }
    else if (firstY < 0) {
        firstY = height
    }

    //second shape
    fill(150, 75, 0);
    circle(secondX, secondY, 50);
    secondX = secondX + secondXspeed;
    secondY = secondY + secondYspeed;
    if (secondX > width) {
        secondX = 0;
    }
    else if (secondX < 0) {
        secondX = width;
    }
    else if (secondY > height) {
        secondY = 0;
    }
    else if (secondY < 0) {
        secondY = height
    }




    //character reaches exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(22);
        text("You reached the exit! You win!", width / 2 - 100, height / 2 - 100);
    }
    else {
        fill(0)
        stroke(4)
        textSize(22);
        text("Reach the exit!", width / 2 - 100, height / 2 - 100)
    }


    //mouse click
    fill(120, 130, 140)
    circle(mouseCX, mouseCY, 25);
}

function mouseClicked() {
    mouseCX = mouseX;
    mouseCY = mouseY;
}
