canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 200;
ctx = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

canvas.style.cursor = "none";

function normalizeVector(vector) {
  const magnitude = Math.sqrt(vector.reduce((sum, component) => sum + component ** 2, 0));
  if (magnitude === 0) {
    throw new Error("Cannot normalize a zero-length vector.");
  }
  return vector.map(component => component / magnitude);
}

function doesRayIntersectSphere(rayOrigin, rayDirection, sphere) {
  // Destructure sphere properties
  const { center, radius } = sphere;

  // Calculate the vector from the ray's origin to the sphere's center
  const oc = [
    rayOrigin[0] - center[0],
    rayOrigin[1] - center[1],
    rayOrigin[2] - center[2],
  ];

  // Calculate coefficients for the quadratic equation
  const a = rayDirection.reduce((sum, component) => sum + component ** 2, 0); // Should be 1 if rayDirection is normalized
  const b = 2 * oc.reduce((sum, component, i) => sum + component * rayDirection[i], 0);
  const c = oc.reduce((sum, component) => sum + component ** 2, 0) - radius ** 2;

  // Compute the discriminant
  const discriminant = b ** 2 - 4 * a * c;

  // Check the discriminant to determine intersection
  if (discriminant < 0) {
    return false; // No intersection
  }

  return true; // Intersection occurs
  //return discriminant;
}

// Example usage:
var sphere1 = {
  center: [3, 4, 10], // Sphere center
  radius: 2, // Sphere radius
};
var sphere2 = {
  center: [-10, 4, 10], // Sphere center
  radius: 1, // Sphere radius
};

const rayOrigin = [0, 0, 0];
//const result = doesRayIntersectSphere(rayOrigin, rayDirection, sphere);


ctx.fillStyle = "#111111";
ctx.beginPath();
ctx.rect(0, 0, 10, 10);
ctx.fill();


//console.log(result);
const screen = [];
const small = [];

for (let i = 0; i < 200; i++) {small.push([]);}
for (let i = 0; i < 200; i++) { screen.push(small);}
//for (let i = 0; i < 10; i++){console.log(screen[i])}
//console.log(screen);

var vector = [0,0,10];
var normalizedVector = normalizeVector(vector);
var result = false;
var move = 1
var charface = [1,1,1]

var Run = function(){
for (let i = 0; i < 200; i++){
  for (let j = 0; j < 200; j++){
    vector = [charface[0]*i,charface[1]*j,200];
    normalizedVector = normalizeVector(vector);
    screen[i][j] = doesRayIntersectSphere(rayOrigin, normalizedVector, sphere1);
    if(screen[i][j] === true){
    ctx.fillStyle = "#FFFFFF";
    }
    else{ctx.fillStyle = "#111111";}
    screen[i][j] = doesRayIntersectSphere(rayOrigin, normalizedVector, sphere2);
    if(screen[i][j] === true){
    ctx.fillStyle = "#FFFFFF";
    }
    ctx.beginPath();
    ctx.rect(i, j, 1, 1);
    ctx.fill();
  }
}
//sphere1.center = [move, 4, 10];
charface = [move,1,1]
move -= 0.1;
}
setInterval(Run, 20);