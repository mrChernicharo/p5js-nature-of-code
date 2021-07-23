// F = Mass * Acc

let mover;
function setup() {
  createCanvas(600, 600);
  mover = new Mover(width / 2, height / 2);
}

function draw() {
  background(0);

  mover.show();
  mover.update();
}
