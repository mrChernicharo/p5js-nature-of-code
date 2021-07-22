function setup() {
  createCanvas(600, 400);
}

let offsetX = 0;
let offsetX2 = 10000;

function draw() {
  background(60);

  for (let x = 0; x < width; x++) {
    stroke(255);
    point(x, random(height));
  }
  noLoop();
}
