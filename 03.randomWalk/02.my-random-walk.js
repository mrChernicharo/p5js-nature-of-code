let x;
let y;

noiseX = 0;
function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(53); // point leaves its trail on canvas
}
function draw() {
  //   background(53); // point's trail desapears

  stroke(noise(noiseX) * 255, 0, noise(noiseX) * 200);
  fill(noise(noiseX) * 100, 0, noise(noiseX) * 180);
  strokeWeight(4);
  //   point(x, y);
  ellipse(x, y, 25, 15);

  let r = floor(random(4));
  let warp = floor(random(4));

  noiseX += 0.1;

  switch (r) {
    case 0:
      x = x + 3 * warp;
      //   x = x + 2; // goes mostly right
      break;
    case 1:
      x = x - 3 * warp;

      break;
    case 2:
      y = y + 3 * warp;

      break;
    case 3:
      y = y - 3 * warp;

      break;
  }
}
