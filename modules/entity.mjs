const ENTITY_TYPE = {
  RECTANGLE: 1,
  CIRCLE: 2,
  POINT: 3,
}

class Entity {
  constructor(x=0, y=0, w=8, h=8) {

    // position
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.type = ENTITY_TYPE.RECTANGLE;
    //size
    this.w = w;
    this.h = h;
    // velocity
    this.dx = 0;
    this.dy = 0;
    this.dr = 0;
    // drawing priorities
    this.priority = 1;
    this.layer = 1;
    // colors
    this.color = {
      r: 255,
      g: 127,
      b: 127,
      a: 1
    };
  }
  setSpeed(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }

  setRSpeed(dr) {
    this.dr = dr;
  }

  setColor(r=255, g=255, b=255, a=1) {
    this.color.r = r;
    this.color.g = g;
    this.color.b = b;
    this.color.a = a;
  }

  update(s) {
    this.x += this.dx;
    this.y += this.dy;
    this.angle += this.dr;
  }

  draw(s) {
    s.noStroke();
    s.fill(this.color.r, this.color.g, this.color.b);
    s.translate(this.x + (this.w / 2), this.y + (this.h / 2));
    s.rotateZ(this.angle);
    switch (this.type) {
    case ENTITY_TYPE.RECTANGLE:
      s.rect(0, 0, this.w, this.h);
      break
    case ENTITY_TYPE.CIRCLE:
      s.circle(0, 0, this.w);
      break
    case ENTITY_TYPE.POINT:
      s.point(this.x, this.y);
      break
    }
  }
}

export {ENTITY_TYPE, Entity};
