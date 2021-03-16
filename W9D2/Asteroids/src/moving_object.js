
function MovingObject (obj) {
    this.position = obj.position; 
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx) {
    
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
}

MovingObject.prototype.move = function () {
    let wrappedPos = this.game.wrap(this.position)
    this.position = wrappedPos;
    this.position[0] += this.vel[0];
    this.position[1] += this.vel[1];
}

module.exports = MovingObject;

