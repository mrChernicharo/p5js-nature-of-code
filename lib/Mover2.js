// Vectors have a lot of built-in methods ...

class Mover2 {
  constructor(x, y) {
    this.pos = createVector(x, y);

    this.vel = p5.Vector.random2D();
    // this.vel.mult(2);
    this.vel.mult(random(3));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);

    this.acc = p5.Vector.random2D();
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(3); // strong Acc
    // this.acc.setMag(0.2); // strong Acc

    this.vel.add(this.acc);
    this.vel.limit(2); // vel Limiter

    this.pos.add(this.vel);
  }
  show() {
    stroke('royalblue');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);

    this._printInfo();
  }

  _printInfo() {
    document.querySelector('.text').innerText = `ACC: ${this.acc}`;
    document.querySelector('.text2').innerText = `VEL: [${[
      Math.floor(this.vel.x),
      Math.floor(this.vel.y),
    ]}]`;
    document.querySelector('.text3').innerText = `POS:  [${[
      Math.floor(this.pos.x),
      Math.floor(this.pos.y),
    ]}]`;
    console.log(this.acc);
  }
}
