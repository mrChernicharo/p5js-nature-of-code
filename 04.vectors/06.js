function setup() {
  createCanvas(400, 400);
  background(0);
}
function draw() {
  translate(width / 2, height / 2); // origin in the middle

  let v1 = p5.Vector.random2D(); // Static Method
  let v2 = p5.Vector.random2D(); // Static Method
  let v3 = p5.Vector.random2D(); // Static Method

  v1.add(random(-50, 50), random(-50, 50));

  strokeWeight(5);
  stroke(random(225), 0, 0);
  line(0, 0, v1.x, v1.y);

  v2.add(random(-100, 100), random(-100, 100));
  strokeWeight(5);
  stroke(random(225));
  line(0, 0, v2.x, v2.y);

  strokeWeight(5);
  stroke(random(225), 0, 0);
  line(0, 0, v1.x, v1.y);

  v3.mult(200); // multiply the length of the vector

  strokeWeight(1);
  stroke(0, random(180), random(180, 240));
  line(0, 0, v3.x, v3.y);
}
