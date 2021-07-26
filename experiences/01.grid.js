function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(51);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x % 20 === 0) {
        // stroke(random(255), random(255), random(255));

        line(x, 0, x, height);
      }
      if (y % 20 === 0) {
        line(0, y, width, y);
      }
    }
  }
}
