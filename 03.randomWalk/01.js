// random(min,nax) --> uniform distribution
// but what if I want a different distribution...
// how'bout a bell curve distribution or a gaussian distribution???

let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(53); // point leaves its trail on canvas
}
function draw() {
  //   background(53); // point's trail desapears

  stroke(255);
  strokeWeight(2);
  //   point(x, y);
  ellipse(x, y, 10, 10);

  let r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 1;
      //   x = x + 2; // goes mostly right
      break;
    case 1:
      x = x - 1;

      break;
    case 2:
      y = y + 1;

      break;
    case 3:
      y = y - 1;

      break;
  }
}
