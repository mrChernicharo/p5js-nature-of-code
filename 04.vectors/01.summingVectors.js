let walker;
function setup() {
  createCanvas(400, 400);

  walker = new Walker(200, 200);
}
function draw() {
  background(53); // point doen't leave trail on canvas

  walker.show();
  walker.update();
}

// Vectors ops... sum/subtract components

// vector A => (3,4)
// vector B => (2,-1)

// SUM X SUBTRACT
// A + B => (5, 3)
// A - B => (1, 5)

// SUM
// A + B => (5, 3)

// SUBTRACT
// A - B => (1, 5)

// SUM
// A.x + B.x -> 5
// A.y + B.y -> 3

// SUBTRACT
// A.x - B.x -> 1
// A.y - B.y -> 5
