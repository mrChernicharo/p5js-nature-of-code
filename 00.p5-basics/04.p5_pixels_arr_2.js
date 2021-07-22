// ...so if we have a particular coordinate, say (2,1) on a 6 X 6 canvas
// it will be found at the (x + y * width) position of grid

// and to know where it will be at the PIXELS ARRAY, we just need to
// multiply it by 4 -> (x + y * width) * 4

function setup() {
  createCanvas(200, 200);
  pixelDensity(1); // doesn't get all pixels on highDensity screens without this
}

function draw() {
  background(51);

  // start low-level messing with pixels array
  loadPixels();

  offset = 0;

  // this loop will iterate over the whole PIXEL ARRAY
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      // this makes a solid pink
      // pixels[index + 0] = 255;
      // pixels[index + 1] = 0;
      // pixels[index + 2] = 255;
      // pixels[index + 3] = 255;

      // this makes a gradient
      // pixels[index + 0] = y;
      // pixels[index + 1] = x;
      // pixels[index + 2] = 255;
      // pixels[index + 3] = 255;

      // this makes random + noise effect
      pixels[index + 0] = 255;
      pixels[index + 1] = noise(offset) * width;
      pixels[index + 2] = 255;
      pixels[index + 3] = random(120, 255);

      offset += 0.01;
    }
  }
  // I'm done messing with the pixels array
  updatePixels();
}
