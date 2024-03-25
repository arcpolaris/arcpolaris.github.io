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
    static dist(a, b) {
        let x = a.x - b.x;
        let y = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    }
}

function getSize() {
    let rect = canvas.getBoundingClientRect();
    let p = new Point(rect.width, rect.height);

    return p;
}
function resize() {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
}
resize();

var ctx = canvas.getContext("2d");

function update(e) {
    let size = getSize();
    let img = ctx.getImageData(0, 0, size.x, size.y);
    let mouse = new Point(e.clientX, e.clientY);
    for (let x = 0; x < size.x; x++) {
        for (let y = 0; y < size.y; y++) {
            let point = new Point(x, y);
            let i = 4 * (x + y * size.x);

            let d = Point.dist(point, mouse);
            let r = 0;
            let g = 0;
            let b = 0;
            let a = 1;
            if (d < 10) {
                img.data[i + 0] = 255 * r;
                img.data[i + 1] = 255 * g;
                img.data[i + 2] = 255 * b;
                img.data[i + 3] = 255 * a;
            }
        }
    }
    ctx.putImageData(img, 0, 0);
}
canvas.addEventListener("mousemove", update);
window.addEventListener("resize", resize);