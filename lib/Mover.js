// Vectors have a lot of built-in methods ...

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);

    this.vel = p5.Vector.random2D();
    // this.vel.mult(2);
    this.vel.mult(random(2));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);

    this.acc = p5.Vector.random2D();
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.05);

    this.vel.add(this.acc);

    this.pos.add(this.vel);
  }
  show() {
    stroke('orangered');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}
