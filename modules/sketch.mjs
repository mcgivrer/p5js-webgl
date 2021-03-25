import p5 from 'p5';
import {ENTITY_TYPE, Entity} from '/modules/entity';
import {Scene} from '/modules/scene';
import {DemoScene} from '/modules/demoscene';

const sketch = (s) => {

  s.setup = () => {

    let canvas = s.createCanvas(600, 400, s.WEBGL);
    canvas.parent('sketch-container')
    s.scene = new DemoScene("demo");
    
    s.scene.initialize(s);
  }

  s.draw = ()=>{
    //s.rectMode(s.CENTER);
    s.ambientLight(255);
    s.ambientMaterial(255, 102, 94);

    s.translate(-s.width / 2, -s.height / 2, -s.height / 2);

    s.background(10);

    s.scene.update(s);
    s.scene.constrainToViewPort(s);
    s.scene.render(s);

  }
};

let p5webgl = new p5(sketch,'sketch-container');
