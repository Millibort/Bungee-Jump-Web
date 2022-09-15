const viewAngle = 360;
const rays = 1500;
const renderDist = 100;
const hop = .5;
const moveSpeed = 2;
const screensize = 100;

const angChange = viewAngle/rays;
console.log(angChange);
const renDist = renderDist / hop;
var hits = [];
var charX = 5;
var charY = 5;
var X = 100;
var Y = 100;
var MoveAngle;
var wall;
var points = [];
var pointnum = 0
var hitboxes = [];
charhitboxes = [];

class point {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.num = num;
    }
}

class hitBox {
    constructor(x, y, width, height, type) {
      this.xl = x;
      this.yl = y;
      this.xb = x + width;
      this.yb = y + height;
      this.type = type;
    }

    checkHit = function() {
        if(X > this.xl & X < this.xb & Y > this.yl & Y < this.yb) {
            wall = this.type
            return(true);
        }
    }
};

class charhitBox {
    constructor(x, y, width, height, type) {
      this.xl = x;
      this.yl = y;
      this.xb = x + width;
      this.yb = y + height;
      this.type = type;
    }

    checkHit = function() {
        if(charX > this.xl & charX < this.xb & charY > this.yl & charY < this.yb) {
            console.log('test')
            wall = this.type
            return(true);
        }
    }
};

var newPoint = function() {
    console.log(charX, charY);
    points.push(new point(charX, charY, pointnum));
    hitboxes.push(new hitBox(charX, charY, 1, 1,'point'));
    pointnum ++;
}

var moveTo = function(num) {

}

var move = function(angs) {
    X += hop * Math.sin(angs);
    Y += hop * Math.cos(angs);
};

var createRays = function() {
    var num = 0;
    MoveAngle = 0;
    while(num < rays) {
        X = charX;
        Y = charY;
        var moves = 0;
        while(moves < renDist) {
            if(checkCollisions() === true) {
                hits.push([X, Y, wall]);
                moves = 4000000;
            }
            else {
                move(MoveAngle);
                moves ++;
            }
        }
        MoveAngle += angChange;
        num += 1;
    }
};

const reldraw = function() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.ellipse(screensize, screensize, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    var num = 0;
    while(num < hits.length) {
        if(hits[num][2] === "wall") {ctx.fillStyle = "white"}
        else if(hits[num][2] === "grid") {ctx.fillStyle = "#99999905"}
        else if(hits[num][2] === "chest") {ctx.fillStyle = "red"}
        else if(hits[num][2] === "enemy") {ctx.fillStyle = "red"}
        else if(hits[num][2] === "point") {ctx.fillStyle = "#5cecff"}
        ctx.beginPath();
        ctx.ellipse(hits[num][0] - charX + screensize, hits[num][1] - charY + screensize, 0.25, 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        num ++;
    }
    hits = [];
    pointdraw();
};

var addHitBox = function(x, y, width, height, type) {
    hitboxes.push(new hitBox(x,y,width,height,type));
    charhitboxes.push(new charhitBox(x-2.5,y-2.5,width+5,height+5,type))
}

var checkCollisions = function() {
    num = 0;
    while(num < hitboxes.length) {
        if(hitboxes[num].checkHit() === true) {return(true)}
        num ++;
    }
};

var checkCollisions2 = function() {
    num = 0;
    while(num < hitboxes.length) {
        if(charhitboxes[num].checkHit() === true) {return(true)}
        num ++;
    }
};

var pointdraw = function() {
    num = 0;
    while(num < points.length) {
        ctx.fillStyle = "#5cecff"
        ctx.beginPath();
        ctx.ellipse(points[num].x - charX + screensize, points[num].y - charY + screensize, 0.5, 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        num ++;
    }
};

var movechar = function() {
    if (key == 'a' || key2 == 'a') {
        charX += -moveSpeed;
        if(checkCollisions2() === true) {
            console.log('a');
            if(wall === 'grid' || wall === 'point') {}
            else {charX -= -moveSpeed;}
            
        }

    }
    else if (key == 'd' || key2 == 'd') {
        charX += moveSpeed;
        if(checkCollisions2() === true) {
            console.log('d');
            if(wall === 'grid' || wall === 'point') {}
            else {charX -= moveSpeed;}
        }
    }
    else if (key == 'w' || key2 == 'w') {
        charY += -moveSpeed;
        if(checkCollisions2() === true) {
            console.log('w');
            if(wall === 'grid' || wall === 'point') {}
            else {charY -= -moveSpeed;}
        }
    }
    else if (key == 's' || key2 == 's') {
        charY += moveSpeed;
        if(checkCollisions2() === true) {
            console.log('s');
            if(wall === 'grid' || wall === 'point') {}
            else {charY -= moveSpeed;}
        }
    }
};

var Run = function() {
    movechar();
    if (key == 'p') {newPoint();}
    else if (key == 'l') {console.log(points);}
    ctx.fillStyle = "#111111";
    ctx.beginPath();
    ctx.rect(0, 0, screensize*2, screensize*2);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.ellipse(screensize, screensize, screensize, screensize, 0, 0, Math.PI * 2);
    ctx.fill();
    createRays();
    reldraw();
};

canvas = document.createElement("canvas");
canvas.width = screensize*2;
canvas.height = screensize*2;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

canvas.style.cursor = "none";
var key = false;
window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})

var key2 = false;
window.addEventListener('keydown', function (b) {
    key2 = b.key;
})
  window.addEventListener('keyup', function (b) {
    key2 = false;
})

addHitBox(-1,-1,1,241,'wall');
addHitBox(-1,-1,241,1,'wall');
addHitBox(-1,241,241,1,'wall');
addHitBox(241,-1,1,241,'wall');
addHitBox(20,-1,1,20,'wall');
addHitBox(40,20,180,1,'wall');
addHitBox(20,40,1,20,'wall');
addHitBox(20,80,1,20,'wall');
addHitBox(20,100,20,1,'wall');
addHitBox(40,100,1,40,'wall');
addHitBox(20,120,1,20,'wall');
addHitBox(20,160,40,20,'wall');
addHitBox(20,200,1,20,'wall');
addHitBox(20,220,20,1,'wall');
addHitBox(60,200,20,20,'wall');
addHitBox(40,40,20,1,'wall');
addHitBox(40,40,1,20,'wall');
addHitBox(40,80,20,1,'wall');
addHitBox(60,80,1,60,'wall');
addHitBox(60,140,20,1,'wall');
addHitBox(60,60,40,1,'wall');
addHitBox(80,80,1,40,'wall');
addHitBox(100,60,1,60,'wall');
addHitBox(80,160,60,1,'wall');
addHitBox(100,200,1,20,'wall');
addHitBox(100,220,40,1,'wall');
addHitBox(140,200,1,20,'wall');
addHitBox(120,200,20,1,'wall');
addHitBox(120,180,1,20,'wall');
addHitBox(120,40,20,1,'wall');
addHitBox(120,40,1,60,'wall');
addHitBox(120,60,1,60,'wall');
addHitBox(180,20,1,80,'wall');
addHitBox(100,140,40,1,'wall');
addHitBox(140,120,1,20,'wall');
addHitBox(200,40,140,1,'wall');
addHitBox(180,60,20,1,'wall');
addHitBox(180,100,20,1,'wall');
addHitBox(180,140,20,1,'wall');
addHitBox(180,180,20,1,'wall');
addHitBox(20,80,20,1,'wall');
addHitBox(20,120,20,1,'wall');
addHitBox(20,160,20,1,'wall');
addHitBox(180,200,20,20,'wall');
addHitBox(135,207.5,5,5,'chest');
/*num = 0;
while(num < 400) {
    addHitBox(num,0,1,600,'grid');
    num += 40;
};
num = 0;
while(num < 400) {
    addHitBox(0,num,600,1,'grid');
    num += 40;
};*/
setInterval(Run, 20);
