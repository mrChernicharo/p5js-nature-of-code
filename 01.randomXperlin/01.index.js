function setup() {
  createCanvas(600, 400);
}

let offsetX = 0;

function draw() {
  background(60);

  //   let x = map(random(), 0, 1, 0, width);

  let x = map(noise(offsetX), 0, 1, 0, width);
  offsetX += 0.01;

  ellipse(x, height / 2, 40, 40);
}

// random() returns a random number between 0 and 1
// random()
// 0.46630655906939866
// random()
// 0.3005652626243327
// random()
// 0.3075172254310319

// noise behaves differently
// noise(1000)
// 0.411917286110023
// noise(0.1)
// 0.6646328133497329
// noise(0.001)
// 0.6878876357402254

//   `Perlin noise doesn't outputs random values, it actually considers the
// previous data in order to output something that's not very different from
// the previous value`

//   `Random sequence -> 701, 9, 234, 874, 2
//    Noise sequence -> 10, 9, 10, 11, 12`

// SO, IN A NUTSHELL, PERLIN NOISE PRODUCES A SMOOTH RANDOMNESS
