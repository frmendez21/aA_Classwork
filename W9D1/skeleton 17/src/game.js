import Level from "./level"
import Bird from "./bird"



export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    canvas.addEventListener('mousedown', () => this.mdEventListener())
  }

  animate(){
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx)

    if (this.running) {
      requestAnimationFrame(this.animate.bind(this))
    }
  };


  restart(){
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions)
    this.running = false;
    this.play();
  };

  play(){
    this.running = true; 
    this.animate();
  }

  click() {
    if (!this.running) {
      this.play();
      this.bird.flap()
    } else {
      this.bird.flap();
    }
  }

  
  mdEventListener() {
    this.click();
  }

}