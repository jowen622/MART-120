//left eye X
var leftX = 150;
var leftY = 190;
var leftMovement;

//left eye Y
var leftXx = 150;
var leftYy = 190;
var leftMovementAgain;

//right eye X
var rightX = 250;
var rightY = 190;
var rightMovement;

//right eye Y
var rightXx = 250;
var rightYy = 190;
var rightMovementAgain;

//hair
var hairX = 200;
var hairY = 120;
var speedX = 2.8;
var speedY = 2.2;
var directionX = 1;
var directionY = 1;

//name
var size = 22;
var count = 0;
var sizeDirection = 2;
function setup() {
    createCanvas(400, 400);
    leftMovement = Math.floor(Math.random() * 10);
    rightMovement = Math.floor(Math.random() * 10);
    leftMovementAgain = Math.floor(Math.random() * 10);
    rightMovementAgain = Math.floor(Math.random() * 10);
}

function draw() {
    background(220)
    textSize(size)
    fill(0, 0, 0)
    text("A weird portrait.. yikes", 90, 20)
    size += sizeDirection;
    count++;
    if (count > 5) {
        sizeDirection *= -1;
        count = 0;
    }



    //hair
    fill(150, 75, 0)
    ellipse(200, 280, 200, 400)


    //head
    fill(255, 204, 153);
    ellipse(200, 200, 200, 230);

    //hair
    fill(150, 75, 0)
    hairX = hairX + speedX * directionX
    hairY = hairY + speedY * directionY
    if (hairX > width - 150 || hairX < 150) {
        directionX *= -1;
    }
    if (hairY > height - 70 || hairY < 70) {
        directionY *= -1;
    }
    ellipse(hairX, hairY, 150, 70)


    //body
    fill(0, 204, 0)
    square(55, 315, 300)

    textSize(18);
    fill(0, 0, 0);
    text("Julia Owen", 260, 400);



    //mouth
    line(180, 270, 220, 270)
    line(160, 260, 180, 270)
    line(240, 260, 220, 270)

    //ears
    fill(255, 204, 153);
    square(70, 185, 30);
    square(300, 185, 30);

    //nose
    fill(255, 204, 153);
    triangle(180, 230, 200, 205, 220, 230);
    point(190, 225);

    //right eye
    fill(255, 255, 255)
    circle(rightXx, leftYy, 40);

    rightYy += rightMovementAgain;
    if (rightYy >= 400 || rightYy <= 0) {
        rightMovementAgain *= -1;
    }

    rightYy += rightMovementAgain;

    fill(0, 0, 200)
    circle(rightX, rightY, 20);

    rightX += rightMovement;
    if (rightX >= 400 || rightX <= 0) {
        rightMovement *= -1;
    }

    rightX += rightMovement;

    //left eye
    fill(255, 255, 255)
    circle(leftX, leftY, 40);

    leftX += leftMovement;
    if (leftX >= 400 || leftX <= 0) {
        leftMovement *= -1;
    }

    leftX += leftMovement;

    fill(0, 0, 200)
    circle(leftXx, leftYy, 20);

    leftYy += leftMovementAgain;
    if (leftYy >= 400 || leftYy <= 0) {
        leftMovementAgain *= -1;
    }

    leftYy += leftMovementAgain;
}

