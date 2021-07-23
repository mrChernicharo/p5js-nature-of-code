function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  translate(width / 2, height / 2); // origin in the middle

  let v = createVector(1, 2, 3);
  v.add(4, 5, 6);
  // set to [5,7,9]

  /////////////////////////////

  let v1 = createVector(1, 2, 3);
  let v2 = createVector(1, 3, 4);

  let v3 = p5.Vector.add(v1, v2);
  // v3 has [3,5,7]

  print(v, v1, v2, v3);
}
