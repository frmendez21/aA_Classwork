const MovingObject = require('./moving_object')
const Util = require('./utils')

const PROPERTIES = {
    COLOR: 'pink',
    RADIUS: 20, 
    VEL: 5
};
function Asteroid(options, game) {
    options.color = PROPERTIES.COLOR;
    options.radius = PROPERTIES.RADIUS;
    options.vel = Util.randomVec(PROPERTIES.VEL);
    options.game = game;
    MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;