const MovingObject = require('./moving_object')
const Util = require('./utils')

const PROPERTIES = {
    COLOR: 'pink',
    RADIUS: 15
};
function Asteroid(options, game) {
    options.color = PROPERTIES.COLOR;
    options.radius = PROPERTIES.RADIUS;
    options.vel = Util.randomVec(4);
    options.game = game;
    MovingObject.call(this, options);
    
};

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;