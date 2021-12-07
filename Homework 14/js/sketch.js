// x and y for my character
var characterX = 100;
var characterY = 100;







var w = 87;
var s = 83;
var d = 65;
var a = 68;




var shapeX = 50;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


//mouse shape

var mouseCX;
var mouseCY;


function setup() {
    createCanvas(500, 600);


    for (var i = 0; i < 20; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
}

function draw() {
    background(37, 62, 98);
    stroke(0);
    fill(0);

    //borders
    createBorders();

    // exit message
    exitMessage();

    //create character;
    createCharacter();

    // move character  
    keyboardClicks();


    // other shapes
    fill(130, 190, 17);

    //create the shapes
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        // make the shapes come back
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    // reaches exit
    characterExit();

    //mouse click
    clickedMouse();

}



function createCharacter() {
    fill(120, 29, 64)
    square(characterX, characterY, 25);
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


function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}