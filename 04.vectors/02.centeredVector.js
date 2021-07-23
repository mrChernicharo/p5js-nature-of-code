function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  translate(width / 2, height / 2); // origin in the middle

  let v = createVector(-100, 50);
  stroke(225);
  strokeWeight(4);

  line(0, 0, v.x, v.y);
}
