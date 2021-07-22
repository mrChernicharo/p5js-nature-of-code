function setup() {
  createCanvas(600, 400);
}

let offsetX = 0;

function draw() {
  background(60);

  let x = map(noise(offsetX), 0, 1, 0, width);
  let y = map(noise(offsetX), 0, 1, 0, height);
  offsetX += 0.01;

  ellipse(x, y, 40, 40);
}
