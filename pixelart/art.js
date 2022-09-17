var screensetup = function() {
    const width = 256
    const height = 176


    var widthlower = Math.floor(swidth/width);
    var heightlower = Math.floor(sheight/height);

    if(widthlower > heightlower) {mult = heightlower;}
    else if(widthlower < heightlower) {mult = widthlower;}
    else {mult = heightlower}

    var widthremain = swidth-(width*mult)
    var heightremain = sheight-(height*mult)

    left = Math.floor(widthremain/2);
    zero = Math.floor(heightremain/2);

    canvas = document.createElement("canvas");
    canvas.width = swidth;
    canvas.height = sheight;
    ctx = canvas.getContext("2d");
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    canvas.style.cursor = "none";
    setInterval(run, 50);
}

function run () {
    //console.log(key)
    if(key == 1) {mode = 0;}
    if(key == 2) {mode = 1;}
    if(key == 3) {mode = 2;}
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.rect(0, 0, swidth, sheight);
    ctx.fill();

    var color = false;
    if(key == "Shift"){
        if(latch == true) {latch = false}
        else if(latch == false) {latch = true; colorval = "#"}
    }
    if(latch == true) {color = true;}

    if(color == false) {
        if(mode == 0) {
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.rect(left, zero, 256*mult, 176*mult);
            ctx.fill();

            ctx.fillStyle = colorval;
            ctx.beginPath();
            ctx.rect(left + (mousex * mult), zero + (mousey * mult), 1 * mult, 1 * mult);
            ctx.fill();
            //console.log([mousex, mousey])
        }

        if(mode == 1) {
            
            if(key == "ArrowRight") {num++; if(num > 3) {num = 0}}
            if(key == "ArrowLeft") {num--; if(num < 0) {num = 3}}
            if(key == "ArrowUp") {num = 0;;}
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.rect(left + (40*mult), zero, 176*mult, 176*mult);
            ctx.fill();
            //console.log([mousex, mousey])

            var i = 0;
            while(i < 16) {
                var i2 = 0;
                while(i2 < 16) {
                    ctx.fillStyle = tiles[num][i2][i];
                    ctx.beginPath();
                    ctx.rect(left + (40*mult) + (i*11) * mult, zero + (i2*11) * mult, 11*mult, 11*mult);
                    ctx.fill();
                    i2++;
                }
                i++;
            ctx.fillStyle = colorval;
            ctx.beginPath();
            ctx.rect(left + (mousex * mult), zero + (mousey * mult), 5 * mult, 5 * mult);
            ctx.fill();
            }
        }

        if(mode == 0) {
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.rect(left, zero, 256*mult, 176*mult);
            ctx.fill();

            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.rect(left + (mousex * mult), zero + (mousey * mult), 1 * mult, 1 * mult);
            ctx.fill();
            //console.log([mousex, mousey])
        }
    }
    else if(color == true && key != false && key != "Shift") {
        colorval += key;
        console.log(colorval);
        ctx.fillStyle = colorval;
        ctx.beginPath();
        ctx.rect(left, zero, 256*mult, 176*mult);
        ctx.fill();
    }
    else if(color == true) {
        console.log(colorval);
        ctx.fillStyle = colorval;
        ctx.beginPath();
        ctx.rect(left, zero, 256*mult, 176*mult);
        ctx.fill();
    }
    key = false;
}

var mousex = false;
var mousey = false;

function mousemove(event){ 
    mousex = Math.floor((event.clientX -left) / mult);
    mousey =  Math.floor((event.clientY -zero) / mult);
}

var key = false;
window.addEventListener('keydown', function (e) {
    key = e.key;
})

window.addEventListener('mousemove', mousemove);

tiles = [[[["#000000"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]]],
[[["#FFFFFF"],["#000000"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]]], 
[[["#FFFFFF"],["#FFFFFF"],["#000000"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]]], 
[[["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#000000"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]], [["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"],["#FFFFFF"]]]] 

var colorval = "#"
var latch = false;
var num = 0;
var mode = 0;
var mult;
var zero;
var left;
const swidth = window. innerWidth -20;
const sheight = window. innerHeight -20;
screensetup();