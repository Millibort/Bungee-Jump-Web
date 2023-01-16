canvas = document.createElement("canvas");
canvas.width = 750;
canvas.height = 750;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);
var xcam = 0;
var ycam = 0;
var old = [];

class Ball{
    constructor(x, y, xvel, yvel, size){
        this.x = x;
        this.y = y;
        this.xvel = xvel;
        this.yvel = yvel;
        this.size = size;
    }
}

class Space{
    constructor(){
        this.Balls = [];
    }

    AddBall = function(x, y, xvel, yvel, size){
        this.Balls.push(new Ball(x, y, xvel, yvel, size));
    }

    SimFrame = function(){
        var AvX = [];
        var AvY = [];
        for(let i=0; i < this.Balls.length; i++){
            AvX.push(this.Balls[i].x);
            AvY.push(this.Balls[i].y);
        }
        AvX = AverageArray(AvX);
        AvY = AverageArray(AvY);
        //console.log(AvX, AvY, this.Balls[0].size);

        var ChX = [];
        var ChY = [];
        for(let i=0; i < this.Balls.length; i++){
            //AvX += (AvX - this.Balls[i].x) * this.Balls[i].size
            ChX.push((AvX - this.Balls[i].x) * (this.Balls[i].size));
            ChY.push((AvY - this.Balls[i].y) * (this.Balls[i].size));
        }
        ChX = AverageArray(ChX);
        ChY = AverageArray(ChY);
        AvX += ChX;
        AvY += ChY;
        //console.log(AvX, AvY)

        ctx.fillStyle = "Green";
        ctx.beginPath();
        ctx.ellipse(AvX / 2 + xcam, AvY / 2 + ycam, 5, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        for(let i=0; i < this.Balls.length; i++){
            var SomeSize = 0;
            for(let i2=0; i2 < this.Balls.length; i2++){
                if(i2 != i){
                    SomeSize += this.Balls[i2].size;
                }
            }
            SomeSize = SomeSize;
            //console.log(SomeSize)
            this.Balls[i].xvel += SomeSize / (AvX - this.Balls[i].x)
            this.Balls[i].yvel += SomeSize / (AvY - this.Balls[i].y)
        }

        for(let i=0; i < this.Balls.length; i++){
            this.Balls[i].x += this.Balls[i].xvel / 10;
            this.Balls[i].y += this.Balls[i].yvel / 10;
        }

        console.log(AvX, AvY);
        old[0] = AvX;
        old[1] = AvY;
    }

    Draw = function(){
        ctx.fillStyle = "Gray";
        for(let i=0; i < this.Balls.length; i++){
            ctx.beginPath();
            ctx.ellipse(this.Balls[i].x / 2 + xcam, this.Balls[i].y / 2 + ycam, this.Balls[i].size / 8, this.Balls[i].size / 8, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

var AddArray = function(ar){
    var num = 0
    for(let i=0; i < ar.length; i++){
        num += ar[i];
    }
    return(num);
}

var AverageArray = function(ar){
    var num = 0
    for(let i=0; i < ar.length; i++){
        num += ar[i];
    }
    var num = num / ar.length;
    return(num);
}

var ClearScreen = function(){
    ctx.fillStyle = "#202020";
    ctx.beginPath();
    ctx.rect(0, 0, 750, 750);
    ctx.fill();
}

var Run = function() {
    ClearScreen();
    Universe.SimFrame();
    Universe.Draw();
    if(key == "w"){
        ycam += 10;
    }
    if(key == "a"){
        xcam += 10;
    }
    if(key == "s"){
        ycam -= 10;
    }
    if(key == "d"){
        xcam -= 10;
    }
}

var key = false;
window.addEventListener('keydown', function (e) {
    if(key == false) {
        key = e.key;
    }
})
window.addEventListener('keyup', function (e) {
    if(key == e.key) {
        key = false;
    }
})

var Universe = new Space;
// / (AvX - this.Balls[i].x)
Universe.AddBall(750, 750, 0, 0, 50);
Universe.AddBall(250, 250, 0, 0, 75);
var Interv = setInterval(Run, 16);