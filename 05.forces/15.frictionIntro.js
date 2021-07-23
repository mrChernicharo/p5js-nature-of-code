// the bigger the mass, the bigger the force!
class Ball {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector(1, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }
  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      console.log('friction!');

      // Direction of Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of Friction
      let mu = 0.1;
      let normal = this.mass;
      friction.setMag(mu * normal);
      this.applyForce(friction);
    }
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
let ballA;

function setup() {
  createCanvas(600, 600);
  ballA = new Ball(200, 200, random(1, 10));
}

function draw() {
  background(53);
  fill(0, 200, 200);

  if (mouseIsPressed) {
    let wind = createVector(1, 0);
    ballA.applyForce(wind);
  }

  let gravity = createVector(0, 1);
  let weightA = p5.Vector.mult(gravity, ballA.mass);
  ballA.applyForce(weightA);

  ballA.friction();
  ballA.limits();
  ballA.update();
  ballA.show();
}

document.querySelector('.text').innerText = 'click to make wind -->';
