function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(60);

  stroke(255);
  noFill();
  beginShape();

  let offsetX = 0;
  for (let x = 0; x < width; x++) {
    const y = noise(offsetX) * height;
    vertex(x, y);
    offsetX += 0.01;
  }
  endShape();

  // noLoop();
}

// much smoother than a random graph
