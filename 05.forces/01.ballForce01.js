class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show() {
    stroke('green');
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}

let ball;
function setup() {
  createCanvas(600, 600);
  ball = new Ball(300, 300);
  background(53);
  // frameRate(10);
}
function draw() {
  ball.show();
  ball.update();
}

// Vectors have a lot of built-in methods ...
