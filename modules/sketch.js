var entities = [];

function setup() {

  let canvas = createCanvas(720, 480, WEBGL);
  canvas.parent('sketch-container')
  initialize();
}

function initialize() {
  for (var i = 0; i < 200; i++) {
    let entity = new Entity(
      random(0,width),
      random(0,height),
      random(4, 16),random(4, 16));
    entity.setSpeed(random(-5, 5), random(-5, 5));
    entity.setRSpeed(random(-0.05, 0.05))
    entity.setColor(random(0, 255), random(0, 255), random(0, 255))
    entity.type = ENTITY_TYPE.CIRCLE;
    entities.push(entity);
  }

}

function draw() {
  rectMode(CENTER);
  translate(-width / 2, -height / 2);
  background(51);
  update();
  constrainToViewPort();
  render();
}

function update() {
  entities.forEach((e)=>{
    e.update();
  }
  );
}

function constrainToViewPort() {
  entities.forEach((e)=>{
    var w = 0, h = 0;
    switch(e.type){
      case ENTITY_TYPE.POINT:
        w = 1; h = 1;
        break;
      case ENTITY_TYPE.CIRCLE:
        w = e.w; h= e.w;
        break;
      case ENTITY_TYPE.RECTANGLE:
        w = e .w; h = e.h;
        break;
    }
    if ((e.x > width - w) | (e.x < 0)) {
      e.dx = -e.dx;
    }
    if ((e.y > height - h) | (e.y < 0)) {
      e.dy = -e.dy;
    }

  }
  )
}

function render() {
  entities.forEach((e)=>{
    push();
    e.draw();
    pop();
  }
  );
}
