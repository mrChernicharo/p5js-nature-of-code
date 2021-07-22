let incr = 0.01;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  background(51);

  stroke(255);
  noFill();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let r = random(255);

      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
  // noLoop()
}
