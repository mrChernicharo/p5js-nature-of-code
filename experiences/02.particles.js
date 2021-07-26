class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D();
    this.vel = createVector(random(-1, 1), random(-4, 0));
    this.acc = p5.Vector.random2D();
    this.lifeSpan = 255;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0, 0);
    this.lifeSpan -= 2;
  }

  show() {
    fill(255, this.lifeSpan);
    stroke(255, this.lifeSpan);

    ellipse(this.pos.x, this.pos.y, 4);
  }
}

let particles = [];
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(52);

  let gravity = createVector(0, 0.1);

  for (let i = 0; i < 6; i++) {
    let p = new Particle(mouseX, mouseY);
    particles.push(p);
  }

  for (let particle of particles) {
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let i = particles.length - 1; i > 0; i--) {
    if (particles[i].lifeSpan < 0) {
      particles.splice(i, 1);
    }
  }
}
