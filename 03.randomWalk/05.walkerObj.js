let walker;
function setup() {
  createCanvas(400, 400);
  background(53); // point leaves its trail on canvas

  walker = new Walker(200, 200);
}
function draw() {
  walker.show();
  walker.update();
}

// so far we're changing position
// how about adding a velocity to that position change?
// and what about adding acceleration to the velocity?

// pos is influenced by vel
// vel is influenced by acc

// Force = mass * acc ...
