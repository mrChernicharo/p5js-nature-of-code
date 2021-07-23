class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0.5, 0);
  }

  update() {
    this.pos.x = this.pos.x + this.vel.x;
    this.pos.y = this.pos.y + this.vel.y;
  }
  show() {
    stroke('orangered');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}
