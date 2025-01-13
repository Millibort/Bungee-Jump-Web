//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////things to change
const screensize = 800;
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

function dotProduct(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

function getViewDirection(yaw, pitch) {
  const yawRad = toRadians(yaw);
  const pitchRad = toRadians(pitch);

  const x = Math.cos(pitchRad) * Math.sin(yawRad);
  const y = Math.sin(pitchRad);
  const z = Math.cos(pitchRad) * Math.cos(yawRad);

  return normalizeVector([x, y, z]);
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

function cullObjects(player, objects) {
  const playerViewDirection = getViewDirection(player.yaw*-1, player.pitch*-1);

   return objects.filter((obj) => {
    // Ensure the object has a valid location
    if (!obj.center || obj.center.length !== 3) {
      console.warn("Object missing valid center:", obj);
      return false; // Exclude invalid objects
    }
    // Calculate direction vector from player to object
    const directionToObject = normalizeVector([
      obj.center[0] - player.location[0],
      obj.center[1] - player.location[1],
      obj.center[2] - player.location[2],
    ]);
    
    // Check if object is within the player's field of view (in front of the player)
    return dotProduct(playerViewDirection, directionToObject) > 0;
  });
}

function calcdist(list, origin){
  for(let i = 0; i < list.length; i++){
    list[i].distance = Math.sqrt((list[i].center[0] - origin.location[0])**2 + (list[i].center[1] - origin.location[1])**2 + (list[i].center[2] - origin.location[2])**2)
  }
  return(list)
}

function sort(list) {
  var temp;
  var sorted = [];
  for(let i = 0; i < list.length; i++){
    temp = [0, 10000];
    for(let j = 0; j < list.length; j++){
      if(list[j].distance < temp[1]){temp[0] = j; temp[1] = list[j].distance;}
    }
    //console.log(temp[0]);
    sorted.push(list[temp[0]]);
    list[temp[0]].distance = 1000000;
  }
  return(sorted);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateMovementVector(yaw, pitch, movespeed, direction) {
  const yawRad = toRadians(yaw*-1);
  const pitchRad = toRadians(pitch*-1);

  // Movement direction multipliers
  const forward = direction === "forward" ? 1 : direction === "backward" ? -1 : 0;
  const strafe = direction === "right" ? 1 : direction === "left" ? -1 : 0;

  const x = Math.cos(pitchRad) * Math.sin(yawRad) * forward + Math.cos(yawRad) * strafe;
  const y = Math.sin(pitchRad) * forward;
  const z = Math.cos(pitchRad) * Math.cos(yawRad) * forward - Math.sin(yawRad) * strafe;

  return [x * movespeed, y * movespeed, z * movespeed];
}

function rotateVector(vector, yaw, pitch) {
  const yawRad = toRadians(yaw);
  const pitchRad = toRadians(pitch);

  // Rotate around the y-axis (yaw)
  const cosYaw = Math.cos(yawRad);
  const sinYaw = Math.sin(yawRad);
  let x = vector[0] * cosYaw - vector[2] * sinYaw;
  let z = vector[0] * sinYaw + vector[2] * cosYaw;

  // Rotate around the x-axis (pitch)
  const cosPitch = Math.cos(pitchRad);
  const sinPitch = Math.sin(pitchRad);
  let y = vector[1] * cosPitch - z * sinPitch;
  z = vector[1] * sinPitch + z * cosPitch;

  return normalizeVector([x, y, z]);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////intial setup

var player = {
  location: [0,0,0],
  yaw: 0,
  pitch: 0,
}

var objects = [];

objects.push(new sphere([0,3,20], 2, "red"))
objects.push(new sphere([0,0,10], 2, "#FFFFFF"))
objects.push(new sphere([-10,4,10], 1, "#FF00FF"))
//objects.push(new sphere([0,0,0], 100, "#0000FF"))



var visible = sort(calcdist(objects, player));

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
var face = 0;
var frame = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////run every frame

var Run = function(){
  visible = cullObjects(player, sort(calcdist(objects, player)));
  frame ++
  if(frame >= 5) {
    frame=0;
    
    //console.log(calcdist(objects, player)[0].distance);
  }

  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.rect(0, 0, screensize, screensize);
  ctx.fill();

  for (let i = 0; i < rendersize; i++){
    for (let j = 0; j < rendersize; j++){
      vector = [player.location[0] + i-rendersize/2, player.location[1] + j-rendersize/2, player.location[2] + rendersize];

      normalizedVector = normalizeVector(rotateVector(vector, player.yaw, player.pitch));

      var hit = 0;
      for(let i2 = 0; i2 < visible.length; i2++){
        if(visible[i2].type == 0){if(doesRayIntersectSphere([player.location[0], player.location[1], player.location[2]], normalizedVector, visible[i2])){ctx.fillStyle = visible[i2].color; hit = 1; i2 = visible[0].length + 1;}}
      }

      if(hit == 1){
        ctx.beginPath();
        ctx.rect(i * renderdif, j * renderdif, renderdif, renderdif);
        ctx.fill();
      }
    }
/*
    if(key == "s") {player.location[2] -= movespeed;}
    if(key == "w") {player.location[2] += movespeed;}
    if(key == "d") {player.location[0] += movespeed;}
    if(key == "a") {player.location[0] -= movespeed;}
    if(key == "r") {player.location[1] -= movespeed;}
    if(key == "f") {player.location[1] += movespeed;}
*/
    if (key === "w" || key === "s" || key === "d" || key === "a") {
      let direction = null;
      if (key === "w") direction = "forward";
      if (key === "s") direction = "backward";
      if (key === "d") direction = "right";
      if (key === "a") direction = "left";

      const movement = calculateMovementVector(player.yaw, player.pitch, movespeed, direction);
      player.location[0] += movement[0];
      player.location[1] += movement[1];
      player.location[2] += movement[2];
    }

    if (key === "r") {
      // Move up
      player.location[1] += movespeed;
    }

    if (key === "f") {
      // Move down
      player.location[1] -= movespeed;
    }

    if(key == "j") {player.yaw += movespeed; if(player.yaw > 360){player.yaw = 0};}
    if(key == "l") {player.yaw -= movespeed; if(player.yaw < 0){player.yaw = 360};}
    if(key == "i") {player.pitch += movespeed; if(player.pitch > 360){player.pitch = 0};}
    if(key == "k") {player.pitch -= movespeed; if(player.pitch < 0){player.pitch = 360};}
  }
}

//console.log(sort(calcdist(objects, player)))

setInterval(Run, 20);
/*
objects = [
  { center: [10, 0, 10] }, // In front
  { center: [-10, 0, -10] }, // Behind
  { center: [0, 5, 10] }, // Above and in front
  { center: [10, -5, -10] }, // Behind
  { notLocation: [5, 5, 5] }, // Invalid input: no `location`
];

const visibleObjects = cullObjects(player, objects);
console.log("Visible objects:", visibleObjects);*/