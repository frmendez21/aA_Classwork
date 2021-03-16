const CONSTANTS = {
  PIPE_START: 420,
  PIPE_WIDTH: 50, 
  PIPE_HEIGHT: 245,
  PIPE_GAP: 150
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.bottomY = 0;
    this.topY = 400;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx)
    this.drawPipes(ctx);
  }

  
  drawPipes(ctx) {
    ctx.fillStyle = 'green'
    ctx.fillRect(CONSTANTS.PIPE_START, this.topY, CONSTANTS.PIPE_WIDTH, CONSTANTS.PIPE_HEIGHT)

    ctx.fillStyle = 'green'
    ctx.fillRect(CONSTANTS.PIPE_START, this.bottomY, CONSTANTS.PIPE_WIDTH, CONSTANTS.PIPE_HEIGHT)
  }

  movePipes() {

  }
}