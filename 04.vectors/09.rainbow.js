// V = mouse - pos
document.body.innerHTML += '<h3>hover me!</h3>';
function setup() {
  createCanvas(600, 400);
  background(0);
}
function draw() {
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);

  translate(width / 2, height / 2);
  line(0, 0, v.x, v.y);

  stroke(random(255), random(255), random(255));
  strokeWeight(1);
}
