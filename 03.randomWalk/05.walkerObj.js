let walker;
function setup() {
  createCanvas(400, 400);
  background(53); // point leaves its trail on canvas
  walker = new Walker(200, 200);
}
function draw() {
  stroke('orangered');
  strokeWeight(4);

  walker.update();
  walker.show();
}
