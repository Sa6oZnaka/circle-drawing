var canvas = document.getElementById("canvas-id");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

drawCircle(100, 70, 70);
updateCanvas();

function drawCircle(xc, yc, r){

    let x = r;
    let y = 0;

    let P = 1 - r;
    while(x > y){
        y++;

        if(P <= 0){
            P += 2*y + 1;
        }else{
            x--;
            P += 2*y - 2*x + 1;
        }

        drawPixel(x + xc, y + yc, 255, 0, 0, 255);
        drawPixel(-x + xc, y + yc, 255, 0, 0, 255);
        drawPixel(x + xc, -y + yc, 255, 0, 0, 255);
        drawPixel(-x + xc, -y + yc, 255, 0, 0, 255);
        drawPixel(y + xc, x + yc, 255, 0, 0, 255);
        drawPixel(-y + xc, x + yc, 255, 0, 0, 255);
        drawPixel(y + xc, -x + yc, 255, 0, 0, 255);
        drawPixel(-y + xc, -x + yc, 255, 0, 0, 255);
    }
}

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

