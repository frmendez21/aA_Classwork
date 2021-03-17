
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

// Math.hypot(x2-x1, y2-y1)


MovingObject.prototype.isCollidedWith = function (otherObject){
    const distance = Math.hypot(this.position[0]-otherObject.position[0],this.position[1]-otherObject.position[1]);
    return ( distance < this.radius + otherObject.radius)
}

MovingObject.prototype.collideWith = function (otherObject) {
    if (this.isCollidedWith(otherObject)) {
        this.game.remove(this);
        this.game.remove(otherObject);
    }
}

module.exports = MovingObject;

