// normalize is to reduce the magnitude of a vector to ONE

// .mag() returns the magnitude of a Vector,
// there is, its LENGTH

// V = mouse - pos
document.body.innerHTML += '<h3>hover me!</h3>';
function setup() {
  createCanvas(600, 400);
  background(0);
}
function draw() {
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);
  ellipse(mouseX, mouseY, 20);
  fill('blue');

  let v = p5.Vector.sub(mouse, pos);

  //   v.normalize(); // reduces the length to ONE
  //   v.normalize().mult(140);
  v.normalize().mult(random(20, 200));

  translate(width / 2, height / 2);
  stroke(random(255), random(255), random(255));
  strokeWeight(1);

  line(0, 0, v.x, v.y);
}
