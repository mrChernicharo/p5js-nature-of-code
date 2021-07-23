class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  applyForce(force) {
    // this.acc = force; // <- overwrites the sum of forces
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  limits() {
    if (this.pos.y >= height) {
      this.pos.y = height;
      this.vel.y *= -1;
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

  let gravity = createVector(0, 1);
  let wind = createVector(0.01, 0);

  ball.applyForce(gravity);
  ball.applyForce(wind);
  // if (mouseIsPressed) {
  // }
  ball.update();
  ball.show();
  ball.limits();
}

// Vectors have a lot of built-in methods ...
