import {ENTITY_TYPE,Entity} from '/modules/entity.mjs';

var sceneCounter = 0;

class Scene {
  constructor(name="scene_" + sceneCounter++) {
    this.name = name;
    this.entities = []
  }

  initialize(s) {
  
  }

  update(s) {
    this.entities.forEach((e)=>{
      e.update(s);
    }
    );
  }
  
  render(s) {
    this.entities.forEach((e)=>{
      s.push();
      e.draw(s);
      s.pop();
    }
    );
  }

  constrainToViewPort(s){
    this.entities.forEach((e)=>{
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

}

export {Scene};
