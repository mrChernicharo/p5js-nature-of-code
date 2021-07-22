// noiseDetail adds more octaves to the noise, favoring higher detail level
// there's a second param that you can pass in to tweek even more

// vi o cara usando no browser, mas nao vi o efeito funcionando aqui não

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

let incr = 0.01; //+/- burring
function draw() {
  let offsetX = 0;

  loadPixels();
  background(51);

  stroke(255);
  noFill();

  for (let x = 0; x < width; x++) {
    let offsetY = 0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;

      //   let n = random(255);
      let n = noise(offsetX, offsetY) * 255;

      pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;

      offsetY += incr; // mess horizonally
    }
    offsetX += incr; // mess vertically
  }

  updatePixels();
  noLoop();
}
