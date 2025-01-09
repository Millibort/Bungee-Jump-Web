//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////things to change
const screensize = 600;
const rendersize = 200;
const renderdif = screensize/rendersize;
const movespeed = 0.01;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

canvas = document.createElement("canvas");
canvas.width = screensize;
canvas.height = screensize;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);
canvas.style.cursor = "none";

class sphere {
  constructor(center, radius, color) {
    this.center = center;
    this.radius = radius;
    this.color = color;
    this.type = 0;
    this.distance = 0;
  }
}

var rotate = function(vector, degree) {
  var x = vector[0]
  var y = vector[1]
  var test = Math.sqrt((x*x)+(y*y))*Math.sin(0.0174533*degree-0.785398)-(1.10461*10^(-16))
  vector = [vector[0],test,vector[2]];
  return(vector)
}

function normalizeVector(vector) {
  const magnitude = Math.sqrt(vector.reduce((sum, component) => sum + component ** 2, 0));
  if (magnitude === 0) {
    throw new Error("Cannot normalize a zero-length vector.");
  }
  return vector.map(component => component / magnitude);
}

function doesRayIntersectSphere(rayOrigin, rayDirection, sphere) {
  const center = sphere.center;
  const radius = sphere.radius;

  const oc = [
    rayOrigin[0] - center[0],
    rayOrigin[1] - center[1],
    rayOrigin[2] - center[2],
  ];

  const a = rayDirection.reduce((sum, component) => sum + component ** 2, 0);
  const b = 2 * oc.reduce((sum, component, i) => sum + component * rayDirection[i], 0);
  const c = oc.reduce((sum, component) => sum + component ** 2, 0) - radius ** 2;

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return false;
  }
  return true; 
}

function calcdist(list, origin){
  for(let i = 0; i < list.length; i++){
    list[i].distance = Math.sqrt((list[i].center[0] - origin.location[0])**2 + (list[i].center[1] - origin.location[1])**2 + (list[i].center[2] - origin.location[2])**2)
  }
  return(list)
}

function sort(list) {
  return [list].sort((a, b) => a.distance - b.distance);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////intial setup

var player = {
  location: [0,0,0],
}

var objects = [];
var visible = [];

objects.push(new sphere([0,3,20], 2, "red"))
objects.push(new sphere([0,0,10], 2, "#FFFFFF"))
objects.push(new sphere([-10,4,10], 1, "#FF00FF"))
objects.push(new sphere([10000,0,0], 50, "#0000FF"))

const screen = [];
const small = [];

for (let i = 0; i < rendersize; i++) {small.push([]);}
for (let i = 0; i < rendersize; i++) { screen.push(small);}

var key = false;
window.addEventListener('keydown', function (e) {
    key = e.key;
})
  window.addEventListener('keyup', function (e) {
    key = false;
})

var vector = [0,0,10];
var normalizedVector = normalizeVector(vector);
var result = false;
var move = 1
var charface = 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////run every frame

var Run = function(){
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.rect(0, 0, screensize, screensize);
  ctx.fill();

  for (let i = 0; i < rendersize; i++){
    for (let j = 0; j < rendersize; j++){
      visible = sort(calcdist(objects, player));
      vector = [player.location[0] + i-rendersize/2, player.location[1] + j-rendersize/2, player.location[2] + rendersize];
      normalizedVector = normalizeVector(vector);

      var hit = 0;
      for(let i2 = 0; i2 < objects.length; i2++){
        if(objects[i2].type == 0){if(doesRayIntersectSphere([player.location[0], player.location[1], player.location[2]], normalizedVector, objects[i2])){ctx.fillStyle = objects[i2].color; hit = 1;}}
      }

      if(hit == 1){
        ctx.beginPath();
        ctx.rect(i * renderdif, j * renderdif, renderdif, renderdif);
        ctx.fill();
      }
    }

    if(key == "s") {player.location[2] -= movespeed;}
    if(key == "w") {player.location[2] += movespeed;}
    if(key == "d") {player.location[0] += movespeed;}
    if(key == "a") {player.location[0] -= movespeed;}

    if(key == "e") {charface += movespeed; if(charface > 360){charface = 0}; console.log(charface);}
    if(key == "q") {charface -= movespeed; if(charface < 0){charface = 360}; console.log(charface);}
  }
}

console.log(sort(calcdist(objects, player)))

setInterval(Run, 20);

/*
const screensize = 300;
const movespeed = 0.01;
let yaw = 0; // Horizontal rotation (in degrees)
let pitch = 0; // Vertical rotation (in degrees)

canvas = document.createElement("canvas");
canvas.width = screensize;
canvas.height = screensize;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);
canvas.style.cursor = "none";

// Converts degrees to radians
const toRadians = (degrees) => degrees * (Math.PI / 180);

// Normalize a vector
function normalizeVector(vector) {
  const magnitude = Math.sqrt(vector.reduce((sum, component) => sum + component ** 2, 0));
  if (magnitude === 0) {
    throw new Error("Cannot normalize a zero-length vector.");
  }
  return vector.map(component => component / magnitude);
}

// Rotate a vector using a yaw (horizontal rotation) and pitch (vertical rotation)
function rotateVector(vector, yaw, pitch) {
  // Convert angles to radians
  const yawRad = toRadians(yaw);
  const pitchRad = toRadians(pitch);

  // Yaw rotation (around the y-axis)
  const cosYaw = Math.cos(yawRad);
  const sinYaw = Math.sin(yawRad);
  let rotatedX = vector[0] * cosYaw - vector[2] * sinYaw;
  let rotatedZ = vector[0] * sinYaw + vector[2] * cosYaw;

  // Pitch rotation (around the x-axis)
  const cosPitch = Math.cos(pitchRad);
  const sinPitch = Math.sin(pitchRad);
  let rotatedY = vector[1] * cosPitch - rotatedZ * sinPitch;
  rotatedZ = vector[1] * sinPitch + rotatedZ * cosPitch;

  return normalizeVector([rotatedX, rotatedY, rotatedZ]);
}

function sort(list) {
  var dist = [];
  var dlist = [];
  for (let i = 0; i < list.length; i++) {
    dist = [list[i].center[0] - cameraOrigin[0], list[i].center[1] - cameraOrigin[1], list[i].center[2] - cameraOrigin[2]];
    dlist.push(Math.sqrt(dist[0]^2 + dist[1]^2 + dist[2]^2));
  }
  return(dlist);
}

// Check if a ray intersects a sphere
function doesRayIntersectSphere(rayOrigin, rayDirection, sphere) {
  const center = sphere.center;
  const radius = sphere.radius;
  const oc = [
    rayOrigin[0] - center[0],
    rayOrigin[1] - center[1],
    rayOrigin[2] - center[2],
  ];

  const a = rayDirection.reduce((sum, component) => sum + component ** 2, 0);
  const b = 2 * oc.reduce((sum, component, i) => sum + component * rayDirection[i], 0);
  const c = oc.reduce((sum, component) => sum + component ** 2, 0) - radius ** 2;

  const discriminant = b ** 2 - 4 * a * c;
  return discriminant >= 0; // True if intersection occurs
}

// Example sphere
function sphere(center, radius, color) {
  this.center = center;
  this.radius = radius;
  this.color = color;
}

//const sphere = {
//  center: [3, 0, 10], // Sphere center
//  radius: 2, // Sphere radius
//};

const objects = [];

objects.push(new sphere([3,0,10], 2, "green"))
objects.push(new sphere([10,0,10], 1, "red"))
objects.push(new sphere([0,15,10], 5, "magenta"))
//objects.push(new sphere([5,0,10], 1, "red"))
//objects.push(new sphere([5,0,10], 1, "red"))

// Camera parameters
var cameraOrigin = [0, 0, 0];
const fov = 75; // Field of view in degrees

function render() {
  sort(objects)
  const aspectRatio = canvas.width / canvas.height;
  const fovRad = toRadians(fov);
  const halfHeight = Math.tan(fovRad / 2);
  const halfWidth = aspectRatio * halfHeight;

  const pixelWidth = (2 * halfWidth) / canvas.width;
  const pixelHeight = (2 * halfHeight) / canvas.height;

  // Iterate over each pixel
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      // Map pixel to NDC (Normalized Device Coordinates)
      const ndcX = (x + 0.5) * pixelWidth - halfWidth;
      const ndcY = halfHeight - (y + 0.5) * pixelHeight;

      // Calculate ray direction in camera space
      let rayDirection = normalizeVector([ndcX, ndcY, 1]);

      // Rotate ray direction based on camera yaw and pitch
      rayDirection = rotateVector(rayDirection, yaw, pitch);

      var intersects = false;
      var j = 0;
      // Check for intersection with the sphere
      for (let i = 0; i < objects.length; i++) {
        intersects = doesRayIntersectSphere(cameraOrigin, rayDirection, objects[i]);
        if(intersects) {j=i;i = objects.length}
      }

      // Color the pixel based on the intersection result
      ctx.fillStyle = intersects ? objects[j].color : "black";
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Handle user input for turning
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") yaw -= 5; // Turn left
  if (event.key === "ArrowRight") yaw += 5; // Turn right
  if (event.key === "ArrowUp") pitch -= 5; // Look up
  if (event.key === "ArrowDown") pitch += 5; // Look down

  if (event.key === "w") cameraOrigin[2] += 1;
  if (event.key === "a") cameraOrigin[0] -= 1;
  if (event.key === "s") cameraOrigin[2] -= 1;
  if (event.key === "d") cameraOrigin[0] += 1;
  render();
});

render();
*/