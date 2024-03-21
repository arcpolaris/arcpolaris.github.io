var canvas = document.getElementById("canvas");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    mult(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
}

function getSize() {
    let p = Point(canvas.clientWidth, canvas.clientHeight);
    p.mult(window.devicePixelRatio);
    return p;
}

var ctx = canvas.getContext("2d");

function update(e) {
    let x = e.clientX;
    let y = e.clientY;
    let size = getSize();
    let data = ctx.createImageData(size.x, size.y);
}
canvas.addEventListener("mousemove", update);