const ENTITY_TYPE = {
  RECTANGLE: 1,
  CIRCLE: 2,
  POINT: 3,
  SPHERE: 4,
  BOX: 5
}
let entity_counter = 0;
class Entity {
  constructor(
    name="noname_" + (entity_conuter++), 
    x=0, y=0, z=0, 
    w=8, h=8, l=0) {

    // position
    this.position = {
      x: x,
      y: y,
      z: z
    };

    this.rotation = {
      rx:0,
      ry:0,
      rz:0
    };

    this.type = ENTITY_TYPE.RECTANGLE;
    //size
    this.size = {
      w: w,
      h: h,
      l: l
    }
    // velocity
    this.speed = {
      x: 0,
      y: 0,
      z: 0
    }
    this.rspeed = {
      rx: 0,
      ry: 0,
      rz: 0
    }

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
   this.speed.x = dx;
    this.speed.y = dy;
  }

  setRSpeed(rx,ry,rz) {
    this.rspeed.x = rx;
    this.rspeed.y = ry;
    this.rspeed.z = rz;
  }

  setColor(r=255, g=255, b=255, a=1) {
    this.color.r = r;
    this.color.g = g;
    this.color.b = b;
    this.color.a = a;
  }

  update(s) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.position.z += this.speed.z;
    this.rotation.rx += this.rspeed.rx;
    this.rotation.ry += this.rspeed.ry;
    this.rotation.rz += this.rspeed.rz;
  }

  draw(s) {
    s.noStroke();
    s.fill(this.color.r, this.color.g, this.color.b);
    
    s.translate(
      this.position.x + (this.size.w / 2), 
      this.position.y + (this.size.h / 2),
      this.position.z + (this.size.l / 2)
      );
    
    s.rotateX(this.rotation.rx);
    s.rotateY(this.rotation.ry);
    s.rotateZ(this.rotation.rz);

    switch (this.type) {
    case ENTITY_TYPE.RECTANGLE:
      s.rect(0, 0, this.size.w, this.size.h);
      break
    case ENTITY_TYPE.CIRCLE:
      s.circle(0, 0, this.size.w);
      break
    case ENTITY_TYPE.POINT:
      s.point(this.position.x, this.positon.y);
      break
    case ENTITY_TYPE.SPHERE:
      s.sphere(this.size.w / 2);
      break;
    case ENTITY_TYPE.BOX:
      s.box(this.size.w / 2, this.size.h / 2,this.size.l/2);
      break;
    }
  }
}

export {ENTITY_TYPE, Entity};
