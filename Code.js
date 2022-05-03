canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);
var mouseX = 0
var mouseY = 0
var mouseClicked = false;
var key = false;

checklet = function(letter) {
    var x = 0
    const good = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
    while(x < good.length) {
        if(letter == good[x]) {
            return(true)
        }
        x++
    }
    return(false)
}

class textbox {
    constructor(x, y, width, height, num) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.num = num;
        this.hit = new hitbox(x, y, width, height);
        //max of 6 text length
        this.textlen = 0
        this.text = "I"
    }

    draw() {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.fillText(this.text, this.x + (this.w / 2), this.y + (this.h / 2) + 5);
    }

    checkletter(letter) {
        if(selected == this.num) {
            if(letter != false) {
                if(letter == "Backspace") {
                    var spit = this.text.split("");
                    var pop = spit.pop();
                    this.text = spit.toString();
                    this.text = this.text.replace(/,/g, "")
                    if(pop != undefined) {
                        this.textlen -= 1;
                    }
                }
                else if(checklet(letter)) {
                    if(this.textlen < 6) {
                        this.text += letter;
                        this.textlen ++;
                    }
                }
            }
        }
    }
}

triangle = function(x, y, width, height) { 
    ctx.beginPath()
    ctx.moveTo(x - (width / 2), y + (height / 2))
    ctx.lineTo(x, y - (height / 2))
    ctx.lineTo(x + (width / 2), y + (height / 2))
    ctx.lineTo(x - (width / 2), y + (height / 2))
    ctx.fill()
    ctx.closePath()
};

class hitbox {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    checkhit() {
        if(mouseX > this.x && mouseX < this.x + this.w) {
            if(mouseY > this.y && mouseY < this.y + this.h) {
                return(true)
            }
        }
    }
}

class slider {
    constructor(x1, y1, x2, y2, dir) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.slidex = ((x2 - x1) / 2) + x1;
        this.slidey = ((y2 - y1) / 2) + y1;
        this.dir = dir;
    }

    moveslide() {
        if(mouseX < this.x2 && mouseX > this.x1 - 15) {
                if(this.dir == "x"){
                    if(mouseY < this.slidey + 12 && mouseY > this.slidey - 12) {
                        if(mouseX < this.x2 - 10 && mouseX > this.x1 + 10) {
                            this.slidex = mouseX;
                            bob.width = ((this.slidex - 11 ) - this.x1) + Math.round((((slide12.slidex - 11 ) - slide12.x1) / 300) * 100) /100;
                        }
                    }
                }
                else if(this.dir == "y"){
                    if(mouseY < this.y2 && mouseY > this.y1) {
                        if(mouseY < this.y2 - 11 && mouseY > this.y1 + 11) {
                            this.slidey = mouseY;
                            bob.height = Math.round((2.77 - ((this.slidey - 11 ) - this.y1) / 100) * 1000) /1000
                        }
                    }
                }
                else if(this.dir == "xf"){
                    if(mouseY < this.slidey + 12 && mouseY > this.slidey - 12) {
                        if(mouseX < this.x2 - 10 && mouseX > this.x1 + 10) {
                            this.slidex = mouseX;
                            bob.width = ((slide1.slidex - 11 ) - slide1.x1) + Math.round((((this.slidex - 11 ) - this.x1) / 300) * 100) /100;
                        }
                    }
                }
        }
    }

    draw() {
        ctx.strokeStyle = "#999999"; 
        ctx.fillStyle = "#999999";
        ctx.beginPath();
        ctx.rect(this.x1, this.y1, this.x2-this.x1, this.y2-this.y1);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = "#000000"; 
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(this.slidex - 12.5, this.slidey - 12.5, 25, 25);
        ctx.fill();
        ctx.stroke();
    }
}

class char {
    constructor() {
        //weight in in kilograms
        this.width = 89.8;
        //height is in meters
        this.height = 1.7;
        this.x = 250;
        this.y = 250;
    }

    drawsmall() {
        var bx = this.width / 30 + 15;
        var by = (this.height * 100) / 30 + 15;
        //var by = ((slide2.slidey - (slide2.y1 + 11.5)) / 2) + 15;
        ctx.strokeStyle = "#737373"; 
        ctx.fillStyle = "#737373";
        //body
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, bx, by, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        //head
        ctx.beginPath();
        ctx.ellipse(this.x, this.y + (by) * -1, 10, 10, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    
    drawbig() {
        //var bx = ((slide1.slidex - (slide1.x1 + 11.5)) / 2) + 25;
        var bx = this.width / 2 + 15;
        var by = (this.height * 100) / 2 + 15;
        //var by = ((slide2.slidey - (slide2.y1 + 11.5)) / 2) + 15;
        ctx.strokeStyle = "#737373"; 
        ctx.fillStyle = "#737373";
        //body
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, bx, by, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        //head
        ctx.beginPath();
        ctx.ellipse(this.x, this.y + (by) * -1, 25, 25, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
};

findMid = function(x1, y1, x2, y2) {
    return ([(x2 - x1) / 2, (y2 - y1) / 2]);
}
findAng = function(x1, y1, x2, y2) {
    return (Math.atan((x2 - x1) / (y2 - y1)) * 180 / Math.PI)
}
findDist = function(x1, y1, x2, y2) {
    return (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
}

var move = function(x, y, ang, hop) {
    x += hop * Math.sin(ang);
    y += hop * Math.cos(ang);
    return([x, y])
}

var Run = function() {
    ctx.fillStyle = "#404040";
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fill();
    if(stage == 1) {
        if(latch2 == false) {
            if(key == false) {
                latch2 = true;
            }
        }
        if(latch2 == true) {
            if(key != false) {
                console.log(key)
                widthbox.checkletter(key);
                heightbox.checkletter(key);
                if(isNaN(parseInt(widthbox.text * 100)) == false) {
                    bob.width = parseInt(widthbox.text * 100) / 100;
                }
                else {
                    bob.width = 0;
                }
                
                if(isNaN(parseInt(heightbox.text * 100)) == false) {
                    bob.height = parseInt(heightbox.text * 100) / 100;
                }
                else {
                    bob.height = 0;
                }
                latch2 = false;
            }
        }

        ctx.fillStyle = "#262626";
        ctx.beginPath();
        ctx.rect(0, 410, 500, 500);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(190, 415, 120, 50);
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#e6e6ff";
        ctx.textAlign = "center";
        ctx.fillText("Ready!", 250, 450);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Width", 360, 435);
        ctx.fillText("Height", 360, 465);
        ctx.fillText(bob.width.toString() + " Kg", 50, 450);
        ctx.fillText(bob.height.toString() + " M", 50, 475);
        ctx.fillText((Math.round((bob.width * 2.205)* 1000) / 1000).toString() + " Lbs", 140, 450);
        ctx.fillText((Math.round((bob.height * 3.281)* 1000) / 1000).toString() + " Ft", 140, 475);

        if(mouseClicked) {
            if(widthbox.hit.checkhit()) {
                selected = widthbox.num
            }
            if(heightbox.hit.checkhit()) {
                selected = heightbox.num
            }
            slide1.moveslide();
            slide12.moveslide();
            slide2.moveslide();
            if(ready.checkhit()) {
                stage = 2;
                var Pe = (bob.width * 9.8 * 4.5) - (bob.width * 9.8 * 0.3);
                console.log(Pe);
                Pe = 8.2
                var stretchdist = Math.sqrt(2*Pe/4);
                console.log(stretchdist);
                var otherlen = 0.2 + 0.1 + bob.height + 0.35 + stretchdist;
                console.log(otherlen);
                added = 4.5 - otherlen;
            }
            latch = true;
        }
        else {
            latch = false;
        }
        bob.drawbig();
        slide1.draw();
        slide12.draw();
        slide2.draw();
        widthbox.draw();
        heightbox.draw();
    }
    else if(stage == 2) {
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "15px Arial";
        ctx.fillText(bob.width.toString() + " Kg", 50, 450);
        ctx.fillText(bob.height.toString() + " M", 50, 475);
        ctx.fillText((Math.round((bob.width * 2.205)* 1000) / 1000).toString() + " Lbs", 140, 450);
        ctx.fillText((Math.round((bob.height * 3.281)* 1000) / 1000).toString() + " Ft", 140, 475);
        ctx.fillText(added.toString(), 250, 250);
    }
};
  
//console.log(Math.atan(3/15) * 180/Math.PI)
window.addEventListener('mousedown', function (e) {
    mouseClicked = true;
  })
window.addEventListener('mouseup', function (e) {
    mouseClicked = false;
  })
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
});
window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})

var added;
var selected = 0
var widthbox = new textbox(400, 420, 50, 20, 1);
var heightbox = new textbox(400, 450, 50, 20, 2);
const ready = new hitbox(190, 415, 120, 50);
const widthup = new hitbox(350, 420, 20, 20);
const widthdown = new hitbox(350, 470, 20, 20);
const heightup = new hitbox(420, 420, 20, 20);
const heightdown = new hitbox(420, 470, 20, 20);
var bob = new char();
var slide1 = new slider(100, 25, 400, 50, "x");
var slide12 = new slider(100, 10, 400, 15, "xf");
var slide2 = new slider(425, 100, 450, 400, "y");
stage = 1;
var latch2 = false;
var latch = false;
var Interv = setInterval(Run, 20);