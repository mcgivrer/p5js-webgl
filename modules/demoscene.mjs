import {ENTITY_TYPE,Entity} from '/modules/entity.mjs';
import {Scene} from '/modules/scene.mjs';

class DemoScene extends Scene {
  constructor(name) {
    super(name);
  }

  initialize(s) {
    for (var i = 0; i < 100; i++) {
      let entity = new Entity("ball_" + i,
        // Position
        s.random(0, s.width),
        s.random(0, s.height),
        s.random(0, s.height),
        // Size
        s.random(4, 16),
        s.random(4, 16),
        s.random(4, 16));
      entity.setSpeed(s.random(-5, 5), s.random(-5, 5));
      entity.setRSpeed(s.random(-0.05, 0.05))
      entity.setColor(s.random(0, 255), s.random(0, 255), s.random(0, 255))
      entity.type = ENTITY_TYPE.SPHERE;
      this.entities.push(entity);
    }
  }
}

export {DemoScene};