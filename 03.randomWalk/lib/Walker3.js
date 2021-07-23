// Vectors have a lot of built-in methods
//
//   this.pos.add(this.vel);
//
//   vectorA.add(vectorB)

class Walker3 {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }

  update() {
    this.pos.add(this.vel);

    // this.pos.x = this.pos.x + this.vel.x;
    // this.pos.y = this.pos.y + this.vel.y;
  }
  show() {
    stroke('orangered');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}
