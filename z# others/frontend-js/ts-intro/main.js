var Shape = /** @class */ (function () {
    function Shape(x, y) {
        var _this = this;
        this.getX = function () { return _this._x; };
        this.setX = function (x) { return _this._x = x; };
        this.getY = function () { return _this._y; };
        this.setY = function (y) { return _this._y = y; };
        this.draw = function () {
            console.log(_this._x.toString());
            console.log(_this._y.toString());
        };
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var shape = new Shape(13, 23);
// shape.setX(13)
// shape.setY(23)
console.log(shape.x);
console.log(shape.y);
console.log(shape.getX());
console.log(shape.getY());
// shape.draw()
