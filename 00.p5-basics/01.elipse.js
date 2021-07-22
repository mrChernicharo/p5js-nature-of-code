function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(60); // 0 - 255 || hex || r,g,b

  ellipse(40, 100, 40, 40); // x,y,w,h
  ellipse(120, 100, 60, 40);
  ellipse(200, 100, 40, 60);
  ellipse(260, 100, 20, 20);

  fill('royalblue');
  stroke('orange');
  strokeWeight(10);

  ellipse(420, 300, 50, 50);
  ellipse(500, 300, 30, 30);

  fill('red');
  strokeWeight(3);
}
