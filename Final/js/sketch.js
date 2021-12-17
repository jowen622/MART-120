var Xball = 300;
var Yball = 300;
var ballSize = 40;
var score = 0;
var gameLevel = "Level1"


function setup() {
    createCanvas(500, 500);
    textAlign(CENTER);
    textSize(20);
}

function draw() {
    background(325, 17, 13);

    if (gameLevel == "Level1") {
        game();
    }
    if (gameLevel == "Level2") {
        gametwo();

    }

    text(("Score: " + score), width / 2, 40);
}

function game() {
    text("Catch the ball", width / 2, height - 20);
    var distanceToBall = dist(Xball, Yball, mouseX, mouseY);
    if (distanceToBall < ballSize / 2) {
        Xball = random(width);
        Yball = random(height);
        score = score + 1;
    }

    if (score >= 15) {

        gameLevel = "Level2"

    }

    line(Xball, Yball, mouseX, mouseY);
    ellipse(Xball, Yball, ballSize, ballSize);
}

function gametwo() {
    text("Catch the ball", width / 2, height - 20);
    var distanceToBall = dist(Xball, Yball, mouseX, mouseY);
    if (distanceToBall < ballSize / 2) {
        Xball = random(width);
        Yball = random(height);
        score = score + 1;
    }
    background(34, 71, 9);
    fill(19, 32, 85);
    ellipse(Xball, Yball, ballSize, ballSize);
}