import p5 from 'p5';
import {ENTITY_TYPE, Entity} from '/modules/entity.mjs';

const sketch = (s) => {

  s.entities = []

  s.setup = () => {

    let canvas = s.createCanvas(720, 480, s.WEBGL);
    canvas.parent('sketch-container')
    s.initialize();
  }

  s.initialize = () => {
    for (var i = 0; i < 200; i++) {
      let entity = new Entity(s.random(0, s.width),s.random(0, s.height),s.random(4, 16),s.random(4, 16));
      entity.setSpeed(s.random(-5, 5), s.random(-5, 5));
      entity.setRSpeed(s.random(-0.05, 0.05))
      entity.setColor(s.random(0, 255), s.random(0, 255), s.random(0, 255))
      entity.type = ENTITY_TYPE.CIRCLE;
      s.entities.push(entity);
    }

  }

  s.draw = () => {
    s.rectMode(s.CENTER);
    s.translate(-s.width / 2, -s.height / 2);
    s.background(51);
    s.update();
    s.constrainToViewPort();
    s.render();
  }

  s.update = () => {
    s.entities.forEach((e)=>{
      e.update(s);
    }
    );
  }

  s.constrainToViewPort = () => {
    s.entities.forEach((e)=>{
      var w = 0
        , h = 0;
      switch (e.type) {
      case ENTITY_TYPE.POINT:
        w = 1;
        h = 1;
        break;
      case ENTITY_TYPE.CIRCLE:
        w = e.w;
        h = e.w;
        break;
      case ENTITY_TYPE.RECTANGLE:
        w = e.w;
        h = e.h;
        break;
      }
      if ((e.x > s.width - w) | (e.x < 0)) {
        e.dx = -e.dx;
      }
      if ((e.y > s.height - h) | (e.y < 0)) {
        e.dy = -e.dy;
      }

    }
    )
  }

  s.render = () => {
    s.entities.forEach((e)=>{
      s.push();
      e.draw(s);
      s.pop();
    }
    );
  }

};

let p5webgl = new p5(sketch,'sketch-container');

