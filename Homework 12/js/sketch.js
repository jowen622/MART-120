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

    //borders
    createBorders();

    //exit message
    exitMessage()


    //create character
    createCharacter();

    //keyboard keys
    keyboardClicks();


    //first shape
    firstShape();
    moveFirstShape();

    //second shape
    secondShape();
    moveSecondShape();



    //character reaches exit
    characterExit()



    //mouse click
    clickedMouse()
}

function createBorders() {
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
}

function createCharacter() {
    fill(120, 29, 64)
    square(characterX, characterY, 25);
}

function keyboardClicks() {
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
}

function clickedMouse() {
    fill(120, 130, 140)
    circle(mouseCX, mouseCY, 25);
}

function mouseClicked() {
    mouseCX = mouseX;
    mouseCY = mouseY;
}

function firstShape() {
    fill(130, 190, 17);
    circle(firstX, firstY, 35);
}
function moveFirstShape() {
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
}

function secondShape() {
    fill(150, 75, 0);
    circle(secondX, secondY, 50);
}

function moveSecondShape() {
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
}

function characterExit() {
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
}

function exitMessage() {
    textSize(14);
    text("Exit", width - 50, height - 50)
}
