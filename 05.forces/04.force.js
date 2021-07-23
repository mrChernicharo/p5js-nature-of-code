class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0);
  }

  // newton's second law F = A * M
  applyForce(force) {
    // let mass = 1;
    this.acc = force;
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos).setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  limits() {
    if (this.pos.y >= height) {
      this.pos.y = height;
      this.vel.y = -1;
    }
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
}

function draw() {
  {
    let color = map(noise(noiseOffset), 0, 1, 0, 255);
    background(53);
    fill(0, color, color);
    noiseOffset += 0.1;
  }

  let gravity = createVector(0, 0.1);

  ball.applyForce(gravity);
  ball.update();
  ball.show();
  ball.limits();
}

// Vectors have a lot of built-in methods ...
