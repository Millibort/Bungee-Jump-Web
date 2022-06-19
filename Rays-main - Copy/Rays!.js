canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

class point {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        }
    }

class camera{
    constructor(x, y, z, size, dist){
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.dist = dist;
        this.screen = [];
        this.clearscreen();
    }

    clearscreen = function(){
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(0, 0, 500, 500);
        ctx.fill();
        this.screen = [];
        var i = 0;
        while(i < this.size){
            this.screen.push([]);
            var s = 0;
            while(s < this.size){
                this.screen[i].push(0);
                s++;
            }
            i++;
        }
    }

    renderall = function(list) {
        var runs = 0;
        while(runs < list.length) {
            this.renderpoint(list[runs]);
            runs ++;
        }
    }
    
    renderpoint = function(p){
        var run = 0;
        var run = p.x - this.x;
        var rise = p.y - this.y;
        var what = p.z - this.z;
        console.log([run, rise, what])
        if(run != 0){
            console.log(1)
            var goes = this.dist / rise;
            run *= goes;
            what *= goes;
        }
        var pix = Math.round((this.size / 2) + run);
        var piz = Math.round((this.size / 2) + what);
        console.log(pix);
        console.log(piz);
        if(pix < this.size && pix > 0 && piz < this.size && piz > 0) {
            this.screen[piz][pix] =  1;
        }
    }        
}

var Run = function() {
    cam.clearscreen();
    cam.renderpoint(new point(240, 400, 240));
    //console.log(cam.screen);
    ctx.fillStyle = "#FFFFFF";
    var goes = 0;
    while(goes < cam.screen.length) {
        var goes2 = 0;
        while(goes2 < cam.screen.length) {
            if(cam.screen[goes][goes2] == 1) {
                ctx.beginPath();
                ctx.rect(goes, goes2, goes+1, goes2+1);
                ctx.fill();
            }
            goes2 ++;
        }
       goes ++;
    }
    if(key == "w") {cam.y ++;}
    if(key == "s") {cam.y --;}
    if(key == "a") {cam.x ++;}
    if(key == "d") {cam.x --;}
    if(key == "i") {cam.z ++;}
    if(key == "k") {cam.z --;}
    //cam.y -= 1;
};

var key = false;
window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})

var cam = new camera(250,0,250,500,4000);
//var ps = [new point(1,3,0), new point(2,4,0), new point(3,6,0), new point(4,8,0)];
var Interv = setInterval(Run, 150);
/* cam.renderpoint(new point(4, 4, 2));
console.log(cam.screen);
cam.x -= 2;
cam.clearscreen();
cam.renderpoint(new point(4, 4, 2));
console.log(cam.screen); */