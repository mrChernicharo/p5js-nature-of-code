class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(2.5);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);

    // Acc is the subraction of mouse's and curr's Vectors times a Magnitude (length)
    this.acc = p5.Vector.sub(mouse, this.pos).setMag(0.2);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show() {
    stroke('#fff');
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}

/// sketch ///

let ball;
let noiseOffset = 0;
function setup() {
  createCanvas(600, 600);
  ball = new Ball(300, 300);
  background(53);
  // frameRate(3);
}
function draw() {
  let color = map(noise(noiseOffset), 0, 1, 0, 255);
  fill(0, color, color);

  ball.show();
  ball.update();
  noiseOffset += 0.1;
}

// Vectors have a lot of built-in methods ...
