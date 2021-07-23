let pos, prev;
function setup() {
  createCanvas(600, 600);
  pos = createVector(300, 300);
  prev = pos.copy();
  background(53);
  // frameRate(10);
}
function draw() {
  stroke(255, 0, 125);
  strokeWeight(2);

  let vel = p5.Vector.random2D().mult(3);

  // 3% chance of a great jump
  let r = random(100);
  if (r < 3) {
    vel.mult(random(4, 20));
  }

  line(pos.x, pos.y, prev.x, prev.y);

  // prev.x = pos.x;
  // prev.y = pos.y;
  prev.set(pos.x, pos.y);
  pos.add(vel);
}
