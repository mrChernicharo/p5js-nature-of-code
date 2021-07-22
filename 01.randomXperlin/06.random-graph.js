function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(60);

  stroke(255);
  noFill();
  beginShape();

  for (let x = 0; x < width; x++) {
    vertex(x, random(height));
  }
  endShape();

  // noLoop();
}
