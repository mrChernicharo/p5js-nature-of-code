function setup() {
  createCanvas(600, 400);
}

let incr = 0.01;
let start = 0;
function draw() {
  background(60);

  stroke(255);
  noFill();
  beginShape();

  let offsetX = start;

  for (let x = 0; x < width; x++) {
    const y = height / 2 + (sin(offsetX) * height) / 2;
    vertex(x, y);
    offsetX += incr;
  }
  endShape();

  start += 0.01;
}

// a sin wave...whose functioning is really similar to noise()
