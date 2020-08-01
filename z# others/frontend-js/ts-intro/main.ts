interface IShape {
    x: number,
    y: number,
    draw(): void
}

class Shape implements IShape {
    _x: number
    _y: number

    constructor (x?: number, y?: number){
        this._x = x
        this._y = y
    }

    get x(){
        return this._x
    }

    set x(value: number){
        this._x = value
    }

    get y(){
        return this._y
    }

    getX = () => this._x

    setX = (x: number) => this._x = x

    getY = () => this._y

    setY = (y: number) => this._y = y

    draw = () => {
        console.log(this._x.toString())
        console.log(this._y.toString())
    }
}

let shape = new Shape(13, 23)
// shape.setX(13)
// shape.setY(23)

console.log(shape.getX())
console.log(shape.getY())
// shape.draw()