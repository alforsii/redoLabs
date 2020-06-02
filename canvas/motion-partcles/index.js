let canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d');
canvas.setAttribute('id', 'canvas');
canvas.width = 400;
canvas.height = 400;
// document.body.appendChild(canvas);
//or we can append inside our parent element div.
let canvasBox = document.getElementById('canvas-box');
canvasBox.appendChild(canvas);

ctx.fillStyle = 'black';
// or->  ctx.fill(); //by default it's set to black.
ctx.fillRect(0, 0, canvas.width, canvas.height);
// //================
// let posX = 20, //starting point X.
//   posY = canvas.height / 2, //starting point Y.
//   vx = 5,
//   vy = -10,
//   gravity = 1;

// setInterval(() => {
//   ctx.fillStyle = 'black';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   posX += vx;
//   posY += vy;
//   //   vx *= 0.97; //reduces the speed by 10% every 30ms
//   //   vy *= 0.97; //and eventually will stop
//   //   vy += 1;//gravity;
//   //   vy += gravity;  //when here our particle will keep bouncing
//   //moving gravity after if statement will solve the issue;
//   if (posY > 300) {
//     vy *= -0.5;
//     vx *= 0.5;
//     posY = 300;
//   }
//   vy += gravity;
//   ctx.fillStyle = 'white';
//   ctx.fillRect(posX, posY, 10, 10);
// }, 30);
// //if we want to make bunch of particles

let particles = {}, //inside this object we have already 1object property 'Particle' from class Particle with all it's properties.
  particleIndex = 0,
  particleNum = 3;

class Particles {
  constructor(posX, posY) {
    this.posX = posX / 2;
    this.posY = posY / 2;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    particleIndex++;
    particles[particleIndex] = this; // assigning this class properties to particles{} object above;
    this.id = particleIndex;
    this.life = 0;
    this.maxLife = Math.random() * 30 + 50;
    this.gravity = 0.3;
    this.color = 'rg÷ba(' + parseInt(Math.random() * 255, 10) + ',0,0)'; //or
    this.color = 'hsl(' + parseInt(Math.random() * 360, 10) + ',100%,50%)'; //or
    // this.color = 'hsla(' + parseInt(Math.random() * 360, 10) + ',100%,50%,0.2)';
  }
  draw() {
    this.posX += this.vx;
    this.posY += this.vy;

    if (Math.random() < 0.1) {
      this.vx = Math.random() * 10 - 5; //random between -5 to 5.
      this.vy = Math.random() * 10 - 5;
    }
    this.vy += this.gravity;
    this.life++;

    if (this.life >= this.maxLife) {
      delete particles[this.id];
    }

    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, 10, 10);
  }
}

class Particle extends Particles {
  constructor(posX, posY) {
    super(posX, posY);
  }
  draw() {
    super.draw();
    // //turn off setInterval() before to check this properties.
    // console.log(particles[this.id]);         //same
    // console.log(this);                       //same
    // console.log(particles[particleIndex]);  //same
  }
}
const p = new Particle(canvas.width, canvas.height);
console.log(particles); //the object particle on top.

// for (let i = 0; i < 1; i++) {
//   //   new Particle(canvas.width, canvas.height);
//   console.log(i);
//   for (let j in particles) {
//     particles[j].draw(); //the same
//     // p.draw();            //the same

//     console.log(j); //1
//   }
// }

// setInterval(() => {
//   //   ctx.fillStyle = 'black';
//   ctx.fillStyle = 'rgba(0,0,0,0.2)';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < particleNum; i++) {
//     new Particle(canvas.width, canvas.height);
//   }
//   for (let i in particles) {
//     particles[i].draw();
//   }
// }, 30);

//or
setInterval(() => {
  ctx.globalCompositeOperation = 'source-over';
  //   ctx.fillStyle = 'black';
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleNum; i++) {
    new Particle(canvas.width, canvas.height);
    // console.log(Particle(canvas.width, canvas.height));
  }

  ctx.globalCompositeOperation = 'lighter';

  for (let i in particles) {
    particles[i].draw();
    // console.log(i);
  }
}, 30);
