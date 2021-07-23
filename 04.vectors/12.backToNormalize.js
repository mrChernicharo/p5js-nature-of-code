// a^2 + b^2 = c^2

// c = sqrt(a^2 + b^2)

// mag === x ** 2 + y ** 2

// on a 3,4,5 triangle ...

// m = sqrt(4^2 + 3^2)
// m = 5

// if x = 4 and y = 3 the length/magnitude of the Vector will be 5
// normalizing it, this magnitude drops to ONE

// normalized mag equals 3/5 of x and 4/5 of x
// mag aligns with x at 4/5 of x's length
// mag aligns with y at 3/5 of y's length

// Inother words NORMALIZATION gives a VECTOR the possibility of
// pointing to EVERY direction while mantaining the SAME length

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  ellipse(width / 2, height / 2, 20);
  fill('orange');

  let v = p5.Vector.sub(mouse, pos);

  // DOING THE SAME THING IN THREE DIFFERENT WAYS

  // # 1
  // v.mult(100);
  // let m = v.mag();
  // v.div(m);

  // # 2
  // v.normalize().mult(100);

  // # 3
  v.setMag(100);

  translate(width / 2, height / 2);
  stroke(233);
  strokeWeight(1);

  line(0, 0, v.x, v.y);

  document.querySelector('.text').innerText = `${v}`;
}
