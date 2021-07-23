// F = Mass * Acc

let mover2;
function setup() {
  createCanvas(600, 600);
  mover2 = new Mover2(width / 2, height / 2);
}

function draw() {
  background(0);

  mover2.show();
  mover2.update();
}
