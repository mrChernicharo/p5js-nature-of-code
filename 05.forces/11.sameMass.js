class Ball {
  constructor(x, y, radius, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = radius;
    // this.mass = mass;
    this.mass = 2;
  }

  applyForce(force) {
    // force.div(this.mass); transforms the force itself
    // this way objects get different forces...better use a Static Division
    // force.div(this.mass);

    // this way we don't mess with the original force, so force is equal to both objs
    let f = p5.Vector.div(force, this.mass);
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

let ballA, ballB;
let noiseOffset = 0;
function setup() {
  createCanvas(600, 600);
  //  new Ball(x, x, radius)
  ballA = new Ball(100, 100, 20);
  ballB = new Ball(400, 100, 20);
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

  ballA.applyForce(gravity);
  ballB.applyForce(gravity);
  if (mouseIsPressed) {
    ballA.applyForce(wind);
    ballB.applyForce(wind);
  }
  ballA.update();
  ballB.update();
  ballA.show();
  ballB.show();
  ballA.limits();
  ballB.limits();
}

document.querySelector('.text').innerText = 'click to make wind -->';
