// 1 Scalar  --> mesurable quantity, that has MAGNITUDE

// 2 Vector  --> has quantity and direction. MAGNITUDE + DIRECTION (there are 2D, 3D, 4D, nD.. vectors)
//
//
//        MAGNITUDE
// (X,Y) ------------>

//  -------------------------------
//  |\    |
//  | \   |
//  |  \  |
//  |   \ |
//  |    \|
//  |
//  |
//  -------------------------------
//
// Vectors have a lot to do with trigonomety
//

// let v1 = createVector([x], [y])

let pos;

function setup() {
  createCanvas(400, 400);
  background(53); // point leaves its trail on canvas

  pos = createVector(width / 2, height / 2);
}
function draw() {
  stroke('orangered');
  strokeWeight(4);

  point(pos.x, pos.y);

  pos.x = pos.x + random(-1, 1);
  pos.y = pos.y + random(-1, 1);
}
