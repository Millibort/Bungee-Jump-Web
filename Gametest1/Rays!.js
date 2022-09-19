var screensetup = function() {
    //width needs 256
    //height needs 176
    var widthlower = Math.floor(swidth/256);
    var heightlower = Math.floor(sheight/176);

    if(widthlower > heightlower) {mult = heightlower;}
    else if(widthlower < heightlower) {mult = widthlower;}
    else {mult = heightlower}

    var widthremain = swidth-(256*mult)
    var heightremain = sheight-(176*mult)

    left = Math.floor(widthremain/2);
    zero = Math.floor(heightremain/2);

    canvas = document.createElement("canvas");
    canvas.width = swidth;
    canvas.height = sheight;
    ctx = canvas.getContext("2d");
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    loaddata();
}

var loaddata = function() {
    fetch("https://millibort.github.io/Gametest1/data/ground.json").then(res => res.json()).then(json => data[0] = json);
    fetch("https://millibort.github.io/Gametest1/data/air.json").then(res => res.json()).then(json => data[1] = json);
    fetch("https://millibort.github.io/Gametest1/data/water.json").then(res => res.json()).then(json => data[2] = json);
    fetch("https://millibort.github.io/Gametest1/data/grass.json").then(res => res.json()).then(json => data[3] = json);
    fetch("https://millibort.github.io/Gametest1/data/island.json").then(res => res.json()).then(json => data[4] = json);
    fetch("https://millibort.github.io/Gametest1/data/map1.json").then(res => res.json()).then(json => data[5] = json);
    fetch("https://millibort.github.io/Gametest1/data/background.json").then(res => res.json()).then(json => data[6] = json);
    pre = setInterval(prerun, 100);
}

function prerun() {
    if(data[back] != 1) {
        clearInterval(pre);
        console.log(data);
        setInterval(Run, 50);
    }
}

var Run = function() {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.rect(0, 0, swidth, sheight);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.rect(left, zero, 256*mult, 176*mult);
    ctx.fill();

    //5 was back and 4 was map
    //background draw
    const length = 64 * 2;
    const height = 44 * 2;
    var x = 0;
    while(x < length) {
        var y = 0;
        while(y < height){
            //console.log(data[5].map[y][x])
            ctx.fillStyle = data[back].map[y][x];
            ctx.beginPath();
            ctx.rect(left + (x*mult*4), zero + (y*mult*4), 4*mult, 4*mult);
            ctx.fill();
            y++;
        }
        x++;
    }
    //ctx.drawImage(data[5], left, zero)

    var i2 = 0;
    while(i2<11) {
        var i = 0;
        while(i<16) {
            var num = data[map].map[i2][i];
            var i3 = 0;
            while(i3<16) {
                var i4 = 0;
                while(i4<16) {
                    if(data[num].texture[Math.floor(an)][i3][i4] != "clear") {
                        ctx.fillStyle = data[num].texture[Math.floor(an)][i3][i4];
                        ctx.beginPath();
                        ctx.rect(left + (i*16*mult) + (i4*mult), zero + (i2*16*mult) + (i3*mult), 1*mult, 1*mult);
                        ctx.fill();
                    }
                    i4++;
                }
                i3++;
            }
            i++;
        }
        i2++
    }
    an+=0.25;
    if(an > 3.9999) {an = 0;}

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.rect(left + (mousex*mult), zero + (mousey*mult), 1*mult, 1*mult);
    ctx.fill();
    //console.log([mousex, mousey])
}

var mousex = false;
var mousey = false;
var key = false;

window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})
function mousemove(event){ 
    mousex = Math.floor((event.clientX -left) / mult);
    mousey =  Math.floor((event.clientY -zero) / mult);
}
window.addEventListener('mousemove', mousemove);


const map = 5;
const back = 6;
var an = 0;
var done;
var pre;
var data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var mult;
var zero;
var left;
const swidth = window. innerWidth -20;
const sheight = window. innerHeight -20;
screensetup();