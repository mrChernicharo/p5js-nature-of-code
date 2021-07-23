// V = mouse - pos
document.body.innerHTML += '<h3>hover me!</h3>';
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  let pos = createVector(0, 0);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);

  line(0, 0, v.x, v.y);

  stroke(255);
  strokeWeight(1);
}
