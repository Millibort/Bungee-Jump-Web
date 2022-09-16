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

/*
    console.log(widthlower);
    console.log(widthremain);
    console.log(heightlower);
    console.log(heightremain);

    console.log("----------------------------------")

    console.log(zero)
    console.log(left)
    console.log(mult)

    console.log(swidth);
    console.log(sheight);
*/
    canvas = document.createElement("canvas");
    canvas.width = swidth;
    canvas.height = sheight;
    ctx = canvas.getContext("2d");
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    loaddata();
}

var loaddata = function() {
    fetch("https://millibort.github.io/Gametest1/ground.json").then(res => res.json()).then(json => data[0] = json);
    fetch("https://millibort.github.io/Gametest1/air.json").then(res => res.json()).then(json => data[1] = json);
    fetch("https://millibort.github.io/Gametest1/map1.json").then(res => res.json()).then(json => data[2] = json);
    pre = setInterval(prerun, 1000);
}

function prerun() {
    if(data.length == 3) {
        clearInterval(pre);
        console.log(data);
        setInterval(Run, 33);
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

    var i2 = 0;
    while(i2<11) {
        var i = 0;
        while(i<16) {
            var num = data[2].map[i2][i];
            //var num = 0;
            //console.log(num)
            var i3 = 0;
            while(i3<16) {
                var i4 = 0;
                while(i4<16) {
                    ctx.fillStyle = data[num].texture[i3][i4];
                    ctx.beginPath();
                    ctx.rect(left + (i*16*mult) + (i4*mult), zero + (i2*16*mult) + (i3*mult), 1*mult, 1*mult);
                    ctx.fill();
                    i4++;
                }
                i3++;
            }
            /*ctx.beginPath();
            ctx.rect(left + (i*16*mult), zero + (i2*16*mult), 16*mult, 16*mult);
            ctx.fill();*/
            i++;
        }
        i2++
    }
}

//canvas.style.cursor = "none";
var key = false;
window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})

var done;
var pre;
var data = [1,1,1];
var mult;
var zero;
var left;
const swidth = window. innerWidth -20;
const sheight = window. innerHeight -20;
screensetup();