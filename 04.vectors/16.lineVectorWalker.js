let pos, prev;
function setup() {
  createCanvas(400, 400);
  pos = createVector(200, 200);
  prev = pos.copy();
  background(53);
}
function draw() {
  stroke(255, 125);
  strokeWeight(2);

  let vel = p5.Vector.random2D().mult(2);

  // 1% chance of a great jump
  let r = random(100);
  if (r < 1) {
    vel.mult(25);
  }

  line(pos.x, pos.y, prev.x, prev.y);

  // prev.x = pos.x;
  // prev.y = pos.y;
  prev.set(pos.x, pos.y);
  pos.add(vel);
}
