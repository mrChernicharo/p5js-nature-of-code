// every canvas is a rectangular grid of pixels
// these pixels are stored behind the scenes in the
// PIXELS ARRAY!!!

// P5js stores 4 values for each pixel, one for each RGB color + alpha

// [ Red, Green, Blue, Alpha, R, G, B, A. R, G, B, A, R, G, B, A, ...]
//     ----pixel 00----     --pixel 01-- --pixel 02-- --pixel 03-- ...

// ...so if we have a particular coordinate, say (2,1) on a 6 X 6 canvas
// it will be found at the (x + y * width) position of grid

// (4, 0) => index 4
// (2, 1) => index 8
// (0, 1) => index 6
// (4, 2) => index 16

// and to know where it will be at the PIXELS ARRAY, we just need to
// multiply it by 4 -> (x + y * width) * 4

// (4, 0) => index 16
// (2, 1) => index 32
// (0, 1) => index 24
// (4, 2) => index 64

// ****************************************************************

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(51);

  // start low-level messing with pixels array
  loadPixels();

  // makes first pixel white! (needs a lot of zoom)
  pixels[0] = 255;
  pixels[1] = 255;
  pixels[2] = 255;
  pixels[3] = 255;

  // makes 2nd pixel green!
  pixels[4] = 0;
  pixels[5] = 255;
  pixels[6] = 0;
  pixels[7] = 0;

  // makes 3rd pixel white!
  pixels[8] = 255;
  pixels[9] = 255;
  pixels[10] = 255;
  pixels[11] = 255;

  // makes 4th & 5th pixel pink! Yay!
  pixels[12] = 255;
  pixels[13] = 0;
  pixels[14] = 255;
  pixels[15] = 255;

  pixels[16] = 255;
  pixels[17] = 0;
  pixels[18] = 255;
  pixels[19] = 255;

  // I'm done messing with the pixels array
  updatePixels();
}
