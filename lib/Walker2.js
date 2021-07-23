// Vectors have a lot of built-in methods...
// Let's begin summing two vectors, there is, position + velocity
// We could do this the old way, summing together the components x & y of each
// But it's more convenient to use Vector P5 Helper methods
//
//   this.pos.add(this.vel);
//
//    ... same as
//
//   vectorA.add(vectorB)
//
//    ... same as
//
//   this.pos.x = this.pos.x + this.vel.x;
//   this.pos.y = this.pos.y + this.vel.y;
//
// Vectors have a lot of built-in methods
//
//   this.pos.add(this.vel);
//
//   vectorA.add(vectorB)

class Walker2 {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }

  update() {
    this.pos.add(this.vel);
  }
  show() {
    stroke('orangered');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}
