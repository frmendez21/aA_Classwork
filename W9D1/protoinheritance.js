Function.prototype.inherits = function (parent) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject (location, type) {
    this.location = location;
    this.type = type;
}

MovingObject.prototype.move = function (distance) {
    this.location += distance;
};

MovingObject.prototype.printType = function() {
    console.log(`${this.type} up in the sky!`)
};

function Ship (location, type) {
    this.location = location;
    this.type = type;
}
Ship.inherits(MovingObject);


function Asteroid (location, type) {
    this.location = location;
    this.type = type;
}
Asteroid.inherits(MovingObject);

let ufo = new Ship(0, 'flying saucer');
ufo.move(3);
ufo.printType()
console.log(ufo.location);

let ast = new Asteroid(0, 'big rock');
ast.move(5);
ast.printType()
console.log(ast.location)