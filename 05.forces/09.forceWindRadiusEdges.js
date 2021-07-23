class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = r;
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
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  show() {
    stroke('#fff');
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

/// sketch ///

let ball;
let noiseOffset = 0;
function setup() {
  createCanvas(600, 600);
  //  new Ball(x, x, radius)
  ball = new Ball(300, 100, 40);
}

function draw() {
  {
    let color = map(noise(noiseOffset), 0, 1, 0, 255);
    background(53);
    fill(0, color, color);
    noiseOffset += 0.1;
  }

  let gravity = createVector(0, 1);
  let wind = createVector(0.1, 0);

  ball.applyForce(gravity);
  if (mouseIsPressed) {
    ball.applyForce(wind);
  }
  ball.update();
  ball.show();
  ball.limits();
}

document.querySelector('.text').innerText = 'click to make wind -->';
