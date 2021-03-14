let x = 0,
  y = 0;
let dx = 1,
  dy = 1;
let sx = 50,
  sy = 50;
let angle = 0;

function setup() {
  createCanvas(640, 360, WEBGL);
}

function draw() {
  rectMode(CENTER)
  translate(-width / 2, -height / 2);
  background(51);
  fill(244);
  translate(x, y);
  rotateZ(angle);
  rect(0, 0, sx, sy);
  x += dx;
  y += dy;
  angle += 0.07;
  if ((x > width - sx) | (x < 0)) {
    dx = -dx;
  }
  if ((y > height - sy) | (y < 0)) {
    dy = -dy;
  }
}
