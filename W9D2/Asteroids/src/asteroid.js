const MovingObject = require('./moving_object')
const Util = require('./utils')

const PROPERTIES = {
    COLOR: 'pink',
    RADIUS: 15
};
function Asteroid(options) {
    this.color = PROPERTIES.COLOR;
    this.radius = PROPERTIES.RADIUS;
    this.position = options.position;
    this.vel = Util.randomVec(options.vel);
    MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject)