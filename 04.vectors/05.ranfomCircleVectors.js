function setup() {
  createCanvas(400, 400);
  background(0);
}
function draw() {
  translate(width / 2, height / 2);

  let v = p5.Vector.random2D(); // Static Method

  v.mult(100); // multiply the length of the vector

  strokeWeight(1);
  stroke(random(225), 0, 0);

  line(0, 0, v.x, v.y);
}
