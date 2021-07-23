function setup() {
  createCanvas(400, 400);
  pos = createVector(200, 200);
  background(53); // point leaves its trail on canvas
}
function draw() {
  //   background(53); // point's trail desapears

  stroke(255, 125);
  strokeWeight(2);
  ellipse(pos.x, pos.y, 5, 5);

  let vel = p5.Vector.random2D();
  vel.mult(10);

  pos.add(vel);
}
