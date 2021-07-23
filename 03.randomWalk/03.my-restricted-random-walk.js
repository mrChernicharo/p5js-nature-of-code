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

  fill(noise(noiseX) * 100, 100, noise(noiseX) * 255);
  stroke(noise(noiseX) * 100, 160, noise(noiseX) * 255);
  strokeWeight(4);
  //   point(x, y);
  ellipse(x, y, 25, 45);

  let r = floor(random(4));
  let warp = floor(random(4));

  noiseX += 0.1;

  switch (r) {
    case 0:
      x = x < width ? x + 3 * warp : 0;
      //   x = x + 2; // goes mostly right
      break;
    case 1:
      x = x > 0 ? x - 3 * warp : 0;

      break;
    case 2:
      y = y < height ? y + 3 * warp : 0;

      break;
    case 3:
      y = y > 0 ? y - 3 * warp : 0;

      break;
  }
}
