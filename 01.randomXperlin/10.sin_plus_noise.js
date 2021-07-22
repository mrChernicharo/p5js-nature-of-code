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
    let n = map(noise(offsetX), 0, 1, -100, 100);
    let s = map(sin(offsetX), -1, 1, 50, height - 50);

    y = n + s;

    vertex(x, y);
    offsetX += incr;
  }
  endShape();

  start += 0.03;
}
