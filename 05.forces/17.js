// the bigger the mass, the bigger the force!
class Ball {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }
  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      // friction is basicaly a force in the opposite direction of velocity
      // so all below might be substitued by reducing the velocity slightly
      this.vel.mult(0.95);

      // // Direction of Friction
      // let friction = this.vel.copy();
      // friction.normalize();
      // friction.mult(-1);

      // // Magnitude of Friction
      // let normal = this.mass;
      // friction.setMag(mu * normal);
      // this.applyForce(friction);
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
    let color = map(this.mass, 0, 10, 255, 0);
    fill(color, 0, color, 100);
  }
}

/// sketch ///
let balls = [];

// lower mu, less friction
// 0.5 ~ 0.005
let mu = 0.05;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball(random(width), 300, random(1, 10));
  } // x, y, mass
}

function draw() {
  background(53);

  for (ball of balls) {
    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      ball.applyForce(wind);
    }

    let gravity = createVector(0, 1);
    let weight = p5.Vector.mult(gravity, ball.mass);
    ball.applyForce(weight);

    ball.friction();
    ball.limits();
    ball.update();
    ball.show();
  }
}

document.querySelector('.text').innerText = 'click to make wind -->';
