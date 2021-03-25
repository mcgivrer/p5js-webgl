import p5 from 'p5';
import {ENTITY_TYPE, Entity} from '/modules/entity';

const sketch = (s)=>{

  s.entities = []

  s.setup = ()=>{

    let canvas = s.createCanvas(600, 400, s.WEBGL);
    canvas.parent('sketch-container')
    s.initialize();
  }

  s.initialize = ()=>{
    for (var i = 0; i < 20; i++) {
      let entity = new Entity("ball_" + i,
        // Position
        s.random(0, s.width),
        s.random(0, s.height),
        s.random(0, s.height),
        // Size
        s.random(4, 16),
        s.random(4, 16),
        s.random(4, 16)
        );
      entity.setSpeed(s.random(-5, 5), s.random(-5, 5));
      entity.setRSpeed(s.random(-0.05, 0.05))
      entity.setColor(s.random(0, 255), s.random(0, 255), s.random(0, 255))
      entity.type = ENTITY_TYPE.SPHERE;
      s.entities.push(entity);
    }
  }

  s.draw = ()=>{
    //s.rectMode(s.CENTER);
    s.ambientLight(255);
    s.ambientMaterial(255, 102, 94);
    s.translate(-s.width / 2, -s.height / 2);
    s.background(51);
    s.update();
    s.constrainToViewPort();
    s.render();
  }

  s.update = ()=>{
    s.entities.forEach((e)=>{
      e.update(s);
    }
    );
  }

  s.constrainToViewPort = ()=>{
    s.entities.forEach((e)=>{
      var w = 0
        , h = 0;
      switch (e.type) {
      case ENTITY_TYPE.POINT:
        w = 1;
        h = 1;
        break;
      case ENTITY_TYPE.CIRCLE:
      case ENTITY_TYPE.SPHERE:
        w = e.size.w;
        h = e.size.w;
        break;
      case ENTITY_TYPE.RECTANGLE:
      case ENTITY_TYPE.BOX:
        w = e.size.w;
        h = e.size.h;
        break;
      }
      // Axe X
      if (e.position.x > s.width - w) {
        e.position.x = s.width - w
        e.speed.x = -e.speed.x;
      }
      if (e.position.x < 0) {
        e.position.x = 0
        e.speed.x = -e.speed.x;
      }
      // Axe Y
      if (e.position.y > s.height - h) {
        e.position.y = s.height - h
        e.speed.y = -e.speed.y;
      }
      if (e.position.y < 0) {
        e.position.y = 0
        e.speed.y = -e.speed.y;
      }
      // Axe Z
      if (e.position.s > s.height - h) {
        e.position.s = s.height - h
        e.speed.z = -e.speed.z;
      }
      if (e.position.z < 0) {
        e.position.z = 0
        e.speed.z = -e.speed.z;
      }
    }
    )
  }

  s.render = ()=>{
    s.entities.forEach((e)=>{
      s.push();
      e.draw(s);
      s.pop();
    }
    );
  }

}
;

let p5webgl = new p5(sketch,'sketch-container');
