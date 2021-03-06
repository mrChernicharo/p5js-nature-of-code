// the bigger the mass, the bigger the force!
class Ball {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
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

let ballA, ballB;
let noiseOffset = 0;
function setup() {
  createCanvas(600, 600);
  //  new Ball(x, x, mass)
  ballA = new Ball(100, 100, 2);
  ballB = new Ball(200, 100, 4);
}

function draw() {
  {
    let color = map(noise(noiseOffset), 0, 1, 0, 255);
    background(53);
    fill(0, color, color);
    noiseOffset += 0.1;
  }

  let gravity = createVector(0, 1);

  let weightA = p5.Vector.mult(gravity, ballA.mass);
  let weightB = p5.Vector.mult(gravity, ballB.mass);
  ballA.applyForce(weightA);
  ballB.applyForce(weightB);

  if (mouseIsPressed) {
    let wind = createVector(0.2, 0);
    ballA.applyForce(wind);
    ballB.applyForce(wind);
  }

  ballA.update();
  ballA.show();
  ballA.limits();

  ballB.show();
  ballB.update();
  ballB.limits();
}

document.querySelector('.text').innerText = 'click to make wind -->';
