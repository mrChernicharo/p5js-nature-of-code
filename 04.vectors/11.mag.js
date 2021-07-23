// normalize is to reduce the magnitude of a vector to ONE

// .mag() returns the magnitude of a Vector,
// there is, its LENGTH

// V = mouse - pos
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);
  ellipse(width / 2, height / 2, 20);
  fill('orange');

  let v = p5.Vector.sub(mouse, pos);

  let m = v.mag();
  print(m);
  //   v.normalize().mult(random(20, 200));

  translate(width / 2, height / 2);
  stroke(233);
  strokeWeight(1);

  line(0, 0, v.x, v.y);

  document.querySelector('.text').innerText = `my magnitude is ${m}`;
}
